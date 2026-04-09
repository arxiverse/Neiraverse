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
      'root.features.label': 'Neiraverse Overview',
      'root.features.title': 'A digital universe for works that refuse to stay in one discipline',
      'root.features.subtitle': 'Neira + Verse means one container for everything Neira can build, research, compose, engineer, or turn into a functioning digital output.',
      'root.features.cards.user.title': 'Identity That Holds Everything',
      'root.features.cards.user.body': 'Neiraverse is not one narrow studio. It is the name that houses every result created by Neira across many digital fields.',
      'root.features.cards.deal.title': 'Multidisciplinary Execution',
      'root.features.cards.deal.body': 'Coding, algorithms, AI, infrastructure, networking, research, music, and blueprint imagination can all appear inside the same build.',
      'root.features.cards.pipeline.title': 'From Idea to Finished Work',
      'root.features.cards.pipeline.body': 'The point is not just having ideas. Once Neiraverse starts building, the expectation is a real output, system, model, or release.',
      'root.features.cards.reporting.title': 'Digital Polymath Mindset',
      'root.features.cards.reporting.body': 'Digital Polymath means capability across multiple serious domains, not just being good at one stack or one toolchain.',
      'root.features.cards.scheduling.title': 'All-Framework Fullstack',
      'root.features.cards.scheduling.body': 'Web, backend, systems, and modern frameworks are part of the range, including unconventional stacks like Drogon C++.',
      'root.features.cards.email.title': 'Research and Experimentation',
      'root.features.cards.email.body': 'Neiraverse also carries hypothesis papers, business models, experimental thinking, and technical exploration beyond client work.',
      'root.features.cards.activity.title': 'One Timeline, Many Outputs',
      'root.features.cards.activity.body': 'Every call, concept, prototype, code path, and finished work becomes part of the same evolving digital universe.',
      'root.workflow.label': 'How It Operates',
      'root.workflow.title': 'How Neiraverse turns broad capability into real execution',
      'root.workflow.spotlight.title': 'A builder that can cross from software into infrastructure and beyond',
      'root.workflow.spotlight.body': 'Neiraverse can move between AI, IT support, networking, MikroTik, servers, software engineering, music making, gaming context, and system blueprinting without breaking the narrative.',
      'root.workflow.spotlight.link': 'Read the Story',
      'root.workflow.cards.mobile.title': 'Execution in Any Context',
      'root.workflow.cards.mobile.body': 'Online or offline, product or system, experimental or practical, Neiraverse is built to adapt to what the challenge actually needs.',
      'root.workflow.cards.files.title': 'Call Us If It Needs Building',
      'root.workflow.cards.files.body': 'If something needs to be designed, engineered, researched, or translated into a working result, this is the place to start the conversation.',
      'product.label': 'Quick Quest Model / QQM',
      'product.title': 'A micro peer-to-peer model that turns informal help into <span>scalable real contribution</span>',
      'product.body': 'QQM is Neiraverse\'s latest business research: customers pay customers, the platform facilitates trust, and contribution becomes measurable through matching, escrow, reputation, and Performance Point.',
      'product.link': 'Get Started',
      'product.primaryCta': 'Start a Project',
      'product.secondaryCta': 'Explore QQM',
      'product.cards.automation.title': 'Q1 to Q3 Merit Ladder',
      'product.cards.automation.body': 'QQM introduces a path from instant entry work to semi-professional and professional levels through reputation, consistency, portfolio strength, and active skill performance.',
      'product.cards.collaboration.title': 'Escrow, PP, and Trust Algorithm',
      'product.cards.collaboration.body': 'Real-time matching, escrow security, rating, and Performance Point transform empty leaderboard culture into visible proof of useful contribution.',
      'footer.community.kicker': 'Build with Neiraverse',
      'footer.community.title': 'Need something designed, engineered, researched, or systemized?',
      'footer.community.body': 'Neiraverse exists for multidisciplinary digital work. If the problem is real and needs to become an actual result, reach out and we can shape it together.',
      'footer.community.cta': 'Talk to Neiraverse',
      'footer.socialLabel': 'Stay connected across our channels',
      'footer.columns.studio.title': 'Studio Notes',
      'footer.columns.studio.body': 'From identity systems to launch-ready platforms, every output is designed to feel sharp, coherent, and useful.',
      'footer.columns.presence.title': 'Digital Presence',
      'footer.columns.presence.body': 'Root experience for discovery, dedicated components for depth, and a modular system ready for the next layer.',
      'footer.columns.network.title': 'Community Network',
      'footer.columns.network.body': 'Discord, Instagram, Reddit, GitHub, and TikTok stay wired into the same visual ecosystem instead of living as detached links.',
      'footer.credits': '&copy; 2025 Neiraverse. Crafted with passion. Design by <a href="https://templatemo.com" target="_blank">TemplateMo</a>',
      'common.smallTagline': 'Digital Excellence',
      'common.backToMenu': '← Back to Menu',
      'common.backToMenuText': 'Back to Menu',
      'intro.badge': 'Neira + Verse',
      'intro.headline': 'Neiraverse is a <span>Digital Universe</span> built by Neira',
      'intro.subtext': 'A vessel for every work, experiment, and system Neira can turn into reality across code, infrastructure, research, music, and digital imagination.',
      'intro.primaryCta': 'Explore the Universe',
      'intro.secondaryCta': 'See What We Can Build',
      'intro.cards.fast': 'Multidisciplinary',
      'intro.cards.pixel': 'Execution First',
      'intro.cards.secure': 'Blueprint to Reality',
      'intro.metrics.projects': 'Disciplines in Motion',
      'intro.metrics.retention': 'Framework Range',
      'intro.metrics.awards': 'Flagship Model',
      'intro.metrics.support': 'Build Mindset',
      'intro.values.one.title': 'Digital Polymath',
      'intro.values.one.body': 'Neira does not stop at coding. AI, IT support, network engineering, server work, research, music, and system design all live inside the same universe.',
      'intro.values.two.title': 'Works Become Real',
      'intro.values.two.body': 'Neiraverse exists to hold the outputs, not just the ideas. Once a build starts, it is expected to become an actual result, system, or piece of work.',
      'intro.values.three.title': 'Call When Needed',
      'intro.values.three.body': 'If a problem needs to be designed, engineered, researched, or translated into a working digital form, Neiraverse can step in and help shape it.',
      'intro.techLabel': 'Digital Fields Inside Neiraverse',
      'services.title': 'Capability Map',
      'services.subtitle': 'The active fields currently living inside Neiraverse',
      'services.tabs.development': 'Development',
      'services.tabs.design': 'Design',
      'services.tabs.consulting': 'Consulting',
      'services.tabs.support': 'Support',
      'services.items.ai.title': 'AI Systems',
      'services.items.ai.body': 'From applied AI tooling to algorithm-heavy builds, Neiraverse can design systems that think, classify, assist, and automate.',
      'services.items.web.title': 'Fullstack Engineering',
      'services.items.web.body': 'Across modern frameworks and custom architectures, web and backend products can be built from interface to infrastructure.',
      'services.items.mobile.title': 'Drogon and High-Performance APIs',
      'services.items.mobile.body': 'The stack range is not limited to common JavaScript paths. Neiraverse also works with unconventional high-performance directions like Drogon C++.',
      'services.items.ux.title': 'Blueprint and Interface Design',
      'services.items.ux.body': 'Ideas are translated into structures, flows, interfaces, and blueprints that make complicated systems easier to ship.',
      'services.items.brand.title': 'Music and Creative Output',
      'services.items.brand.body': 'Neiraverse is also a place for sonic work, creative experiments, and outputs that live outside conventional engineering lanes.',
      'services.items.motion.title': 'Digital Imagination',
      'services.items.motion.body': 'When something does not exist yet, Neiraverse can still blueprint it, visualize it, and push it toward a workable form.',
      'services.items.strategy.title': 'IT Support and Operations',
      'services.items.strategy.body': 'Hands-on support, troubleshooting, and systems thinking are part of the range, not a separate identity.',
      'services.items.audit.title': 'Network, MikroTik, and Server',
      'services.items.audit.body': 'Networking, routing, server operations, and infrastructure setup are real working capabilities inside the Neiraverse stack.',
      'services.items.process.title': 'Research and Hypothesis Papers',
      'services.items.process.body': 'Ideas can become structured models, research notes, and hypothesis papers when the problem needs thinking before execution.',
      'services.items.support.title': 'Gaming and Digital Culture',
      'services.items.support.body': 'Gaming is not treated as noise. It is part of the digital context, reward logic, and interaction thinking that informs how systems are designed.',
      'services.items.training.title': 'Quick Quest Model / QQM',
      'services.items.training.body': 'Neiraverse is currently researching QQM, a micro peer-to-peer business model that turns informal help into a scalable trust-based ecosystem.',
      'services.items.managed.title': 'Build Partner on Demand',
      'services.items.managed.body': 'If you need something built with a multidisciplinary approach, contact Neiraverse and we can figure out the right execution path.',
      'gallery.title': 'Our Portfolio',
      'gallery.subtitle': 'Explore our latest works',
      'gallery.filters.all': 'All',
      'gallery.filters.web': 'Web',
      'gallery.filters.mobile': 'Mobile',
      'gallery.filters.branding': 'Branding',
      'testimonials.title': 'Client Stories',
      'testimonials.subtitle': 'What our clients say about us',
      'about.title': 'About Neiraverse',
      'about.subtitle': 'Why it exists and why it is called a Digital Polymath',
      'about.heading': 'Neira + Verse = Neiraverse',
      'about.body.one': 'Neiraverse comes from Neira, the name of its creator, and Verse, a world or vessel. Together they describe a universe that stores every work created under the Neiraverse name.',
      'about.body.two': 'It is called a Digital Polymath because the capability does not sit in coding alone. AI, IT support, network engineering, MikroTik, servers, gaming, hypothesis research, music making, software engineering, and fullstack work all intersect here.',
      'about.body.three': 'Neiraverse exists because it is hard to predict exactly what Neira can make, but once something is taken on, it tends to become a finished work.',
      'about.body.four': 'That is why Neiraverse is less a narrow service label and more a container for multidisciplinary digital output.',
      'about.body.five': 'QQM or Quick Quest Model is Neiraverse\'s latest business research: a merit-based micro peer-to-peer model that turns informal help into a scalable ecosystem with matching, escrow, reputation, and Performance Point.',
      'contact.title': 'Build With Neiraverse',
      'contact.subtitle': 'If something needs to be built, researched, engineered, or translated into a working output, reach out.',
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
      'root.features.label': 'Ringkasan Neiraverse',
      'root.features.title': 'Sebuah semesta digital untuk karya yang menolak dikurung dalam satu disiplin',
      'root.features.subtitle': 'Neira + Verse berarti satu wadah untuk semua hal yang bisa dibangun, diteliti, dikomposisikan, direkayasa, atau diwujudkan oleh Neira menjadi output digital yang nyata.',
      'root.features.cards.user.title': 'Identitas yang Menampung Semuanya',
      'root.features.cards.user.body': 'Neiraverse bukan satu studio sempit. Ini adalah nama yang menaungi semua hasil karya Neira di banyak bidang digital.',
      'root.features.cards.deal.title': 'Eksekusi Multidisipliner',
      'root.features.cards.deal.body': 'Coding, algoritma, AI, infrastruktur, networking, riset, musik, dan blueprint imajinasi bisa muncul dalam satu build yang sama.',
      'root.features.cards.pipeline.title': 'Dari Ide Menjadi Karya Jadi',
      'root.features.cards.pipeline.body': 'Intinya bukan cuma punya ide. Saat Neiraverse mulai membangun, targetnya adalah output nyata, sistem, model, atau rilisan.',
      'root.features.cards.reporting.title': 'Pola Pikir Digital Polymath',
      'root.features.cards.reporting.body': 'Digital Polymath berarti punya kapabilitas di banyak domain serius, bukan sekadar jago di satu stack atau satu toolchain.',
      'root.features.cards.scheduling.title': 'Fullstack Semua Framework',
      'root.features.cards.scheduling.body': 'Web, backend, sistem, dan framework modern termasuk dalam jangkauan, bahkan sampai stack tidak umum seperti Drogon C++.',
      'root.features.cards.email.title': 'Riset dan Eksperimen',
      'root.features.cards.email.body': 'Neiraverse juga memuat paper hipotesis, model bisnis, pemikiran eksperimental, dan eksplorasi teknis di luar kerja klien biasa.',
      'root.features.cards.activity.title': 'Satu Timeline, Banyak Output',
      'root.features.cards.activity.body': 'Setiap call, konsep, prototipe, jalur kode, dan karya jadi masuk ke semesta digital yang terus berkembang ini.',
      'root.workflow.label': 'Cara Kerjanya',
      'root.workflow.title': 'Bagaimana Neiraverse mengubah kapabilitas luas menjadi eksekusi nyata',
      'root.workflow.spotlight.title': 'Seorang builder yang bisa melintasi software, infrastruktur, dan seterusnya',
      'root.workflow.spotlight.body': 'Neiraverse bisa bergerak dari AI, IT support, networking, MikroTik, server, software engineering, music making, konteks gaming, sampai blueprint system tanpa kehilangan arah narasi.',
      'root.workflow.spotlight.link': 'Baca Ceritanya',
      'root.workflow.cards.mobile.title': 'Eksekusi di Konteks Apa Pun',
      'root.workflow.cards.mobile.body': 'Online atau offline, produk atau sistem, eksperimental atau praktikal, Neiraverse dibangun untuk menyesuaikan kebutuhan masalah yang sebenarnya.',
      'root.workflow.cards.files.title': 'Hubungi Jika Perlu Dibangun',
      'root.workflow.cards.files.body': 'Kalau ada sesuatu yang perlu didesain, direkayasa, diteliti, atau diterjemahkan jadi hasil kerja nyata, percakapan bisa dimulai dari sini.',
      'product.label': 'Quick Quest Model / QQM',
      'product.title': 'Model micro peer-to-peer yang mengubah bantuan informal menjadi <span>kontribusi nyata yang scalable</span>',
      'product.body': 'QQM adalah riset bisnis terbaru Neiraverse: pelanggan membayar pelanggan, platform memfasilitasi kepercayaan, dan kontribusi menjadi terukur lewat matching, escrow, reputasi, dan Performance Point.',
      'product.link': 'Mulai Sekarang',
      'product.primaryCta': 'Mulai Proyek',
      'product.secondaryCta': 'Jelajahi QQM',
      'product.cards.automation.title': 'Tangga Merit Q1 sampai Q3',
      'product.cards.automation.body': 'QQM memperkenalkan jalur dari kerja instan tingkat awal sampai level semi-profesional dan profesional melalui reputasi, konsistensi, kekuatan portofolio, dan performa skill aktif.',
      'product.cards.collaboration.title': 'Escrow, PP, dan Algoritma Trust',
      'product.cards.collaboration.body': 'Matching real-time, keamanan escrow, rating, dan Performance Point mengubah budaya leaderboard kosong menjadi bukti kontribusi berguna yang terlihat.',
      'footer.community.kicker': 'Bangun bersama Neiraverse',
      'footer.community.title': 'Perlu sesuatu yang didesain, direkayasa, diteliti, atau disistemkan?',
      'footer.community.body': 'Neiraverse ada untuk kerja digital multidisipliner. Jika masalahnya nyata dan harus menjadi hasil yang benar-benar jadi, hubungi saja dan kita bentuk bersama.',
      'footer.community.cta': 'Hubungi Neiraverse',
      'footer.socialLabel': 'Tetap terhubung lewat seluruh kanal kami',
      'footer.columns.studio.title': 'Catatan Studio',
      'footer.columns.studio.body': 'Dari sistem identitas sampai platform siap rilis, setiap output dirancang agar terasa tajam, koheren, dan berguna.',
      'footer.columns.presence.title': 'Kehadiran Digital',
      'footer.columns.presence.body': 'Root experience untuk discovery, komponen khusus untuk kedalaman, dan sistem modular yang siap menerima lapisan berikutnya.',
      'footer.columns.network.title': 'Jaringan Komunitas',
      'footer.columns.network.body': 'Discord, Instagram, Reddit, GitHub, dan TikTok terhubung ke ekosistem visual yang sama alih-alih hidup sebagai link terpisah.',
      'footer.credits': '&copy; 2025 Neiraverse. Dirancang dengan penuh semangat. Desain oleh <a href="https://templatemo.com" target="_blank">TemplateMo</a>',
      'common.smallTagline': 'Keunggulan Digital',
      'common.backToMenu': '← Kembali ke Menu',
      'common.backToMenuText': 'Kembali ke Menu',
      'intro.badge': 'Neira + Verse',
      'intro.headline': 'Neiraverse adalah <span>semesta digital</span> yang dibangun oleh Neira',
      'intro.subtext': 'Sebuah wadah untuk setiap karya, eksperimen, dan sistem yang bisa diwujudkan Neira melalui kode, infrastruktur, riset, musik, dan imajinasi digital.',
      'intro.primaryCta': 'Jelajahi Semestanya',
      'intro.secondaryCta': 'Lihat yang Bisa Dibangun',
      'intro.cards.fast': 'Multidisipliner',
      'intro.cards.pixel': 'Eksekusi Utama',
      'intro.cards.secure': 'Blueprint ke Realita',
      'intro.metrics.projects': 'Bidang Bergerak',
      'intro.metrics.retention': 'Jangkauan Framework',
      'intro.metrics.awards': 'Model Andalan',
      'intro.metrics.support': 'Mentalitas Build',
      'intro.values.one.title': 'Digital Polymath',
      'intro.values.one.body': 'Neira tidak berhenti di coding. AI, IT support, network engineering, server work, riset, musik, dan system design hidup di semesta yang sama.',
      'intro.values.two.title': 'Karya Harus Jadi',
      'intro.values.two.body': 'Neiraverse hadir untuk menampung hasil, bukan sekadar ide. Saat build dimulai, targetnya adalah hasil nyata, sistem, atau karya yang benar-benar jadi.',
      'intro.values.three.title': 'Hubungi Saat Dibutuhkan',
      'intro.values.three.body': 'Kalau ada masalah yang perlu didesain, direkayasa, diteliti, atau diterjemahkan menjadi bentuk digital yang bekerja, Neiraverse bisa masuk dan membantu membentuknya.',
      'intro.techLabel': 'Bidang Digital di Dalam Neiraverse',
      'services.title': 'Peta Kapabilitas',
      'services.subtitle': 'Bidang aktif yang saat ini hidup di dalam Neiraverse',
      'services.tabs.development': 'Pengembangan',
      'services.tabs.design': 'Desain',
      'services.tabs.consulting': 'Konsultasi',
      'services.tabs.support': 'Dukungan',
      'services.items.ai.title': 'Sistem AI',
      'services.items.ai.body': 'Dari tooling AI terapan sampai build yang berat di algoritma, Neiraverse bisa merancang sistem yang berpikir, mengklasifikasi, membantu, dan mengotomasi.',
      'services.items.web.title': 'Fullstack Engineering',
      'services.items.web.body': 'Melintasi framework modern dan arsitektur kustom, produk web dan backend bisa dibangun dari interface sampai infrastrukturnya.',
      'services.items.mobile.title': 'Drogon dan API Performa Tinggi',
      'services.items.mobile.body': 'Jangkauan stack tidak dibatasi jalur JavaScript umum. Neiraverse juga bekerja dengan arah performa tinggi yang tidak biasa seperti Drogon C++.',
      'services.items.ux.title': 'Blueprint dan Desain Interface',
      'services.items.ux.body': 'Ide diterjemahkan menjadi struktur, flow, interface, dan blueprint yang membuat sistem rumit lebih mudah dikirimkan.',
      'services.items.brand.title': 'Musik dan Output Kreatif',
      'services.items.brand.body': 'Neiraverse juga menjadi tempat untuk karya sonik, eksperimen kreatif, dan output yang hidup di luar jalur engineering konvensional.',
      'services.items.motion.title': 'Imajinasi Digital',
      'services.items.motion.body': 'Saat sesuatu belum ada, Neiraverse tetap bisa membentuk blueprint-nya, memvisualisasikannya, dan mendorongnya menuju bentuk yang bisa diwujudkan.',
      'services.items.strategy.title': 'IT Support dan Operasional',
      'services.items.strategy.body': 'Support langsung, troubleshooting, dan cara pikir sistemik adalah bagian dari jangkauan, bukan identitas yang terpisah.',
      'services.items.audit.title': 'Network, MikroTik, dan Server',
      'services.items.audit.body': 'Networking, routing, server operation, dan setup infrastruktur adalah kapabilitas kerja nyata di dalam stack Neiraverse.',
      'services.items.process.title': 'Riset dan Paper Hipotesis',
      'services.items.process.body': 'Ide bisa berubah menjadi model terstruktur, catatan riset, dan paper hipotesis saat masalahnya butuh dipikirkan sebelum dieksekusi.',
      'services.items.support.title': 'Gaming dan Kultur Digital',
      'services.items.support.body': 'Gaming tidak dianggap noise. Ia bagian dari konteks digital, logika reward, dan pola interaksi yang memengaruhi cara sistem dirancang.',
      'services.items.training.title': 'Quick Quest Model / QQM',
      'services.items.training.body': 'Neiraverse sedang meneliti QQM, model bisnis micro peer-to-peer yang mengubah bantuan informal menjadi ekosistem berbasis trust yang scalable.',
      'services.items.managed.title': 'Partner Build Sesuai Kebutuhan',
      'services.items.managed.body': 'Kalau Anda perlu sesuatu dibangun dengan pendekatan multidisipliner, hubungi Neiraverse dan kita akan cari jalur eksekusi yang paling tepat.',
      'gallery.title': 'Portofolio Kami',
      'gallery.subtitle': 'Jelajahi karya terbaru kami',
      'gallery.filters.all': 'Semua',
      'gallery.filters.web': 'Web',
      'gallery.filters.mobile': 'Mobile',
      'gallery.filters.branding': 'Branding',
      'testimonials.title': 'Cerita Klien',
      'testimonials.subtitle': 'Apa kata klien kami tentang kami',
      'about.title': 'Tentang Neiraverse',
      'about.subtitle': 'Kenapa ia ada dan kenapa disebut Digital Polymath',
      'about.heading': 'Neira + Verse = Neiraverse',
      'about.body.one': 'Neiraverse berasal dari Neira, nama pembuatnya, dan Verse, dunia atau wadah. Keduanya menjelaskan sebuah semesta yang menampung semua karya yang dibuat di bawah nama Neiraverse.',
      'about.body.two': 'Ia disebut Digital Polymath karena kapabilitasnya tidak berhenti di coding. AI, IT support, network engineering, MikroTik, server, gaming, paper hipotesis, music making, software engineering, dan fullstack work semuanya bertemu di sini.',
      'about.body.three': 'Neiraverse ada karena sulit memprediksi pasti apa yang bisa dibuat Neira, tetapi ketika sesuatu dikerjakan, biasanya ia benar-benar menjadi sebuah karya jadi.',
      'about.body.four': 'Karena itu Neiraverse lebih tepat dipahami sebagai wadah untuk output digital multidisipliner, bukan sekadar label jasa yang sempit.',
      'about.body.five': 'QQM atau Quick Quest Model adalah riset bisnis terbaru Neiraverse: model micro peer-to-peer berbasis merit yang mengubah bantuan informal menjadi ekosistem dengan matching, escrow, reputasi, dan Performance Point.',
      'contact.title': 'Bangun Bersama Neiraverse',
      'contact.subtitle': 'Kalau ada sesuatu yang perlu dibangun, diteliti, direkayasa, atau diterjemahkan jadi output kerja, hubungi saja.',
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
