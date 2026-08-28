import { useState } from "react";

export default function Contact() {
   const [formData, setFormData] = useState({
      inquiryType: "",
      name: "",
      email: "",
      message: "",
   });

   //combined onchange function for all fields
   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();

      // Would wire this up to an email service or API endpoint.
      console.log("Form submitted: ", formData);
   };

   return (
      <main className="contact-page">
         <h3>Please feel free to contact us.</h3>
         <p>
            If this website has piqued your interest even slightly, please feel
            free to contact us. We welcome casual consultations before you
            commission a project, or even just to get to know each other. Let's
            start by getting to know each other.
         </p>

         <div className="contact-page__divider" />

         {/* ---------- Inquiry type: two selectable pill options ---------- */}
         <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__group">
               <div className="contact-form__label-row">
                  <span className="badge_required">Required</span>
                  <span className="contact-form__label">Inquiry Details</span>
               </div>

               <div className="contact-form__options">
                  <label className="option-pill">
                     <input
                        type="radio"
                        name="inquiryType"
                        value="production"
                        checked={formData.inquiryType === "production"}
                        onChange={handleChange}
                        className="option-pill__radio"
                     />

                     <span className="option-pill__text">
                        Production consultation
                     </span>
                  </label>

                  <label className="option-pill">
                     <input
                        type="radio"
                        name="inquiryType"
                        value="other"
                        checked={formData.inquiryType === "other"}
                        onChange={handleChange}
                        className="option-pill__radio"
                     />

                     <span className="option-pill__text">Other Inquiries</span>
                  </label>
               </div>
            </div>

            {/* ---------- Name ---------- */}
            <div className="contact-form__group">
               <div className="contact-form__label-row">
                  <span className="badge_required">Required</span>
                  <span className="contact-form__label">Your name</span>
               </div>

               <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Jane Doe"
                  required
                  className="contact-form__input"
               />
            </div>

            {/* ---------- Email ---------- */}
            <div className="contact-form__group">
               <div className="contact-form__label-row">
                  <span className="badge_required">Required</span>
                  <span className="contact-form__label">Email address</span>
               </div>
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="jane@email.com"
                  required
                  className="contact-form__input"
               />
            </div>

            {/* ---------- Message ---------- */}
            <div className="contact-form__group">
               <div className="contact-form__label-row">
                  <span className="badge_required">Required</span>
                  <span className="contact-form__label">Inquiry details</span>
               </div>
               <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Please enter the details of you inquiry."
                  rows={6}
                  required
                  className="contact-form__textarea"
               />
            </div>

            {/* ---------- Submit ---------- */}
            <button type="submit" className="btn_submit">
               <span>Send Message</span>
               <span className="btn__icon" aria-hidden="true">
                  ›
               </span>
            </button>
         </form>
      </main>
   );
}
