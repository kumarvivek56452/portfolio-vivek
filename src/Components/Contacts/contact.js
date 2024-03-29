import React from "react"
import "./contact.css"
import ContactImg from "../../Documents/tele.jpg"
import {RiSendPlaneFill} from "react-icons/ri"

const Contact=()=>{
    return (
        <div className="container contact-section" id="contact">
            <div className="row">
                <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
                    <div className="contact-form-image">
                        <img src={ContactImg} alt="contact-img" />
                    </div>

                </div>
                <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
                    <div className="contac-form-design">
                        <div className="text-center">
                            <h5>Contact Me</h5>
                        </div>
                        <form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="99ed7cc4-b0e1-4845-80ec-92dcee22b79a" />
  
  <div className="contact-form">
    <label className="form-label">Name</label>
    <input type="text" className="form-control" name="name" />
  </div>
  
  <div className="contact-form">
    <label className="form-label">E-mail</label>
    <input type="email" className="form-control" name="email" />
  </div>
  
  <div className="contact-form">
    <label className="form-label">Job-Type</label>
    <select className="custom-select-tag" name="jobType">
      <option>Full-time</option>
      <option>Working Student</option>
      <option>Part-time</option>
      <option>Contract</option>
    </select>
  </div>
  
  <div className="contact-form">
    <label className="form-label">Message</label>
    <textarea rows="4" type="text" className="form-control" name="message" />
  </div>
  
  <div className="button-submit">
    <button type="submit">Send <RiSendPlaneFill size="20" /></button>
  </div>
</form>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Contact;