<template>
  <div class="home-page-optimized">
    <!-- Hero Section - Mobile First Responsive -->
    <section class="hero-section">
      <div class="hero-background"></div>
      <div class="hero-container">
        <h1 class="hero-title">Naturaleza y Espiritualidad</h1>
        <p class="hero-subtitle">
          Cultivamos plantas con amor y dedicación, inspirados por la sabiduría de Ganesha
        </p>
        <div class="hero-buttons">
          <a href="#productos" class="btn btn-primary">Ver Productos</a>
          <a href="#contacto" class="btn btn-secondary">Contactarnos</a>
        </div>
      </div>
    </section>

    <!-- About Section -->
    <section id="nosotros" class="about-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Nuestra Historia</h2>
          <p class="section-subtitle">
            Conoce la esencia de Vivero Ganesha y lo que nos hace únicos
          </p>
        </div>

        <div class="about-grid">
          <div class="about-image">
            <img src="/img/ganesha.png" alt="Vivero Ganesha" class="optimized-image">
          </div>
          <div class="about-content">
            <h3 class="about-title">Quiénes Somos</h3>
            <p class="about-text">
              Vivero Ganesha nació de la pasión por la naturaleza y la espiritualidad.
            </p>
            <p class="about-text">
              Inspirados por la figura de Ganesha, el removedor de obstáculos en la cultura hindú, 
              cultivamos plantas que no solo embellecen espacios, sino que también traen armonía y 
              prosperidad a los hogares.
            </p>
            <a href="#contacto" class="btn btn-primary">Conocer Más</a>
          </div>
        </div>
      </div>
    </section>

    <!-- Products Section -->
    <section id="productos" class="products-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Nuestros Productos</h2>
          <p class="section-subtitle">
            Descubre nuestra amplia variedad de plantas y productos para el jardín
          </p>
        </div>

        <div class="products-grid">
          <!-- Product Card 1 -->
          <div class="product-card">
            <div class="product-image-container">
              <img src="/img/plantas_citricas.png" alt="Plantas Cítricas" class="product-image">
              <div class="product-badge">Consultar</div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Plantas Cítricas</h3>
              <p class="product-description">Limones, naranjas, mandarinas y más variedades frescas.</p>
              <a href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha,%20consulto%20por%20Plantas%20Cítricas" 
                 target="_blank" class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Consultar
              </a>
            </div>
          </div>

          <!-- Product Card 2 -->
          <div class="product-card">
            <div class="product-image-container">
              <img src="/img/arboles_frutales.png" alt="Árboles Frutales" class="product-image">
              <div class="product-badge">Consultar</div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Árboles Frutales</h3>
              <p class="product-description">Manzanos, perales, ciruelos y variedades exóticas.</p>
              <a href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha,%20consulto%20por%20Árboles%20Frutales" 
                 target="_blank" class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Consultar
              </a>
            </div>
          </div>

          <!-- Product Card 3 -->
          <div class="product-card">
            <div class="product-image-container">
              <img src="/img/plantas_florales.png" alt="Plantas Florales" class="product-image">
              <div class="product-badge">Consultar</div>
            </div>
            <div class="product-content">
              <h3 class="product-title">Plantas Florales</h3>
              <p class="product-description">Coloridas y aromáticas, perfectas para decorar.</p>
              <a href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha,%20consulto%20por%20Plantas%20Florales" 
                 target="_blank" class="btn btn-whatsapp">
                <i class="fab fa-whatsapp"></i> Consultar
              </a>
            </div>
          </div>
        </div>

        <div class="products-cta">
          <a href="/productos" class="btn btn-primary btn-large">Ver Todos los Productos</a>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section id="contacto" class="contact-section">
      <div class="section-container">
        <div class="section-header">
          <h2 class="section-title">Contacto</h2>
          <p class="section-subtitle">
            Estamos aquí para ayudarte con cualquier consulta sobre plantas y jardinería
          </p>
        </div>

        <div class="contact-grid">
          <!-- Essential Info Chunk -->
          <div class="contact-card">
            <h3 class="contact-title">
              <i class="fas fa-store"></i> Información Esencial
            </h3>
            <div class="contact-info">
              <div class="info-item">
                <i class="fas fa-map-marker-alt text-red-500"></i>
                <div>
                  <h4>Dirección</h4>
                  <p>Thorne 3055, Ituzaingo</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fas fa-phone text-blue-500"></i>
                <div>
                  <h4>Teléfono</h4>
                  <p>+54 9 1169011279</p>
                </div>
              </div>
              <div class="info-item">
                <i class="fab fa-whatsapp text-green-500"></i>
                <div>
                  <h4>WhatsApp</h4>
                  <p>Disponible 24/7</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Schedule Chunk -->
          <div class="contact-card">
            <h3 class="contact-title">
              <i class="fas fa-clock"></i> Horarios de Atención
            </h3>
            <div class="schedule-info">
              <div class="schedule-item">
                <span class="schedule-days">Lunes a Viernes</span>
                <span class="schedule-hours">10:00 - 13:00 y 17:00 - 19:00</span>
                <span class="schedule-status open">Abierto</span>
              </div>
              <div class="schedule-item">
                <span class="schedule-days">Sábados</span>
                <span class="schedule-hours">9:00 - 13:00</span>
                <span class="schedule-status open">Abierto</span>
              </div>
              <div class="schedule-item">
                <span class="schedule-days">Domingos</span>
                <span class="schedule-hours">Cerrado</span>
                <span class="schedule-status closed">Cerrado</span>
              </div>
            </div>
          </div>

          <!-- Quick Actions Chunk -->
          <div class="contact-card contact-actions">
            <h3 class="contact-title">
              <i class="fas fa-bolt"></i> Contacto Rápido
            </h3>
            <div class="quick-actions">
              <a href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha" 
                 target="_blank" class="btn btn-whatsapp btn-large">
                <i class="fab fa-whatsapp"></i> WhatsApp
              </a>
              <a href="tel:+5491169011279" class="btn btn-primary btn-large">
                <i class="fas fa-phone"></i> Llamar
              </a>
              <a href="https://maps.google.com/?q=Thorne+3055+Ituzaingo" 
                 target="_blank" class="btn btn-secondary btn-large">
                <i class="fas fa-directions"></i> Ir al local
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Floating WhatsApp Button -->
    <div class="floating-whatsapp-container">
      <a href="https://wa.me/5491169011279?text=Hola%20Vivero%20Ganesha,%20me%20gustaría%20hacer%20una%20consulta"
         target="_blank"
         class="floating-whatsapp"
         aria-label="Contactar por WhatsApp">
        <i class="fab fa-whatsapp"></i>
        <div class="whatsapp-tooltip">Escríbenos por WhatsApp</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

// SEO y Meta tags
onMounted(() => {
  document.title = 'Vivero Ganesha - Naturaleza y Espiritualidad | Plantas y Jardinería'
  
  const metaDescription = document.querySelector('meta[name="description"]')
  if (metaDescription) {
    metaDescription.setAttribute('content', 
      'Vivero Ganesha: plantas cítricas, árboles frutales, plantas florales y más. Cultivamos con amor y dedicación, inspirados por la sabiduría de Ganesha.'
    )
  }
})
</script>

<style scoped>
/* 🎯 RESPONSIVE DESIGN - MOBILE FIRST 
   📱 Mobile: 320px+
   📱 Large Mobile: 480px+
   📱 Tablet: 768px+
   💻 Desktop: 1024px+
   🖥️ Large Desktop: 1280px+
*/

.home-page-optimized {
  width: 100%;
  overflow-x: hidden;
}

/* 🎨 HERO SECTION - Mobile First */
.hero-section {
  position: relative;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #16a34a 0%, #15803d 50%, #166534 100%);
  color: white;
  text-align: center;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0.1;
  background-image: 
    radial-gradient(circle at 10% 20%, white 0, transparent 50%),
    radial-gradient(circle at 80% 80%, #eab308 0, transparent 50%),
    radial-gradient(circle at 40% 40%, white 0, transparent 50%);
}

.hero-container {
  position: relative;
  z-index: 10;
  max-width: 1200px;
  margin: 0 auto;
}

.hero-title {
  font-size: 1.875rem; /* 30px */
  font-weight: bold;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.hero-subtitle {
  font-size: 1rem; /* 16px */
  margin-bottom: 1.5rem;
  max-width: 90%;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.hero-buttons {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}

/* 📱 Tablet Breakpoint */
@media (min-width: 640px) {
  .hero-section {
    padding: 4rem 1.5rem;
  }
  
  .hero-title {
    font-size: 2.25rem; /* 36px */
  }
  
  .hero-subtitle {
    font-size: 1.125rem; /* 18px */
    max-width: 70%;
  }
  
  .hero-buttons {
    flex-direction: row;
    justify-content: center;
  }
}

/* 💻 Desktop Breakpoint */
@media (min-width: 1024px) {
  .hero-section {
    padding: 6rem 2rem;
  }
  
  .hero-title {
    font-size: 3rem; /* 48px */
  }
  
  .hero-subtitle {
    font-size: 1.25rem; /* 20px */
    max-width: 60%;
  }
}

/* 🖥️ Large Desktop */
@media (min-width: 1280px) {
  .hero-title {
    font-size: 3.75rem; /* 60px */
  }
  
  .hero-subtitle {
    font-size: 1.5rem; /* 24px */
  }
}

/* 🎯 BUTTON SYSTEM - Fitts' Law Optimized */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  font-weight: 600;
  text-decoration: none;
  transition: all 0.3s ease;
  cursor: pointer;
  border: none;
  
  /* Fitts' Law: Minimum 44px touch target */
  min-height: 44px;
  min-width: 44px;
}

.btn:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

.btn-primary {
  background-color: #eab308;
  color: #166534;
}

.btn-primary:hover {
  background-color: #ca8a04;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
}

.btn-secondary {
  background-color: transparent;
  color: white;
  border: 2px solid white;
}

.btn-secondary:hover {
  background-color: white;
  color: #166534;
  transform: translateY(-2px);
}

.btn-whatsapp {
  background-color: #16a34a;
  color: white;
}

.btn-whatsapp:hover {
  background-color: #15803d;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(22, 163, 74, 0.3);
}

.btn-large {
  padding: 1rem 2rem;
  font-size: 1.125rem;
  min-height: 48px;
}

/* 📱 Mobile: Full width buttons */
@media (max-width: 639px) {
  .btn {
    width: 100%;
    max-width: 280px;
  }
  
  .btn-large {
    padding: 1rem 1.5rem;
  }
}

/* 🎨 SECTION STYLES */
.section-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.about-section, .contact-section {
  padding: 3rem 0;
  background-color: white;
}

.products-section {
  padding: 3rem 0;
  background-color: #f0fdf4;
}

.section-header {
  text-align: center;
  margin-bottom: 2rem;
}

.section-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #166534;
  margin-bottom: 0.75rem;
}

.section-subtitle {
  font-size: 0.875rem;
  color: #6b7280;
  max-width: 90%;
  margin: 0 auto;
}

/* 📱 Tablet */
@media (min-width: 640px) {
  .section-container {
    padding: 0 1.5rem;
  }
  
  .about-section, .products-section, .contact-section {
    padding: 4rem 0;
  }
  
  .section-header {
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .section-subtitle {
    font-size: 1rem;
    max-width: 70%;
  }
}

/* 💻 Desktop */
@media (min-width: 1024px) {
  .section-container {
    padding: 0 2rem;
  }
  
  .about-section, .products-section, .contact-section {
    padding: 5rem 0;
  }
  
  .section-header {
    margin-bottom: 4rem;
  }
  
  .section-title {
    font-size: 2.5rem;
  }
  
  .section-subtitle {
    font-size: 1.125rem;
    max-width: 60%;
  }
}

/* 🖥️ Large Desktop */
@media (min-width: 1280px) {
  .section-title {
    font-size: 3rem;
  }
  
  .section-subtitle {
    font-size: 1.25rem;
  }
}

/* 🎨 ABOUT SECTION - Gestalt Principles */
.about-grid {
  display: grid;
  gap: 2rem;
  align-items: center;
}

.about-image {
  order: 2;
}

.about-content {
  order: 1;
}

.about-title {
  font-size: 1.25rem;
  font-weight: bold;
  color: #15803d;
  margin-bottom: 1rem;
}

.about-text {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.optimized-image {
  width: 100%;
  height: auto;
  border-radius: 1rem;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.optimized-image:hover {
  transform: scale(1.02);
}

/* 💻 Desktop About Grid */
@media (min-width: 1024px) {
  .about-grid {
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
  }
  
  .about-image {
    order: 1;
  }
  
  .about-content {
    order: 2;
  }
  
  .about-title {
    font-size: 1.875rem;
  }
  
  .about-text {
    font-size: 1.125rem;
  }
}

/* 🛍️ PRODUCTS SECTION - Gestalt Grid */
.products-grid {
  display: grid;
  gap: 1.5rem;
  margin-bottom: 2rem;
}

.product-card {
  background: white;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
}

.product-card:hover {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  transform: translateY(-4px);
}

.product-image-container {
  position: relative;
  overflow: hidden;
}

.product-image {
  width: 100%;
  height: 12rem; /* 192px */
  object-fit: cover;
  transition: transform 0.5s ease;
}

.product-card:hover .product-image {
  transform: scale(1.1);
}

.product-badge {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  background-color: #16a34a;
  color: white;
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: bold;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.product-content {
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.product-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #15803d;
}

.product-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
  flex-grow: 1;
}

.products-cta {
  text-align: center;
  margin-top: 2rem;
}

/* 📱 Tablet Products Grid */
@media (min-width: 640px) {
  .products-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .product-image {
    height: 14rem; /* 224px */
  }
  
  .product-title {
    font-size: 1.25rem;
  }
  
  .product-description {
    font-size: 1rem;
  }
}

/* 💻 Desktop Products Grid */
@media (min-width: 1024px) {
  .products-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .product-image {
    height: 16rem; /* 256px */
  }
  
  .product-title {
    font-size: 1.5rem;
  }
}

/* 📞 CONTACT SECTION - Cognitive Load Optimized */
.contact-grid {
  display: grid;
  gap: 1.5rem;
}

.contact-card {
  background: white;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border-left: 4px solid #16a34a;
}

.contact-title {
  font-size: 1.125rem;
  font-weight: bold;
  color: #374151;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.contact-info {
  display: grid;
  gap: 1rem;
}

.info-item {
  display: flex;
  align-items: start;
  gap: 0.75rem;
  padding: 0.75rem;
  background-color: #f9fafb;
  border-radius: 0.5rem;
}

.info-item i {
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.info-item h4 {
  font-weight: 600;
  color: #6b7280;
  font-size: 0.875rem;
  margin-bottom: 0.25rem;
}

.info-item p {
  color: #111827;
  font-weight: 600;
}

.schedule-info {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;
  background-color: #eff6ff;
  border-radius: 0.5rem;
}

.schedule-days {
  font-weight: 600;
  color: #374151;
}

.schedule-hours {
  color: #6b7280;
}

.schedule-status {
  padding: 0.25rem 0.75rem;
  border-radius: 9999px;
  font-size: 0.75rem;
  font-weight: bold;
}

.schedule-status.open {
  background-color: #dcfce7;
  color: #166534;
}

.schedule-status.closed {
  background-color: #fee2e2;
  color: #dc2626;
}

.contact-actions {
  border-left-color: #eab308;
}

.quick-actions {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

/* 📱 Tablet Contact Grid */
@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
  
  .contact-actions {
    grid-column: span 2;
  }
  
  .quick-actions {
    flex-direction: row;
    justify-content: center;
  }
}

/* 💻 Desktop Contact Grid */
@media (min-width: 1024px) {
  .contact-grid {
    grid-template-columns: repeat(3, 1fr);
  }
  
  .contact-actions {
    grid-column: span 1;
  }
  
  .quick-actions {
    flex-direction: column;
  }
}

/* 💬 FLOATING WHATSAPP - Fitts' Law & Doherty Principle */
.floating-whatsapp-container {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  z-index: 50;
}

.floating-whatsapp {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3.5rem; /* 56px - Mobile */
  height: 3.5rem; /* 56px - Mobile */
  background-color: #16a34a;
  color: white;
  border-radius: 50%;
  text-decoration: none;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
  transition: all 0.3s ease;
  animation: float 3s ease-in-out infinite;
}

.floating-whatsapp:hover {
  background-color: #15803d;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.4);
  transform: scale(1.1);
}

.floating-whatsapp i {
  font-size: 1.5rem;
}

.whatsapp-tooltip {
  position: absolute;
  right: 100%;
  top: 50%;
  transform: translateY(-50%);
  margin-right: 0.75rem;
  background-color: #374151;
  color: white;
  padding: 0.5rem 0.75rem;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  white-space: nowrap;
  opacity: 0;
  transition: opacity 0.2s ease;
  pointer-events: none;
}

.whatsapp-tooltip::after {
  content: '';
  position: absolute;
  left: 100%;
  top: 50%;
  transform: translateY(-50%);
  border: 4px solid transparent;
  border-left-color: #374151;
}

.floating-whatsapp:hover .whatsapp-tooltip {
  opacity: 1;
}

@keyframes float {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
}

/* 📱 Larger touch target on tablet+ */
@media (min-width: 640px) {
  .floating-whatsapp-container {
    bottom: 1.5rem;
    right: 1.5rem;
  }
  
  .floating-whatsapp {
    width: 4rem; /* 64px - Tablet+ */
    height: 4rem; /* 64px - Tablet+ */
  }
  
  .floating-whatsapp i {
    font-size: 2rem;
  }
}

/* 🎯 ACCESSIBILITY & PERFORMANCE */

/* Focus states */
.btn:focus,
.floating-whatsapp:focus {
  outline: 2px solid #3b82f6;
  outline-offset: 2px;
}

/* High contrast mode */
@media (prefers-contrast: high) {
  .btn-primary {
    background-color: #ca8a04;
    color: #000;
  }
  
  .section-title {
    color: #000;
  }
}

/* Reduced motion */
@media (prefers-reduced-motion: reduce) {
  .floating-whatsapp {
    animation: none;
  }
  
  .btn,
  .product-card,
  .optimized-image {
    transition: none !important;
  }
}

/* Print styles */
@media print {
  .floating-whatsapp-container {
    display: none;
  }
  
  .hero-section {
    background: #16a34a !important;
    color: white !important;
  }
}

/* Touch device optimizations */
@media (hover: none) and (pointer: coarse) {
  .floating-whatsapp {
    width: 4rem;
    height: 4rem;
  }
  
  .btn {
    min-height: 48px;
    padding: 1rem 1.5rem;
  }
}
</style>
