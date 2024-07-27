import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";

const CtaOne = () => {
    const [isOpen, setOpen] = useState(false);
    return (
        <>
            <section className="call-to-action">
                <div className="auto-container">
                    <div className="inner-container">
                        <h5 className="title">Get your Canadian Visa Application started </h5>
                        <Link href="/apply" className="info-btn"> Apply Now</Link>
                    </div>
                </div>
            </section>

        </>
    );
};

export default CtaOne;
