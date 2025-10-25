import React from "react";
import ramahimg from "../../asset/ramah.png";
import "./Home.css";

function Home() {
  return (
    <div className="container">
      {/* ===== Header Section ===== */}
      <div className="header">
        <span className="logo">Ramah Tech</span>
        <img src={ramahimg} alt="Ramah Tech Logo" />
      </div>

      {/* ===== About Section ===== */}
      <div className="mid">
        <span>
          نحن شركة برمجة متخصصة في تطوير الحلول الرقمية الذكية، نبتكر وننفذ أفكارًا تتحول إلى منتجات قوية تنافس في السوق.  
          رؤيتنا أن نجعل التقنية وسيلة لتوسيع الأعمال، لا مجرد أداة.  
          نُقدّم خدمات متكاملة في تصميم وتطوير المواقع الإلكترونية، تطبيقات الجوال، الأنظمة الداخلية، والمتاجر الإلكترونية،  
          مع التركيز على الأداء، الأمان، وتجربة المستخدم.  
          <br /><br />
          تمتلك شركتنا خبرة واسعة في تطوير جميع أنواع الأنظمة، بما في ذلك أنظمة الـ ERP وأنظمة الإدارة المختلفة،  
          بالإضافة إلى تصميم وتنفيذ مشاريع متنوعة مثل المتاجر الإلكترونية، أنظمة الحجز، أنظمة الموارد البشرية،  
          والتطبيقات المتكاملة لمختلف القطاعات.  
          نحن نعمل على تحويل الأفكار إلى حلول رقمية متكاملة تدعم نمو أعمال عملائنا بكفاءة واحترافية.
        </span>
      </div>

      {/* ===== Services Section ===== */}
      <div className="services">
        <h2>خدماتنا</h2>
        <div className="service-cards">
          <div className="card">
            <h3>تطوير المواقع</h3>
            <p>نصمم ونطور مواقع احترافية حديثة وسريعة الاستجابة تناسب جميع الأجهزة.</p>
          </div>
          <div className="card">
            <h3>تطبيقات الجوال</h3>
            <p>نُنشئ تطبيقات iOS وAndroid بأحدث التقنيات وتجربة مستخدم متميزة.</p>
          </div>
          <div className="card">
            <h3>أنظمة الشركات</h3>
            <p>نبرمج أنظمة مخصصة لإدارة الشركات والمؤسسات بأعلى مستوى من الأمان والكفاءة.</p>
          </div>
        </div>
      </div>

      {/* ===== Portfolio Section ===== */}
      <div className="portfolio">
        <h2>أعمالنا</h2>
        <div className="projects">
          <div className="project">موقع متجر إلكتروني</div>
          <div className="project">نظام حجز مطعم</div>
          <div className="project">تطبيق تعليم إلكتروني</div>
        </div>
      </div>

      {/* ===== Testimonials Section ===== */}
      <div className="testimonials">
        <h2>آراء عملائنا</h2>
        <div className="testimonial-cards">
          <div className="testimonial">
            <p>
              “تجربة رائعة جدًا مع Ramah Tech! قاموا بتصميم وتطوير موقع شركتي باحترافية وسرعة. فريق مبدع ومتعاون للغاية.”
            </p>
            <h4>- أحمد خالد، صاحب شركة تسويق</h4>
          </div>
          <div className="testimonial">
            <p>
              “أنظمة الـ ERP اللي عملوها لنا فرقت كتير في إدارة شركتنا. دعم ممتاز واستجابة سريعة لأي تعديل.”
            </p>
            <h4>- سارة محمد، مديرة تشغيل</h4>
          </div>
          <div className="testimonial">
            <p>
              “نفذوا تطبيق جوال متكامل لمطعمنا، تجربة المستخدم كانت ممتازة، والتصميم عصري وجذاب.”
            </p>
            <h4>- محمد علي، مالك مطعم</h4>
          </div>
        </div>
      </div>

      {/* ===== Contact Section ===== */}
      <div className="contact">
        <h2>تواصل معنا</h2>
        <p>📞 01040288027</p>
        <p>📧 ma2012924@gmail.com</p>
        <p>📍 سوهاج - مصر</p>
      </div>
    </div>
  );
}

export default Home;
