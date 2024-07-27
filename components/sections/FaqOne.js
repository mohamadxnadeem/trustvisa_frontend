import React, { useState } from 'react';

const FaqOne = ({ data }) => {
  const initialIsActive = data ? new Array(data.length).fill(false) : [];
  const [isActive, setIsActive] = useState(initialIsActive);

  const handleToggle = (index) => {
    if (!data || index < 0 || index >= data.length) {
      return;
    }

    const newIsActive = [...isActive];
    newIsActive[index] = !newIsActive[index];
    setIsActive(newIsActive);
  };

  if (!data || !Array.isArray(data) || data.length === 0) {
    return null; // Return null or handle the case where data is missing or empty
  }

  return (
    <>
      <section className="faqs-section">
        <div className="anim-icons">
          <span className="icon icon-object-2" />
          <span className="icon icon-object-3" />
        </div>

        <div className="auto-container">
          <div className="row">
            <div className="faq-column col-lg-12 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="sec-title">
                  <h2>Frequently Asked Questions.</h2>
                </div>

                <ul className="accordion-box wow fadeInRight">
                  {data.map((faq, index) => (
                    <li
                      key={index}
                      className={`accordion block ${
                        isActive[index] ? 'active-block' : ''
                      }`}
                      onClick={() => handleToggle(index)}
                    >
                      <div
                        className={
                          isActive[index] ? 'acc-btn active' : 'acc-btn'
                        }
                      >
                        {faq.question}
                        <div className="icon fa fa-angle-right" />
                      </div>
                      <div
                        className={
                          isActive[index]
                            ? 'acc-content current'
                            : 'acc-content'
                        }
                      >
                        <div className="content">
                          <div className="text">{faq.answer}</div>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FaqOne;
