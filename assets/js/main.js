// Diccionario de traducciones (Español / Inglés)
const translations = {
  es: {
    nav_home: "Inicio",
    nav_about: "Sobre mí",
    nav_edu: "Formación",
    nav_exp: "Experiencia",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_contact: "Contacto",
    status_work: "Open to work",
    hero_eyebrow: "Desarrollador de videojuegos",
    hero_role_prefix: "Soy ",
    hero_role_suffix: " de videojuegos",
    hero_pitch: "Estudiante de <strong>Diseño y Programación de Videojuegos</strong>, formándome en Unity, Unreal Engine 5 y C#, con base también en arte y animación (Maya, ZBrush, Substance Painter, Photoshop). Me interesa participar del ciclo completo de un juego: prototipo, sistemas, arte y pulido final.",
    btn_contact: "Contactame",
    btn_projects: "Ver proyectos",
    code_role: '"Desarrollador / Game Designer"',
    code_engine: '"Unity por el momento"',
    code_comment: "// en formación — Escuela Da Vinci",
    about_eyebrow: "01 · Resumen",
    about_title: "Sobre mí",
    about_p1: "¡Hola! Sea el momento del día en que estés visitando esta web que armé con mucho cariño, te doy la bienvenida. Para contarte un poco sobre mí: soy un gran fanático de los juegos competitivos (como Call of Duty, Counter-Strike, Rust o EA FC). Estudio esto porque siempre me dio muchísima curiosidad el 'detrás de escena', entender cómo funcionan y cómo se crea todo. Mi gran meta es llegar a trabajar en alguno de esos títulos o en proyectos de estilo AAA.",
    about_p2: "Tengo un perfil muy abierto: me gusta escuchar, aprender de los demás y mejorar mis habilidades día a día con la mejor predisposición. Me siento cómodo moviéndome entre distintas áreas, ya sea programando, creando arte o armando documentación, y disfruto mucho el trabajo en equipo.",
    about_p3: "Para ir cerrando, te agradezco un montón por tomarte el tiempo de leer esto y chequear mi perfil. ¡Estoy a disposición para cualquier propuesta, muchas gracias!",
    stat_subjects: "Materias Aprobadas",
    stat_years: "Años Total de carrera",
    stat_jams: "Game jams",
    info_loc_k: "Ubicación",
    info_loc_v: "Buenos Aires, Argentina",
    info_edu_k: "Formación",
    info_edu_v: "Diseño y Prog. de Videojuegos",
    info_inst_k: "Institución",
    info_lang_k: "Idiomas",
    info_lang_v: "Español · Inglés · Italiano",
    info_look_k: "Buscando",
    info_look_v: "[Pasantía / Empleo]",
    edu_eyebrow: "02 · Formación",
    edu_title: "Formación & Cursos",
    tl1_date: "[2025] — presente",
    tl1_title: "Diseño y Programación de Videojuegos",
    tl1_org: "Escuela Da Vinci — título oficial de Diseñador/a y Programador/a de Simuladores Virtuales (3 años)",
    tl1_desc: "Formación en game design, programación con C# en Unity y Unreal Engine 5, animación 2D/3D, concept art, IA aplicada a videojuegos, VR/AR y postproducción de proyectos.",
    tl_web_date: "Certificación",
    tl_web_title: "Desarrollo Web (HTML, CSS & JavaScript)",
    tl_web_org: "Formación Complementaria",
    tl_web_desc: "Maquetación y estructuración de sitios web responsivos con HTML5 y CSS3, sumando interactividad y manipulación del DOM con JavaScript.",
    tl2_title: "[Educación Primaria y Secundaria]",
    tl2_desc: "Graduado en Educación Secundaria con énfasis en Economía y formación en idiomas Inglés e Italiano.",
    tl_extra_date: "Certificaciones Adicionales",
    tl_extra_title: "Preparación Física Deportiva & Estilismo Profesional",
    tl_extra_org: "Cursos Certificados",
    tl_extra_desc: "Certificación online en Preparación Física Deportiva y diploma profesional en Peluquería y Estilismo (2023), con capacitaciones continuas en técnicas de precisión.",
    exp_eyebrow: "03 · Trayectoria Laboral",
    exp_title: "Experiencia & Emprendimientos",
    exp1_date: "Julio 2025 — presente",
    exp1_title: "Fundador & Operador General — CebaMate_Quilmes",
    exp1_org: "E-commerce & Marca Propia (Tiendanube · Instagram · TikTok)",
    exp1_desc: "Gestión integral end-to-end de emprendimiento comercial: administración de tienda online en Tiendanube (con múltiples medios de pago y envíos a todo el país), estrategia de marketing digital y creación de contenido para Instagram y TikTok, gestión de compras y proveedores, control de stock, armado de pedidos y atención directa al cliente.",
    exp2_date: "2023 — presente",
    exp2_title: "Estilista & Peluquero Profesional (Autónomo)",
    exp2_org: "Servicio en Estudio Propio & A Domicilio — Certificado",
    exp2_desc: "Trabajo autónomo brindando atención personalizada tanto en local como a domicilio. Especialización en diversas técnicas de corte con capacitación constante, priorizando el máximo cuidado por el detalle estético, la puntualidad, la gestión de agenda y la fidelización de clientes.",
    skills_eyebrow: "04 · Conocimientos",
    skills_title: "Herramientas & Software",
    skill_cat1: "Motores & Programación",
    skill_cat2: "Arte 3D",
    skill_cat3: "Arte 2D & Animación",
    skill_cat4: "Diseño, Gestión & Producción",
    skill_proto: "Prototipado",
    skill_gdd: "Documentación (GDD)",
    skill_mkt: "Marketing & Redes",
    proj_eyebrow: "05 · Algunos Trabajos",
    proj_title: "Proyectos",
    proj1_tag: "Personaje - Modelo 3D · Final",
    proj1_title: "Modelado, Texturizado y Presentación de Personaje",
    proj1_desc: '"Modelado, texturizado y optimización de un personaje 3D game-ready. Pipeline completo end-to-end utilizando ZBrush, Autodesk Maya, Substance Painter y Marmoset Toolbag."',
    proj1_link: "Video →",
    proj2_tag: "Maya · Modelado",
    proj2_title: "Modelado de Maqueta y 2 Objetos Complejos",
    proj2_desc: "Aprendiendo y desarrollando habilidades en modelado 3D por primera vez y dando por terminada mi materia con este proyecto final con sus UVs realizados correctamente para texturizado.",
    proj2_link: "Imágenes →",
    proj3_tag: "Substance Painter · Texturizado",
    proj3_title: "Texturizado de Modelo 3D",
    proj3_desc: "Proyecto de texturizado y look dev desarrollado en Substance Painter. Consiste en la personalización de un modelo 3D orgánico combinando materiales de alta fidelidad, superficies plásticas con acabado metálico/glossy, rejillas de altavoz y detalles de iluminación emisiva. El flujo de trabajo incluyó pintura de texturas PBR, aplicación de mapas de desgaste, efectos de goteo tipo sangre y branding integrado con estética temática.",
    proj3_link: "Imágenes &rarr;",
    contact_eyebrow: "06 · Información de Contacto",
    contact_title: "Contacto",
    contact_loc_title: "Ubicación",
    contact_loc_place: "Buenos Aires, Argentina",
    contact_loc_avail: "Disponible para conversar sobre cualquier propuesta.",
    footer_text: "© 2026 Nicolas Lopez — ¡Muchas Gracias!",
    typed_roles: ["Diseñador", "Programador", "Modelador 3D"]
  },
  en: {
    nav_home: "home",
    nav_about: "About me",
    nav_edu: "Education",
    nav_exp: "Experience",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_contact: "Contact",
    status_work: "Open to work",
    hero_eyebrow: "Video Game Developer",
    hero_role_prefix: "I'm a Video Game ",
    hero_role_suffix: "",
    hero_pitch: "<strong>Video Game Design & Programming</strong> student, training in Unity, Unreal Engine 5, and C#, with a solid foundation in 3D art and animation (Maya, ZBrush, Substance Painter, Photoshop). Passionate about participating in the full game development lifecycle: prototyping, gameplay systems, 3D art, and final polish.",
    btn_contact: "Contact me",
    btn_projects: "View projects",
    code_role: '"Developer / Game Designer"',
    code_engine: '"Unity for now"',
    code_comment: "// in training — Escuela Da Vinci",
    about_eyebrow: "01 · Overview",
    about_title: "About me",
    about_p1: "Hello! Whatever time of day you're visiting this website I built with great care, welcome. To tell you a bit about myself: I'm a huge fan of competitive games (such as Call of Duty, Counter-Strike, Rust, or EA FC). I study game development because I've always been deeply curious about the 'behind the scenes'—understanding how games work and how everything is built from scratch. My ultimate goal is to work on titles like those or on AAA-style projects.",
    about_p2: "I have a very open-minded profile: I love listening, learning from others, and improving my skills every day with a positive attitude. I feel comfortable moving across different areas—whether programming, creating 3D art, or writing game design documentation—and I truly enjoy teamwork.",
    about_p3: "To wrap up, thank you so much for taking the time to read this and check out my portfolio. I'm open to any opportunity or proposal—thank you very much!",
    stat_subjects: "Passed Courses",
    stat_years: "Total Degree Years",
    stat_jams: "Game jams",
    info_loc_k: "Location",
    info_loc_v: "Buenos Aires, Argentina",
    info_edu_k: "Degree",
    info_edu_v: "Video Game Design & Prog.",
    info_inst_k: "Institution",
    info_lang_k: "Languages",
    info_lang_v: "Spanish · English · Italian",
    info_look_k: "Looking for",
    info_look_v: "[Internship / Job]",
    edu_eyebrow: "02 · Education",
    edu_title: "Education & Courses",
    tl1_date: "[2025] — present",
    tl1_title: "Video Game Design & Programming",
    tl1_org: "Escuela Da Vinci — Official Degree in Virtual Simulators Design & Programming (3 years)",
    tl1_desc: "Training in game design, C# programming in Unity and Unreal Engine 5, 2D/3D animation, concept art, game AI, VR/AR, and project post-production.",
    tl_web_date: "Certification",
    tl_web_title: "Web Development (HTML, CSS & JavaScript)",
    tl_web_org: "Complementary Training",
    tl_web_desc: "Layout and structure of responsive websites using HTML5 and CSS3, adding interactivity and DOM manipulation with JavaScript.",
    tl2_title: "[Primary & Secondary Education]",
    tl2_desc: "Graduated in Secondary Education with a focus on Economics and language training in English and Italian.",
    tl_extra_date: "Additional Certifications",
    tl_extra_title: "Sports Physical Conditioning & Professional Styling",
    tl_extra_org: "Certified Courses",
    tl_extra_desc: "Online certification in Sports Physical Conditioning and professional diploma in Barbering & Hair Styling (2023), with ongoing training in precision techniques.",
    exp_eyebrow: "03 · Work History",
    exp_title: "Experience & Ventures",
    exp1_date: "July 2025 — present",
    exp1_title: "Founder & General Operator — CebaMate_Quilmes",
    exp1_org: "E-commerce & Brand (Tiendanube · Instagram · TikTok)",
    exp1_desc: "End-to-end business management: running a Tiendanube online store (with multiple payment gateways and nationwide shipping), digital marketing strategy and content creation for Instagram & TikTok, purchasing and supplier management, inventory control, order fulfillment, and customer support.",
    exp2_date: "2023 — presente".replace("presente", "present"),
    exp2_title: "Professional Hair Stylist & Barber (Self-Employed)",
    exp2_org: "Studio & Home Service — Certified",
    exp2_desc: "Self-employed professional providing personalized styling services both in-studio and at home. Specialized in modern cutting techniques through continuous training, prioritizing extreme attention to aesthetic detail, punctuality, schedule management, and client retention.",
    skills_eyebrow: "04 · Tech Stack",
    skills_title: "Tools & Software",
    skill_cat1: "Engines & Programming",
    skill_cat2: "3D Art",
    skill_cat3: "2D Art & Animation",
    skill_cat4: "Design, Management & Production",
    skill_proto: "Prototyping",
    skill_gdd: "Documentation (GDD)",
    skill_mkt: "Marketing & Social Media",
    proj_eyebrow: "05 · Selected Works",
    proj_title: "Projects",
    proj1_tag: "Character - 3D Model · Final",
    proj1_title: "Character Modeling, Texturing & Presentation",
    proj1_desc: '"Modeling, texturing, and optimization of a game-ready 3D character. Complete end-to-end pipeline using ZBrush, Autodesk Maya, Substance Painter, and Marmoset Toolbag."',
    proj1_link: "Video →",
    proj2_tag: "Maya · 3D Modeling",
    proj2_title: "Diorama & 2 Complex Props Modeling",
    proj2_desc: "Learning and developing 3D modeling skills for the first time, wrapping up the course with this final project featuring clean UV mapping ready for texturing.",
    proj2_link: "Images →",
    proj3_tag: "Substance Painter · Texturing",
    proj3_title: "3D Model Texturing",
    proj3_desc: "Texturing and look development project created in Substance Painter. It features the customization of an organic 3D model combining high-fidelity materials, glossy/metallic plastic surfaces, speaker grills, and emissive glow details. The workflow included PBR texture painting, wear-and-tear maps, blood-drip effects, and integrated thematic branding.",
    proj3_link: "Images &rarr;",
    contact_eyebrow: "06 · Contact Information",
    contact_title: "Contact",
    contact_loc_title: "Location",
    contact_loc_place: "Buenos Aires, Argentina",
    contact_loc_avail: "Available to chat about any opportunity or proposal.",
    footer_text: "© 2026 Nicolas Lopez — Thank you very much!",
    typed_roles: ["Designer", "Programmer", "3D Modeler"]
  }
};

let typedInstance = null;

function initTyped(stringsArray) {
  if (typedInstance) {
    typedInstance.destroy();
  }
  typedInstance = new Typed('#roleWord', {
    strings: stringsArray,
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true,
    cursorChar: '|'
  });
}

function setLanguage(lang) {
  const dict = translations[lang] || translations.es;
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  // Actualizar estado activo de los botones ES / EN
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
  });

  // Reiniciar Typed.js con las palabras en el idioma seleccionado
  initTyped(dict.typed_roles);

  // Guardar preferencia del usuario
  try {
    localStorage.setItem('portfolio_lang', lang);
  } catch (e) {}
}

// Inicializar idioma al cargar
document.addEventListener('DOMContentLoaded', () => {
  let savedLang = 'es';
  try {
    savedLang = localStorage.getItem('portfolio_lang') || 'es';
  } catch (e) {}

  setLanguage(savedLang);

  // Eventos de los botones de idioma
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedLang = btn.getAttribute('data-lang');
      setLanguage(selectedLang);
    });
  });

  // Carruseles de imágenes en proyectos
  const carousels = document.querySelectorAll('.carousel-thumb');

  carousels.forEach((carousel) => {
    const slides = carousel.querySelectorAll('.carousel-slide');
    const prevBtn = carousel.querySelector('.prev-btn');
    const nextBtn = carousel.querySelector('.next-btn');
    const dotsContainer = carousel.querySelector('.carousel-dots');
    let currentIndex = 0;

    // Crear dots dinámicamente según la cantidad de imágenes
    slides.forEach((_, i) => {
      const dot = document.createElement('span');
      dot.classList.add('carousel-dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll('.carousel-dot');

    function showSlide(index) {
      if (index < 0) index = slides.length - 1;
      if (index >= slides.length) index = 0;
      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === currentIndex);
      });

      dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex - 1);
      });
    }

    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        showSlide(currentIndex + 1);
      });
    }
  });
});

// Reveal de proyectos al hacer scroll
const cards = document.querySelectorAll('.proj-card');
const io = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      item.target.classList.add('in');
      io.unobserve(item.target);
    }
  });
}, { threshold: 0.15 });
cards.forEach(c => io.observe(c));

// Resalta el link de nav activo según la sección visible
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('nav.topnav a');
const navObserver = new IntersectionObserver((items) => {
  items.forEach(item => {
    if (item.isIntersecting) {
      navLinks.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + item.target.id));
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });
sections.forEach(s => navObserver.observe(s));