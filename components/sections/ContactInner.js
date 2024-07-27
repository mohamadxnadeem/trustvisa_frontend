import React, { useState, useRef, useEffect } from "react";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

const ContactInner = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    year_of_birth: "",
    english_level: "",
    contact_number: "",
    from_country: "", // Add the "from_country" field
    cv: null,
  });

  const [submitted, setSubmitted] = useState(false);
  const [countries, setCountries] = useState([]); // State for storing countries
  const formRef = useRef(null);

  const sortedCountries = countries.slice().sort((a, b) => a.name.localeCompare(b.name));

  useEffect(() => {
    // Fetch the list of countries when the component mounts
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        const countries = data.map((country) => ({
          name: country.name.common,
          code: country.cca2,
        }));
        setCountries(countries);
      })
      .catch((error) => {
        console.error("Error fetching countries:", error);
      });
  }, []); // Run this effect only once when the component mounts

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log('Form Data:', formData);
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      cv: file,
    });
  };

  const handlePhoneChange = (value) => {
    setFormData({
      ...formData,
      contact_number: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', formData);
      const response = await fetch("https://trustvisaapi-production.up.railway.app/api/application/create/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Form submission failed");
      }
    } catch (error) {
      console.error("Network error:", error);
    }
  };

  return (
    <section className="contact-details">
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12">
            <div className="sec-title">
              <h2>Free Visa Application</h2>
              <div className="text">
                Are you curious to find out how soon you can get your Canadian visa? Fill in this free application, and we will get back to you within 24 hours to let you know how long it's going to take to get your visa approved.
              </div>
            </div>
            {!submitted ? (
              <form
                ref={formRef}
                id="contact_form"
                name="contact_form"
                className=""
                action="#"
                method="post"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="first_name"
                        className="form-control"
                        type="text"
                        placeholder="First Name"
                        onChange={handleInputChange}
                        required // Field is now required

                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="last_name"
                        className="form-control"
                        type="text"
                        placeholder="Last Name"
                        onChange={handleInputChange}
                        required // Field is now required

                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <input
                        name="email"
                        className="form-control required email"
                        type="email"
                        placeholder="Email"
                        onChange={handleInputChange}
                        required // Field is now required

                      />
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <select
                        name="year_of_birth"
                        className="form-control"
                        onChange={handleInputChange}
                      >
                        <option value="">Select Year of Birth</option>
                        {Array.from({ length: 100 }, (_, i) => (
                          <option key={i} value={2023 - i}>
                            {2023 - i}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <select
                        name="english_level"
                        className="form-control"
                        onChange={handleInputChange}
                        required // Field is now required

                      >
                        <option value="">Select English Level</option>
                        <option value="poor">Poor</option>
                        <option value="basic">Basic</option>
                        <option value="moderate">Moderate</option>
                        <option value="proficient">Proficient</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="mb-3">
                      <PhoneInput
                        international
                        countryCallingCodeEditable={false}
                        defaultCountry="RU"
                        className="phoneInput"
                        name="contact_number"
                        placeholder="Contact Number"
                        value={formData.contact_number}
                        onChange={handlePhoneChange}
                        required // Field is now required

                      />
                    </div>
                  </div>
                </div>

                <div className="mb-3">
                  <select
                    name="from_country"
                    id="from_country"
                    className="form-control"
                    onChange={handleInputChange}
                                            required // Field is now required

                  >
                    <option value="">Select Your Country</option>
                    {sortedCountries.map((country) => (
                      <option key={country.code} value={country.name}>
                        {country.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="mb-3">
                  <label htmlFor="cv" className="theme-btn btn-style-one full-width custom-file-upload">
                    <span>+ Add your CV ( optional )</span>
                    <input
                      type="file"
                      id="cv"
                      name="cv"
                      accept=".pdf, .doc, .docx"
                      onChange={handleFileChange}
                    />
                  </label>
                </div>
                
                <div className="mb-3">
                  <input
                    name="form_botcheck"
                    className="form-control"
                    type="hidden"
                    value=""
                  />

                  <button
                    type="submit"
                    className="theme-btn btn-style-one full-width mr-15"
                    data-loading-text="Please wait..."
                  >
                    <span className="btn-title">Submit Free Application</span>
                  </button>
                </div>

              </form>

            ) : (
              <div className="thank-you-message">
                <h3>Thank you for your application!</h3>
                <p>We will get back to you soon.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInner;
