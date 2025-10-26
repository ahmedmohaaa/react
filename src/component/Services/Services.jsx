// Services.js
import React from "react";
import "./Services.css";
import { Link } from "react-router-dom";

function Services() {
  return (
    <div className="services-page">

      {/* ===== Header Section ===== */}
      <header className="services-header">
        <h1>خدماتنا الرقمية الاحترافية</h1>
        <p>
          نقدم حلول برمجية متكاملة للشركات والمؤسسات، من تصميم وتطوير المواقع، التطبيقات، الأنظمة الداخلية، والمتاجر الإلكترونية.
          هدفنا تقديم خدمات احترافية تساعدك على النمو والتفوق في السوق الرقمي.
        </p>
      </header>

      {/* ===== Services Cards ===== */}
      <section className="services-cards-container">
        <div className="service-card">
          <h2>تطوير الويب</h2>
          <p>
            تصميم وتطوير مواقع احترافية، متوافقة مع جميع الأجهزة:
          </p>
          <ul>
            <li>مواقع شركات وأعمال</li>
            <li>متاجر إلكترونية</li>
            <li>بوابات وأنظمة حجز</li>
            <li>تطبيقات ويب تفاعلية</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>تطبيقات الجوال</h2>
          <p>
            تطبيقات iOS وAndroid بأحدث التقنيات وتجربة مستخدم ممتازة:
          </p>
          <ul>
            <li>تطبيقات التسوق والدفع الإلكتروني</li>
            <li>تطبيقات التعليم الإلكتروني</li>
            <li>تطبيقات الخدمات اللوجستية</li>
            <li>تطبيقات الصحة والعناية الشخصية</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>أنظمة الشركات</h2>
          <p>
            أنظمة متكاملة لإدارة الشركات والمؤسسات:
          </p>
          <ul>
            <li>HRM وCRM</li>
            <li>ERP وأنظمة مالية</li>
            <li>لوحات تحكم وتحليلات Dashboard</li>
            <li>إدارة المخزون والمبيعات</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>متاجر إلكترونية</h2>
          <p>
            تصميم متاجر إلكترونية متكاملة مع تجربة شراء سلسة:
          </p>
          <ul>
            <li>متاجر B2C وB2B</li>
            <li>بوابات دفع آمنة</li>
            <li>نظام إدارة المنتجات والمخزون</li>
            <li>تقييم العملاء وتجربة UX ممتازة</li>
          </ul>
        </div>

        <div className="service-card">
          <h2>مشاريع متكاملة</h2>
          <p>
            تنفيذ مشاريع برمجية متكاملة حسب احتياجاتك:
          </p>
          <ul>
            <li>بوابات تعليمية إلكترونية</li>
            <li>أنظمة حجز متكاملة</li>
            <li>لوحات إدارة أعمال للشركات</li>
            <li>حلول ذكاء اصطناعي وتعلم آلي</li>
          </ul>
        </div>
      </section>

      {/* ===== CTA Section ===== */}
      <section className="services-cta">
        <h2>هل ترغب في تحويل فكرتك إلى مشروع ناجح؟</h2>
        <p>تواصل معنا الآن للحصول على استشارة مجانية وخطة تنفيذ احترافية.</p>
        <Link to="/contact" className="cta-button">تواصل معنا</Link>
      </section>

    </div>
  );
}

export default Services;
