import React, { useRef , useState} from "react";
import emailjs from '@emailjs/browser';
import "./contact.scss";

const Contact = () => {
  const formref =useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailInput, setEmailInput ]= useState({
    title:"",
    mail:"",
    text:"",
  })
 function handlChange(e){
    const {name, value }=e.target
    setEmailInput((prev) => {
      return { ...prev, [name]: value };
    });
  }
  console.log("hi", emailInput)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_rjb4d39', 'template_ixxga7i', formref.current, 'TSDFmMgD3XOwoXul6')
      .then((result) => {
         setSuccess(true)
      }, (error) => {
          setError(false)
      });
      const [name, value ]=e.target
      console.log(emailInput)
      setEmailInput({
        title:"",
        mail:"",
        text:"",

      })
  };
  return (
    <div className="container">
      <div className="contact">
        <div className="textContainer">
          <h1>Let’s work together</h1>
          <div className="item">
            <h2>Mail</h2>
            <span>hello@react.dev</span>
          </div>
          <div className="item">
            <h2>Address</h2>
            <span>Hello street New York</span>
          </div>
          <div className="item">
            <h2>Phone</h2>
            <span>+1 234 5678</span>
          </div>
        </div>
        <div className="formContainer">
         <form
         ref={formref}
          onSubmit={sendEmail}
          >
            <input type="text" onChange={handlChange} 
            value={emailInput.title}
             required placeholder="Name" name="title" />
            <input type="email"  onChange={handlChange} value={emailInput.mail} required placeholder="Email" name="mail" />
            <textarea rows={8}  onChange={handlChange}  value={emailInput.text}  placeholder="Message" name="text" />
            <button>Submit</button>
            {error && "Error"}
          {success && "Success"}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
