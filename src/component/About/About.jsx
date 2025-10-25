import React from "react";
import "./About.css";
{/*import ceoImg from "../../asset/ceo.png"; // صورة المدير التنفيذي (يمكنك تغييرها)
*/}
function About() {
  return (
    <div className="about-container">
      
      {/* ===== Header ===== */}
      <div className="about-header">
        <h1>عنّا</h1>
        <p>نظرة شاملة عن شركة Ramah Tech ورؤيتها ورسالتها وقيمها.</p>
      </div>

      {/* ===== Company Info ===== */}
      <div className="company-info">
        <div className="company-text">
          <h2>تاريخ الشركة</h2>
          <p>
            تأسست شركة <strong>Ramah Tech</strong> منذ عام سابق لتقديم حلول برمجية مبتكرة ومتكاملة، 
            تساعد الشركات والمؤسسات على النمو في العالم الرقمي.
          </p>

          <h2>المدير التنفيذي</h2>
          <p>
            <strong>أحمد محمد</strong>، المدير التنفيذي، يتمتع بخبرة واسعة في تطوير البرمجيات وإدارة المشاريع الرقمية.
          </p>
        </div>

        <div className="company-ceo">
          {/*<img src={ceoImg} alt="CEO Ahmed Mohamed" />*/}
        </div>
      </div>

      {/* ===== Vision & Mission ===== */}
      <div className="vision-mission">
        <div className="vision">
          <h3>رؤيتنا</h3>
          <p>
            أن نكون الشركة الرائدة في تقديم حلول برمجية ذكية ومبتكرة، ونساهم في نجاح عملائنا على المستوى الرقمي.
          </p>
        </div>
        <div className="mission">
          <h3>رسالتنا</h3>
          <p>
            تقديم خدمات برمجية متكاملة، مع التركيز على الجودة، الأمان، وتجربة المستخدم، لتحقيق أقصى قيمة لعملائنا.
          </p>
        </div>
      </div>

      {/* ===== Values ===== */}
      <div className="values-section">
        <h2>قيمنا</h2>
        <div className="values-cards">
          <div className="value-card">الإبداع</div>
          <div className="value-card">الجودة</div>
          <div className="value-card">الالتزام</div>
          <div className="value-card">دعم العملاء</div>
          <div className="value-card">التطوير المستمر</div>
        </div>
      </div>

      {/* ===== CTA ===== */}
      <div className="about-cta">
        <h3>هل ترغب في معرفة المزيد عن خدماتنا؟</h3>
        <a href="/services" className="cta-button">استعرض خدماتنا</a>
      </div>

    </div>
  );
}

export default About;
