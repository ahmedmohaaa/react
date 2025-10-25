import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
function Footer() {
  return (
  <footer class="footer">
  <div class="footer-container">
    <div class="footer-section about">
      <h3>عن الشركة</h3>
      <p>
        نحن شركة متخصصة في تصميم وتطوير المواقع والتطبيقات، نهدف لتقديم حلول
        رقمية مبتكرة تساعد عملاءنا على النجاح والنمو في العالم الرقمي.
      </p>
    </div>

    <div class="footer-section links">
      <h3>روابط سريعة</h3>
      <ul>
        <li><Link  to="/">الرئيسية</Link></li>
        <li><Link  to="/about">من نحن</Link></li>
        <li><Link  to="/services">خدماتنا</Link></li>
        <li><Link  to="/portfolio">أعمالنا</Link></li>
        <li><Link  to="/contact">اتصل بنا</Link></li>
      </ul>
    </div>

    <div class="footer-section contact">
      <h3>تواصل معنا</h3>
      <p><i class="fas fa-map-marker-alt"></i> سوهاج، مصر</p>
      <p><i class="fas fa-phone"></i> +20 1040288027</p>
      <p><i class="fas fa-envelope"></i> ma2012924@gmail.com</p>
    </div>
  </div>

  <div class="footer-bottom">
    <p>© 2025 رماحّ — جميع الحقوق محفوظة</p>
  </div>
</footer>
  )
}

export default Footer

