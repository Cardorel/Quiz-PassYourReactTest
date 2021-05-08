import React from 'react';
import './contacts.modules.scss'
import BrowserDesign from '../Browser/browserDesign';

function Contact() {
    return (
        <BrowserDesign>
            <div className="w-75 m-auto browser-design-conatiner-all">
                <h2 className="text-center text-uppercase mt-3 pb-4">Contacts</h2>
                <div className="d-flex justify-content-around contact-container">
                    <div>
                        <h4 className="text-center mb-4">Phones</h4>
                        <p>+38 (063) 460 75 69</p>
                        <p>+38 (050) 821 13 46</p>
                    </div>
                    <div>
                        <h4 className="text-center mb-4">E-mails</h4>
                        <p>cardorelngassaki@gmail.com</p>
                        <p>cardorelngassaki@yahoo.fr</p>
                    </div>
                </div>
            </div>
        </BrowserDesign>
    )
}

export default Contact
