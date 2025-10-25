import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const projects = [
    // 12 مشاريع ويب وأنظمة
    { title: "موقع تجارة إلكترونية", type: "ويب", description: "متجر إلكتروني كامل مع بوابة دفع آمنة وتجربة مستخدم سلسة." },
    { title: "نظام ERP للشركات", type: "ERP", description: "إدارة الموارد البشرية، المبيعات، المخازن والفواتير." },
    { title: "موقع أخبار", type: "ويب", description: "موقع إخباري ديناميكي مع إدارة محتوى كامل وسلايدر متحرك." },
    { title: "نظام إدارة المخازن", type: "نظام إدارة", description: "تحكم كامل بالمخزون، التقارير والفواتير." },
    { title: "منصة تعليم إلكتروني", type: "ويب", description: "منصة تعليمية تفاعلية مع تسجيل الطلاب ومتابعة الدروس." },
    { title: "موقع شركة برمجيات", type: "ويب", description: "موقع تعريفي للشركة مع معرض أعمال ونماذج مشاريع." },
    { title: "نظام CRM للشركات", type: "ERP", description: "إدارة العملاء، متابعة الصفقات، وتحليل الأداء." },
    { title: "موقع حجز مطاعم", type: "ويب", description: "نظام حجز إلكتروني مع خيارات الدفع والحجوزات المتعددة." },
    { title: "نظام إدارة المشاريع", type: "نظام إدارة", description: "تخطيط المشاريع، المهام، وتتبع الإنجازات." },
    { title: "موقع مدونة شخصية", type: "ويب", description: "مدونة شخصية مع إدارة المقالات والتعليقات." },
    { title: "نظام إدارة الموارد البشرية", type: "ERP", description: "إدارة الموظفين، الرواتب، والإجازات." },
    { title: "موقع خدمات مالية", type: "ويب", description: "منصة لتقديم الخدمات المالية الإلكترونية للعملاء." },
    { title: "موقع خدمات مالية", type: "ويب", description: "منصة لتقديم الخدمات المالية الإلكترونية للعملاء." },

    // 3 تطبيقات جوال
    { title: "تطبيق توصيل طلبات", type: "تطبيق", description: "تطبيق iOS و Android لتوصيل الطلبات مع تتبع مباشر." },
    { title: "تطبيق تعليمي للأطفال", type: "تطبيق", description: "تطبيق ألعاب تعليمية تفاعلية للأطفال لتعلم المهارات الأساسية." },
    { title: "تطبيق إدارة مخازن", type: "تطبيق", description: "تطبيق جوال لإدارة المخازن وتتبع المخزون بسهولة." },
  ];

  return (
    <div className="portfolio-container" id="portfolio">
      <h2>أعمالنا</h2>
      <p>استعرض مجموعة من مشاريعنا الاحترافية المتنوعة بين الويب، الأنظمة، والتطبيقات الجوالة.</p>

      <div className="projects-grid">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <div className="project-type">{proj.type}</div>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
