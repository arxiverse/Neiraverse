const STORAGE_KEYS = {
   language: 'neiraverse.language',
   activeSection: 'neiraverse.activeSection',
   cache: 'neiraverse.ui-cache.v1',
};

const translations = {
   en: {
      'app.tagline': 'Digital Polymath',
      'nav.home': 'Back To Root',
      'nav.sections': 'Sections',
      'menu.introduction': 'Introduction',
      'menu.services': 'Services',
      'menu.gallery': 'Gallery',
      'menu.testimonials': 'Testimonials',
      'menu.about': 'About',
      'menu.contact': 'Contact',
      'footer.text': '&copy; 2025 Neiraverse. Crafted with passion. Design by <a href="https://templatemo.com" target="_blank">TemplateMo</a>',
      'common.smallTagline': 'Digital Excellence',
      'common.backToMenu': '← Back to Menu',
      'common.backToMenuText': 'Back to Menu',
      'intro.badge': 'Est. 2020',
      'intro.headline': 'We Build Digital<br><span>Experiences</span> That Matter',
      'intro.subtext': 'Transforming visionary ideas into powerful digital realities through cutting-edge technology and creative excellence.',
      'intro.primaryCta': 'Explore Our Work',
      'intro.secondaryCta': 'Watch Showreel',
      'intro.cards.fast': 'Lightning Fast',
      'intro.cards.pixel': 'Pixel Perfect',
      'intro.cards.secure': 'Secure & Reliable',
      'intro.metrics.projects': 'Projects Delivered',
      'intro.metrics.retention': 'Client Retention',
      'intro.metrics.awards': 'Industry Awards',
      'intro.metrics.support': 'Global Support',
      'intro.values.one.title': 'Innovation First',
      'intro.values.one.body': 'We embrace emerging technologies and push creative boundaries to deliver solutions that set new industry standards.',
      'intro.values.two.title': 'Human-Centered',
      'intro.values.two.body': 'Every pixel, every interaction is designed with real users in mind. We create experiences people genuinely love.',
      'intro.values.three.title': 'Results Driven',
      'intro.values.three.body': 'Beautiful design meets measurable impact. We track, iterate, and optimize for outcomes that matter to your business.',
      'intro.techLabel': 'Technologies We Master',
      'services.title': 'Our Services',
      'services.subtitle': 'Comprehensive solutions for the digital age',
      'services.tabs.development': 'Development',
      'services.tabs.design': 'Design',
      'services.tabs.consulting': 'Consulting',
      'services.tabs.support': 'Support',
      'services.items.ai.title': 'AI Development',
      'services.items.ai.body': 'Custom AI solutions powered by machine learning and neural networks for intelligent automation and predictive analytics.',
      'services.items.web.title': 'Web Applications',
      'services.items.web.body': 'Responsive, scalable web apps built with modern frameworks like React, Vue, and Next.js for optimal performance.',
      'services.items.mobile.title': 'Mobile Apps',
      'services.items.mobile.body': 'Native and cross-platform mobile solutions for iOS and Android that deliver seamless user experiences.',
      'services.items.ux.title': 'UX/UI Design',
      'services.items.ux.body': 'Beautiful, intuitive interfaces that delight users and drive engagement through research-backed design principles.',
      'services.items.brand.title': 'Brand Identity',
      'services.items.brand.body': 'Complete brand packages including logos, typography, color systems, and comprehensive brand guidelines.',
      'services.items.motion.title': 'Motion Design',
      'services.items.motion.body': 'Engaging animations and interactive experiences that bring your digital products to life.',
      'services.items.strategy.title': 'Digital Strategy',
      'services.items.strategy.body': 'Strategic planning for digital transformation initiatives that align technology with business objectives.',
      'services.items.audit.title': 'Technology Audit',
      'services.items.audit.body': 'Comprehensive assessment of your tech infrastructure to identify opportunities and optimize performance.',
      'services.items.process.title': 'Process Optimization',
      'services.items.process.body': 'Streamline workflows with automation and best practices for maximum efficiency and productivity.',
      'services.items.support.title': '24/7 Support',
      'services.items.support.body': 'Round-the-clock technical assistance and maintenance to keep your systems running smoothly.',
      'services.items.training.title': 'Training & Workshops',
      'services.items.training.body': 'Empower your team with expert-led training sessions tailored to your technology stack.',
      'services.items.managed.title': 'Managed Services',
      'services.items.managed.body': 'End-to-end management of your digital infrastructure for worry-free operations.',
      'gallery.title': 'Our Portfolio',
      'gallery.subtitle': 'Explore our latest works',
      'gallery.filters.all': 'All',
      'gallery.filters.web': 'Web',
      'gallery.filters.mobile': 'Mobile',
      'gallery.filters.branding': 'Branding',
      'testimonials.title': 'Client Stories',
      'testimonials.subtitle': 'What our clients say about us',
      'about.title': 'About Us',
      'about.subtitle': 'Our story, mission, and values',
      'about.heading': 'Pioneering Digital Innovation',
      'about.body.one': 'Founded in 2020, Neiraverse has grown from a small team of passionate developers into a leading digital agency. We believe in pushing boundaries and creating solutions that make a real difference.',
      'about.body.two': 'Our diverse team brings together expertise from design, development, AI, and strategy to deliver holistic solutions that drive business growth and user engagement.',
      'about.body.three': "We're not just building products – we're shaping the future of digital experiences.",
      'about.body.four': 'Discover AI-optimized web templates from <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a>. Maximize efficiency with the timer platform at <a href="https://timermo.com" rel="nofollow" target="_blank">TimerMo</a>. Design like a pro using vector stickers from <a href="https://www.vectorsticker.com" rel="nofollow" target="_blank">VectorSticker</a>.',
      'contact.title': 'Get in Touch',
      'contact.subtitle': "Let's create something amazing together",
      'contact.form.name': 'Your Name',
      'contact.form.email': 'Your Email',
      'contact.form.subject': 'Subject',
      'contact.form.message': 'Your Message',
      'contact.form.submit': 'Send Message',
      'contact.info.locationLabel': 'Location',
      'contact.info.emailLabel': 'Email',
      'contact.info.phoneLabel': 'Phone',
   },
   id: {
      'app.tagline': 'Digital Polymath',
      'nav.home': 'Kembali ke Root',
      'nav.sections': 'Bagian',
      'menu.introduction': 'Introduction',
      'menu.services': 'Layanan',
      'menu.gallery': 'Galeri',
      'menu.testimonials': 'Testimoni',
      'menu.about': 'Tentang',
      'menu.contact': 'Kontak',
      'footer.text': '&copy; 2025 Neiraverse. Dirancang dengan penuh semangat. Desain oleh <a href="https://templatemo.com" target="_blank">TemplateMo</a>',
      'common.smallTagline': 'Keunggulan Digital',
      'common.backToMenu': '← Kembali ke Menu',
      'common.backToMenuText': 'Kembali ke Menu',
      'intro.badge': 'Berdiri sejak 2020',
      'intro.headline': 'Kami Membangun<br><span>Pengalaman Digital</span> yang Bermakna',
      'intro.subtext': 'Mengubah ide visioner menjadi realitas digital yang kuat melalui teknologi mutakhir dan eksekusi kreatif.',
      'intro.primaryCta': 'Jelajahi Karya Kami',
      'intro.secondaryCta': 'Tonton Showreel',
      'intro.cards.fast': 'Sangat Cepat',
      'intro.cards.pixel': 'Presisi Pixel',
      'intro.cards.secure': 'Aman & Andal',
      'intro.metrics.projects': 'Proyek Terselesaikan',
      'intro.metrics.retention': 'Retensi Klien',
      'intro.metrics.awards': 'Penghargaan Industri',
      'intro.metrics.support': 'Dukungan Global',
      'intro.values.one.title': 'Inovasi Utama',
      'intro.values.one.body': 'Kami merangkul teknologi baru dan mendorong batas kreativitas untuk menghadirkan solusi yang menetapkan standar industri baru.',
      'intro.values.two.title': 'Berpusat pada Manusia',
      'intro.values.two.body': 'Setiap piksel dan interaksi dirancang dengan pengguna nyata sebagai fokus. Kami menciptakan pengalaman yang benar-benar disukai orang.',
      'intro.values.three.title': 'Berorientasi Hasil',
      'intro.values.three.body': 'Desain yang indah bertemu dampak yang terukur. Kami memantau, mengiterasi, dan mengoptimalkan hasil yang penting bagi bisnis Anda.',
      'intro.techLabel': 'Teknologi yang Kami Kuasai',
      'services.title': 'Layanan Kami',
      'services.subtitle': 'Solusi komprehensif untuk era digital',
      'services.tabs.development': 'Pengembangan',
      'services.tabs.design': 'Desain',
      'services.tabs.consulting': 'Konsultasi',
      'services.tabs.support': 'Dukungan',
      'services.items.ai.title': 'Pengembangan AI',
      'services.items.ai.body': 'Solusi AI kustom berbasis machine learning dan neural network untuk otomasi cerdas dan analitik prediktif.',
      'services.items.web.title': 'Aplikasi Web',
      'services.items.web.body': 'Aplikasi web responsif dan skalabel yang dibangun dengan framework modern seperti React, Vue, dan Next.js untuk performa optimal.',
      'services.items.mobile.title': 'Aplikasi Mobile',
      'services.items.mobile.body': 'Solusi mobile native dan cross-platform untuk iOS dan Android dengan pengalaman pengguna yang mulus.',
      'services.items.ux.title': 'Desain UX/UI',
      'services.items.ux.body': 'Antarmuka yang indah dan intuitif untuk menyenangkan pengguna serta meningkatkan engagement melalui prinsip desain berbasis riset.',
      'services.items.brand.title': 'Identitas Brand',
      'services.items.brand.body': 'Paket brand lengkap meliputi logo, tipografi, sistem warna, dan panduan brand yang komprehensif.',
      'services.items.motion.title': 'Motion Design',
      'services.items.motion.body': 'Animasi menarik dan pengalaman interaktif yang menghidupkan produk digital Anda.',
      'services.items.strategy.title': 'Strategi Digital',
      'services.items.strategy.body': 'Perencanaan strategis untuk transformasi digital yang menyelaraskan teknologi dengan tujuan bisnis.',
      'services.items.audit.title': 'Audit Teknologi',
      'services.items.audit.body': 'Penilaian menyeluruh terhadap infrastruktur teknologi Anda untuk menemukan peluang dan mengoptimalkan performa.',
      'services.items.process.title': 'Optimasi Proses',
      'services.items.process.body': 'Menyederhanakan alur kerja dengan otomasi dan praktik terbaik untuk efisiensi serta produktivitas maksimal.',
      'services.items.support.title': 'Dukungan 24/7',
      'services.items.support.body': 'Bantuan teknis dan pemeliharaan sepanjang waktu untuk memastikan sistem Anda selalu berjalan lancar.',
      'services.items.training.title': 'Pelatihan & Workshop',
      'services.items.training.body': 'Memberdayakan tim Anda melalui pelatihan yang dipandu ahli dan disesuaikan dengan stack teknologi Anda.',
      'services.items.managed.title': 'Managed Services',
      'services.items.managed.body': 'Pengelolaan menyeluruh atas infrastruktur digital Anda agar operasional tetap tenang dan terjaga.',
      'gallery.title': 'Portofolio Kami',
      'gallery.subtitle': 'Jelajahi karya terbaru kami',
      'gallery.filters.all': 'Semua',
      'gallery.filters.web': 'Web',
      'gallery.filters.mobile': 'Mobile',
      'gallery.filters.branding': 'Branding',
      'testimonials.title': 'Cerita Klien',
      'testimonials.subtitle': 'Apa kata klien kami tentang kami',
      'about.title': 'Tentang Kami',
      'about.subtitle': 'Cerita, misi, dan nilai kami',
      'about.heading': 'Pelopor Inovasi Digital',
      'about.body.one': 'Didirikan pada tahun 2020, Neiraverse berkembang dari tim kecil penuh semangat menjadi agensi digital terdepan. Kami percaya pada keberanian menembus batas dan menciptakan solusi yang benar-benar berdampak.',
      'about.body.two': 'Tim kami yang beragam menyatukan keahlian desain, pengembangan, AI, dan strategi untuk menghadirkan solusi holistik yang mendorong pertumbuhan bisnis dan keterlibatan pengguna.',
      'about.body.three': 'Kami tidak sekadar membangun produk – kami membentuk masa depan pengalaman digital.',
      'about.body.four': 'Temukan template web yang dioptimalkan AI dari <a href="https://templatemo.com" rel="nofollow" target="_blank">TemplateMo</a>. Maksimalkan efisiensi dengan platform timer di <a href="https://timermo.com" rel="nofollow" target="_blank">TimerMo</a>. Desain seperti profesional menggunakan stiker vektor dari <a href="https://www.vectorsticker.com" rel="nofollow" target="_blank">VectorSticker</a>.',
      'contact.title': 'Hubungi Kami',
      'contact.subtitle': 'Mari ciptakan sesuatu yang luar biasa bersama',
      'contact.form.name': 'Nama Anda',
      'contact.form.email': 'Email Anda',
      'contact.form.subject': 'Subjek',
      'contact.form.message': 'Pesan Anda',
      'contact.form.submit': 'Kirim Pesan',
      'contact.info.locationLabel': 'Lokasi',
      'contact.info.emailLabel': 'Email',
      'contact.info.phoneLabel': 'Telepon',
   },
};

let isTransitioning = false;
let initScheduled = false;
let productRevealTimer = null;

window.addEventListener('load', () => {
   setTimeout(() => {
      const loadingScreen = document.getElementById('loadingScreen');
      if (loadingScreen) {
         loadingScreen.classList.add('hidden');
      }
   }, 1000);
});

function readCache() {
   try {
      return JSON.parse(localStorage.getItem(STORAGE_KEYS.cache) || '{}');
   } catch {
      return {};
   }
}

function writeCache(patch) {
   try {
      localStorage.setItem(
         STORAGE_KEYS.cache,
         JSON.stringify({
            ...readCache(),
            ...patch,
            updatedAt: Date.now(),
         }),
      );
   } catch {
      return;
   }
}

function getStoredLanguage() {
   return localStorage.getItem(STORAGE_KEYS.language) || readCache().language || 'en';
}

function getStoredSection() {
   return localStorage.getItem(STORAGE_KEYS.activeSection) || readCache().activeSection || '';
}

function setStoredLanguage(lang) {
   localStorage.setItem(STORAGE_KEYS.language, lang);
   writeCache({ language: lang });
}

function setStoredSection(sectionId) {
   if (sectionId) {
      localStorage.setItem(STORAGE_KEYS.activeSection, sectionId);
   } else {
      localStorage.removeItem(STORAGE_KEYS.activeSection);
   }
   writeCache({ activeSection: sectionId || '' });
}

function getUiRefs() {
   return {
      menuItems: document.querySelectorAll('.menu-item'),
      menuGrid: document.getElementById('menuGrid'),
      mainHeader: document.getElementById('mainHeader'),
      mainFooter: document.getElementById('mainFooter'),
      rootProduct: document.getElementById('rels-product'),
      navMobile: document.querySelector('.nav-mobile'),
      navMobilePanel: document.getElementById('navMobilePanel'),
      navMobileToggle: document.getElementById('navMobileToggle'),
      navLinks: document.querySelectorAll('[data-section-link]'),
   };
}

function hideRootProduct() {
   const { rootProduct } = getUiRefs();
   if (productRevealTimer) {
      clearTimeout(productRevealTimer);
      productRevealTimer = null;
   }
   if (rootProduct) {
      rootProduct.classList.remove('product-visible');
   }
}

function scheduleRootProductReveal(delay = 0) {
   const { rootProduct } = getUiRefs();
   if (!rootProduct) return;

   if (productRevealTimer) {
      clearTimeout(productRevealTimer);
   }

   rootProduct.classList.remove('product-visible');
   productRevealTimer = setTimeout(() => {
      rootProduct.classList.add('product-visible');
      productRevealTimer = null;
   }, delay);
}

function applyTranslations(lang) {
   const dictionary = translations[lang] || translations.en;

   document.querySelectorAll('[data-i18n]').forEach((element) => {
      const key = element.dataset.i18n;
      if (key && dictionary[key]) {
         element.textContent = dictionary[key];
      }
   });

   document.querySelectorAll('[data-i18n-html]').forEach((element) => {
      const key = element.dataset.i18nHtml;
      if (key && dictionary[key]) {
         element.innerHTML = dictionary[key];
      }
   });

   document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (key && dictionary[key]) {
         element.setAttribute('placeholder', dictionary[key]);
      }
   });

   document.querySelectorAll('.lang-btn').forEach((button) => {
      button.classList.toggle('active', button.dataset.lang === lang);
   });

   document.documentElement.lang = lang;
   setStoredLanguage(lang);
}

function setLanguage(lang) {
   applyTranslations(lang);
}

function setBodySectionMode(isActive) {
   document.body.classList.toggle('section-mode', isActive);
}

function updateNavbarState(activeSectionId) {
   const { navLinks, navMobile, navMobileToggle } = getUiRefs();

   setBodySectionMode(Boolean(activeSectionId));
   navLinks.forEach((link) => {
      link.classList.toggle('active', link.dataset.sectionLink === activeSectionId);
   });

   if (!activeSectionId && navMobile) {
      navMobile.classList.remove('open');
   }

   if (navMobileToggle) {
      navMobileToggle.setAttribute('aria-expanded', navMobile?.classList.contains('open') ? 'true' : 'false');
   }
}

function toggleNavbarMenu() {
   const { navMobile, navMobileToggle } = getUiRefs();
   if (!document.body.classList.contains('section-mode') || !navMobile || !navMobileToggle) {
      return;
   }

   navMobile.classList.toggle('open');
   navMobileToggle.setAttribute('aria-expanded', navMobile.classList.contains('open') ? 'true' : 'false');
}

function closeNavbarMenu() {
   const { navMobile, navMobileToggle } = getUiRefs();
   if (navMobile) {
      navMobile.classList.remove('open');
   }
   if (navMobileToggle) {
      navMobileToggle.setAttribute('aria-expanded', 'false');
   }
}

function initializeMenuBindings() {
   const { menuItems } = getUiRefs();
   if (!menuItems.length) {
      scheduleInit();
      return;
   }

   menuItems.forEach((item) => {
      if (item.dataset.bound === 'true') {
         return;
      }

      item.dataset.bound = 'true';
      item.addEventListener('click', () => {
         if (isTransitioning) return;
         const sectionId = item.dataset.section;
         if (sectionId) {
            showSection(sectionId);
         }
      });
   });
}

function scheduleInit() {
   if (initScheduled) return;
   initScheduled = true;
   setTimeout(() => {
      initScheduled = false;
      initializeAppUi();
   }, 100);
}

function activateSection(sectionId, animateStatsDelay = 300) {
   const section = document.getElementById(sectionId);
   if (!section) return;

   document.querySelectorAll('.content-section.active').forEach((activeSection) => {
      activeSection.classList.remove('active');
   });

   section.classList.add('active');
   setStoredSection(sectionId);
   updateNavbarState(sectionId);
   closeNavbarMenu();
   hideRootProduct();

   if (sectionId === 'introduction') {
      setTimeout(animateStats, animateStatsDelay);
   }
}

function showSectionInstant(sectionId) {
   const { menuItems, menuGrid, mainHeader, mainFooter } = getUiRefs();
   const section = document.getElementById(sectionId);

   if (!menuItems.length || !menuGrid || !mainHeader || !mainFooter || !section) {
      scheduleInit();
      return;
   }

   menuItems.forEach((item) => {
      item.classList.remove('initial-load');
      item.classList.add('visible');
      item.style.opacity = '';
      item.style.transform = '';
      item.style.transition = '';
   });

   menuGrid.style.display = 'none';
   mainHeader.style.display = 'none';
   mainFooter.style.display = 'none';
   activateSection(sectionId);
}

function showSection(sectionId) {
   const { menuItems, menuGrid, mainHeader, mainFooter } = getUiRefs();
   const section = document.getElementById(sectionId);

   if (!menuItems.length || !menuGrid || !mainHeader || !mainFooter || !section) {
      scheduleInit();
      return;
   }

   isTransitioning = true;
   setStoredSection(sectionId);

   menuItems.forEach((item) => {
      item.classList.remove('initial-load');
      item.style.opacity = '1';
      item.style.transform = 'translateY(0) scale(1)';
      item.style.animation = 'none';
   });

   void menuGrid.offsetWidth;

   menuItems.forEach((item, index) => {
      setTimeout(() => {
         item.style.transition = 'all 0.4s ease-out';
         item.style.opacity = '0';
         item.style.transform = 'translateY(40px) scale(0.9)';
      }, index * 50);
   });

   mainHeader.style.animation = 'none';
   mainHeader.style.opacity = '1';
   mainFooter.style.animation = 'none';
   mainFooter.style.opacity = '1';

   void mainHeader.offsetWidth;

   mainHeader.style.transition = 'opacity 0.4s ease';
   mainHeader.style.opacity = '0';
   mainFooter.style.transition = 'opacity 0.4s ease';
   mainFooter.style.opacity = '0';

   setTimeout(() => {
      menuGrid.style.display = 'none';
      mainHeader.style.display = 'none';
      mainFooter.style.display = 'none';

      menuItems.forEach((item) => {
         item.style.transition = '';
         item.style.opacity = '';
         item.style.transform = '';
         item.classList.remove('exit-up', 'visible');
      });

      activateSection(sectionId, 500);
      isTransitioning = false;
   }, 550);
}

function navigateToSection(sectionId) {
   if (isTransitioning) return;

   const currentSection = document.querySelector('.content-section.active');
   if (!currentSection) {
      showSection(sectionId);
      return;
   }

   if (currentSection.id === sectionId) {
      closeNavbarMenu();
      return;
   }

   const targetSection = document.getElementById(sectionId);
   if (!targetSection) return;

   isTransitioning = true;
   closeNavbarMenu();

   currentSection.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
   currentSection.style.opacity = '0';
   currentSection.style.transform = 'translateY(20px)';

   setTimeout(() => {
      currentSection.classList.remove('active');
      currentSection.style.transition = '';
      currentSection.style.opacity = '';
      currentSection.style.transform = '';

      activateSection(sectionId, 250);
      isTransitioning = false;
   }, 350);
}

function backToMenu() {
   if (isTransitioning) return;

   const { menuItems, menuGrid, mainHeader, mainFooter } = getUiRefs();
   const activeSection = document.querySelector('.content-section.active');

   if (!menuItems.length || !menuGrid || !mainHeader || !mainFooter || !activeSection) {
      scheduleInit();
      return;
   }

   isTransitioning = true;
   setStoredSection('');
   updateNavbarState('');
   closeNavbarMenu();

   activeSection.style.animation = 'none';
   activeSection.style.opacity = '1';
   void activeSection.offsetWidth;
   activeSection.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
   activeSection.style.opacity = '0';
   activeSection.style.transform = 'translateY(-20px)';

   setTimeout(() => {
      activeSection.classList.remove('active');
      activeSection.style.animation = '';
      activeSection.style.opacity = '';
      activeSection.style.transform = '';
      activeSection.style.transition = '';

      menuGrid.style.display = 'grid';
      mainHeader.style.display = 'block';
      mainFooter.style.display = 'block';

      mainHeader.style.animation = 'none';
      mainFooter.style.animation = 'none';
      mainHeader.style.opacity = '0';
      mainHeader.style.transform = 'translateY(20px)';
      mainFooter.style.opacity = '0';

      menuItems.forEach((item) => {
         item.classList.remove('exit-up', 'initial-load', 'return', 'visible');
         item.style.opacity = '0';
         item.style.transform = 'translateY(30px) scale(0.9)';
      });

      setTimeout(() => {
         mainHeader.style.transition = 'all 0.5s ease';
         mainHeader.style.opacity = '1';
         mainHeader.style.transform = 'translateY(0)';

         mainFooter.style.transition = 'all 0.5s ease';
         mainFooter.style.opacity = '1';

         menuItems.forEach((item, index) => {
            setTimeout(() => {
               item.style.transition = 'all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
               item.style.opacity = '1';
               item.style.transform = 'translateY(0) scale(1)';
            }, index * 80);
         });

         setTimeout(() => {
            mainHeader.style.transition = '';
            mainHeader.style.transform = '';
            mainFooter.style.transition = '';

         menuItems.forEach((item) => {
            item.style.transition = '';
            item.style.opacity = '';
            item.style.transform = '';
            item.classList.add('visible');
         });

         scheduleRootProductReveal(120);
         isTransitioning = false;
      }, 600);
   }, 150);
   }, 550);
}

function animateStats() {
   const metricValues = document.querySelectorAll('.metric-value[data-target]');
   metricValues.forEach((el, index) => {
      setTimeout(() => {
         const target = parseInt(el.dataset.target, 10);
         let current = 0;
         const increment = target / 40;
         const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
               current = target;
               clearInterval(timer);
            }
            el.textContent = Math.floor(current);
         }, 30);
      }, index * 200);
   });
}

function switchTab(btn, tabId) {
   const tabsContainer = btn.closest('.tabs-container');
   if (!tabsContainer) return;

   tabsContainer.querySelectorAll('.tab-btn').forEach((b) => b.classList.remove('active'));
   btn.classList.add('active');

   tabsContainer.querySelectorAll('.tab-pane').forEach((pane) => pane.classList.remove('active'));
   const activePane = tabsContainer.querySelector(`#${tabId}`);
   if (activePane) {
      activePane.classList.add('active');
   }
}

function filterGallery(category, btn) {
   document.querySelectorAll('.filter-btn').forEach((b) => b.classList.remove('active'));
   btn.classList.add('active');

   document.querySelectorAll('.gallery-item').forEach((item) => {
      if (category === 'all' || item.dataset.category === category) {
         item.style.display = 'block';
         item.style.animation = 'tabFade 0.4s ease-out';
      } else {
         item.style.display = 'none';
      }
   });
}

function restoreUiState() {
   const savedSection = getStoredSection();
   if (savedSection && document.getElementById(savedSection)) {
      showSectionInstant(savedSection);
   } else {
      updateNavbarState('');
      scheduleRootProductReveal(2300);
   }
}

function initializeAppUi() {
   initializeMenuBindings();
   applyTranslations(getStoredLanguage());
   restoreUiState();
}

window.backToMenu = backToMenu;
window.filterGallery = filterGallery;
window.navigateToSection = navigateToSection;
window.setLanguage = setLanguage;
window.switchTab = switchTab;
window.toggleNavbarMenu = toggleNavbarMenu;

document.addEventListener('DOMContentLoaded', initializeAppUi);
initializeAppUi();
