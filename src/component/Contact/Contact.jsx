import React, { useState } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  // تغيير بيانات النموذج
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    // إرسال عبر EmailJS
    emailjs.send(
      'service_di7f917',       // Service ID
      'template_pesvv3l',      // Template ID
      {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      },
      'ue2SF8fOxlM1o6v6y'            // Public Key الخاص بك
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSuccess(true);
      setFormData({ name: "", email: "", message: "" }); // تفريغ الحقول
      setTimeout(() => setSuccess(false), 5000);         // رسالة نجاح مؤقتة
    })
    .catch((err) => {
      console.log('FAILED...', err);
    });
  };

  return (
    <div className="contact-container">
      <h2>تواصل معنا</h2>

      {/* ===== وسائل الاتصال ===== */}
      <div className="contact-info">
        <div className="contact-item">
          <h3>📧 البريد الإلكتروني</h3>
          <p>ma2012924@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3>📞 الهاتف</h3>
          <p>01275104037</p>
          <p>01223388087</p>
          <p>01040288027</p>
        </div>
        <div className="contact-item">
          <h3>🌐 وسائل التواصل الاجتماعي</h3>
          <p>
            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">Facebook</a> |{" "}
            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">Instagram</a> |{" "}
            <a href="https://www.twitter.com/" target="_blank" rel="noreferrer">Twitter</a> |{" "}
            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LinkedIn</a>
          </p>
        </div>
      </div>

      {/* ===== نموذج الرسالة ===== */}
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="اسمك"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="بريدك الإلكتروني"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="اكتب رسالتك هنا..."
          rows="6"
          required
        />
        <button type="submit">أرسل الرسالة</button>
        {success && <p className="success-message">تم إرسال رسالتك بنجاح!</p>}
      </form>
    </div>
  );
}

export default Contact;
