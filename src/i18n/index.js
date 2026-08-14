import { createI18n } from 'vue-i18n'

export const supportedLocales = ['es', 'en']
export const defaultLocale = 'es'

const messages = {
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre mí',
      knowledge: 'Mis conocimientos',
      experience: 'Experiencia',
      login: 'Iniciar sesión',
      dashboard: 'Panel',
    },
    header: {
      words: ['FRONTEND', 'DEVELOPER'],
      linkedin: 'Alejandro Espino',
    },
    home: {
      scrollDown: 'Scroll down',
      aboutTitle: 'Sobre mí',
      aboutParagraphs: [
        'Soy desarrollador FrontEnd con conocimientos avanzados en VueJS 3, JS, SASS y animaciones. Me especializo en maquetación web, responsive y animaciones, y me gustaría orientar mi carrera en esa dirección.',
        'Me considero una persona responsable, trabajadora y con muchas ganas de aprender.',
      ],
      knowledgeTitle: 'Mis conocimientos',
      experienceTitle: 'Experiencia',
      backToTop: 'Volver arriba',
      close: 'Cerrar',
      readMore: 'Leer más',
      language: {
        english: 'INGLÉS',
        spanish: 'ESPAÑOL',
      },
    },
    experience: {
      tcatik: {
        role: 'Desarrollador Full Stack',
        description:
          'Trabaje durante dos años en el desarrollo de sitios web y aplicaciones para distintos clientes, utilizando diferentes tecnologías según las necesidades de cada proyecto. Participé en más de diez proyectos de gran escala y muchos otros más pequeños.',
      },
      occam: {
        role: 'Desarrollador Full Stack',
        description:
          'Fui desarrollador principal de varios proyectos, como sitios web, paneles de administración y APIs para aplicaciones móviles. El proyecto más grande en el que trabajé, y del que también fui el único desarrollador, fue un sistema ERP en el que trabajan diariamente más de cien personas.',
      },
      gesein: {
        role: 'Desarrollador Front End',
        description:
          'Actualmente trabajo a tiempo completo como desarrollador frontend, utilizando tecnologías como VueJS 3, JS y SCSS. Utilizo metodologías Agile y Scrum para desarrollar los distintos proyectos en los que trabajo.',
      },
    },
    skills: {
      vue: 'Tengo experiencia sólida con VueJS 3, creando interfaces de usuario dinámicas y basadas en componentes para aplicaciones web modernas. Trabajo con datos reactivos, propiedades computadas, hooks del ciclo de vida y gestión del estado para crear soluciones escalables y mantenibles. Me centro en componentes reutilizables, una separación clara de responsabilidades y una comunicación eficiente entre componentes. También integro APIs, gestiono flujos de datos asincrónicos y optimizo el rendimiento. VueJS 3 me permite crear interfaces rápidas y fáciles de usar manteniendo un código limpio y una arquitectura estructurada para proyectos a largo plazo.',
      javascript:
        'Tengo más de cinco años de experiencia trabajando con JavaScript, utilizándolo como lenguaje principal para crear aplicaciones web modernas. Me manejo con las funcionalidades de ES6+, la programación asincrónica y las arquitecturas orientadas a eventos. Mi trabajo incluye manipulación del DOM, gestión del estado, integración de APIs y optimización del rendimiento. Me centro en escribir código limpio, legible y escalable que sea fácil de mantener. JavaScript me ha permitido adaptarme rápidamente a nuevos frameworks y herramientas, comprender el comportamiento del navegador y crear soluciones interactivas, eficientes y centradas en el usuario.',
      sass: 'Utilizo SASS para escribir hojas de estilos más estructuradas, escalables y mantenibles. Gracias a variables, mixins, funciones y anidamiento mantengo los estilos consistentes y fáciles de gestionar en proyectos grandes. SASS me permite implementar sistemas de diseño de forma eficiente y reducir la repetición en las bases de código CSS. Organizo los estilos siguiendo arquitecturas claras, lo que facilita la colaboración con otros desarrolladores. Mi experiencia con SASS ayuda a acelerar el desarrollo, mejorar la legibilidad y mantener los estilos flexibles y fáciles de ampliar.',
      css: 'Tengo amplia experiencia con CSS3, creando interfaces responsivas, atractivas y eficientes. Trabajo con Flexbox, Grid, animaciones, transiciones y "media queries" para que los diseños se adapten a cualquier dispositivo y tamaño de pantalla. Me centro en estrategias de estilos mantenibles, sistemas de diseño coherentes y patrones reutilizables. También optimizo el CSS reduciendo redundancias y evitando complejidad innecesaria. Mi enfoque equilibra estética y usabilidad para crear interfaces pulidas, intuitivas, accesibles y alineadas con los estándares web modernos.',
      html: 'Tengo una amplia experiencia con HTML5, utilizándolo para crear estructuras limpias, semánticas y accesibles para aplicaciones web modernas. Me centro en escribir un marcado bien organizado que mejore el SEO, el rendimiento y la mantenibilidad. Trabajo habitualmente con etiquetas semánticas, formularios, elementos multimedia y buenas prácticas de accesibilidad, etiquetado correcto y una estructura lógica del documento. HTML5 es la base de mi trabajo frontend y permite crear aplicaciones robustas, escalables y fáciles de integrar con CSS, JavaScript y frameworks modernos. También presto atención a la compatibilidad entre navegadores y al cumplimiento de los estándares.',
      git: 'Utilizo Git a diario como sistema principal de control de versiones, tanto individualmente como en equipos. Me manejo con estrategias de ramas, merges, resolución de conflictos y mantenimiento de un historial de commits limpio. Git me permite colaborar de forma eficiente, hacer seguimiento de los cambios y gestionar varias funcionalidades o correcciones simultáneamente. Sigo buenas prácticas como mensajes de commit significativos y flujos de trabajo organizados. Mi experiencia con Git garantiza estabilidad del código, colaboración fluida y un mantenimiento fiable durante todo el ciclo de vida del proyecto.',
    },
    github: {
      goToComponent: 'Ir al componente',
      descriptions: {
        nonTouchableWords:
          'Componente que muestra las palabras del titulo y permite pintarlas al pasar el raton por encima.',
        scrollDown: 'Indicador de desplazamiento que se anima para mostrar que hay mas contenido.',
        followCursor:
          'Cursor personalizado que sigue el movimiento del raton y cambia su apariencia al pasar sobre elementos concretos.',
      },
    },
  },
  en: {
    nav: {
      home: 'Home',
      about: 'About me',
      knowledge: 'My Knowledge',
      experience: 'Experience',
      login: 'Login',
      dashboard: 'Dashboard',
    },
    header: {
      words: ['FRONTEND', 'DEVELOPER'],
      linkedin: 'Alejandro Espino',
    },
    home: {
      scrollDown: 'Scroll down',
      aboutTitle: 'About me',
      aboutParagraphs: [
        'I am a FrontEnd developer with advanced knowledge in VueJS 3, JS, SASS and animations. I specialize in web layout, responsive design and animations, and I would like to focus my career in that direction.',
        'I consider myself a responsible, hardworking and eager to learn person.',
      ],
      knowledgeTitle: 'My Knowledge',
      experienceTitle: 'Experience',
      backToTop: 'Back to top',
      close: 'Close',
      readMore: 'Read More',
      language: {
        english: 'ENGLISH',
        spanish: 'SPANISH',
      },
    },
    experience: {
      tcatik: {
        role: 'Full Stack Developer',
        description:
          "I worked for two years developing websites and applications for different clients, using different technologies according to each project's needs. I participated in more than ten large-scale projects and many smaller ones.",
      },
      occam: {
        role: 'Full Stack Developer',
        description:
          'I was the main developer of multiple projects such as websites, administration panels and APIs for mobile applications. The biggest project I worked on, and was also the only developer for, was an ERP system used daily by more than a hundred people.',
      },
      gesein: {
        role: 'Front End Developer',
        description:
          'I am currently working full time as a frontend developer, using technologies such as VueJS 3, JS and SCSS. I use Agile and Scrum methodologies to develop the various projects I work on.',
      },
    },
    skills: {
      vue: 'I have solid experience with VueJS 3, building dynamic, component-based user interfaces for modern web applications. I work with reactive data, computed properties, lifecycle hooks and state management to create scalable and maintainable solutions. I focus on reusable components, clean separation of concerns and efficient communication between components. I also integrate APIs, handle asynchronous data flows and optimize performance. VueJS 3 allows me to deliver fast, user-friendly interfaces while maintaining clean code and a structured architecture suitable for long-term projects.',
      javascript:
        'I have over five years of experience working with JavaScript, using it as the core language for building modern web applications. I am comfortable with ES6+ features, asynchronous programming and event-driven architectures. My work includes DOM manipulation, state management, API integration and performance optimization. I focus on writing clean, readable and scalable code that is easy to maintain over time. JavaScript has allowed me to adapt quickly to new frameworks and tools, understand browser behavior in depth and deliver interactive, efficient and user-focused solutions.',
      sass: 'I use SASS to write more structured, scalable and maintainable stylesheets. By leveraging variables, mixins, functions, partials and nesting, I keep styles consistent and easy to manage across large projects. SASS allows me to implement design systems efficiently and reduce repetition in CSS codebases. I organize styles following clear architectures, making collaboration with other developers smoother. My experience with SASS helps speed up development, improve readability and ensure that styling remains flexible and easy to extend as projects grow and evolve.',
      css: 'I have extensive experience with CSS3, creating responsive, visually appealing and performant user interfaces. I work confidently with Flexbox, Grid, animations, transitions and media queries to ensure layouts adapt seamlessly across devices and screen sizes. I focus on maintainable styling strategies, consistent design systems and reusable patterns. I also optimize CSS for performance by reducing redundancy and avoiding unnecessary complexity. My approach balances aesthetics with usability, ensuring interfaces are visually polished, intuitive, accessible and aligned with modern web standards.',
      html: 'I have strong experience with HTML5, using it to build clean, semantic and accessible structures for modern web applications. I focus on writing well-organized markup that improves SEO, performance and maintainability. I regularly work with semantic tags, forms, multimedia elements and accessibility best practices, proper labeling and logical document structure. HTML5 is the foundation of my frontend work, ensuring applications are robust, scalable and easy to integrate with CSS, JavaScript and modern frameworks. I also pay close attention to cross-browser compatibility and standards compliance.',
      git: 'I use Git daily as my primary version control system, both individually and in team environments. I am comfortable with branching strategies, merging, resolving conflicts and maintaining a clean commit history. Git enables me to collaborate efficiently, track changes and manage multiple features or fixes simultaneously. I follow best practices such as meaningful commit messages and organized workflows. My experience with Git ensures code stability, smooth collaboration and reliable project maintenance throughout the entire development lifecycle.',
    },
    github: {
      goToComponent: 'Go to the component',
      descriptions: {
        nonTouchableWords:
          'A component that displays the title words and lets users paint them when hovering over them.',
        scrollDown: 'A scroll down indicator that animates to show users there is more content.',
        followCursor:
          'A custom cursor that follows mouse movement and changes its appearance when hovering over specific elements.',
      },
    },
  },
}

const initialLocale = supportedLocales.includes(window.location.pathname.split('/')[1])
  ? window.location.pathname.split('/')[1]
  : defaultLocale

const i18n = createI18n({
  legacy: false,
  locale: initialLocale,
  fallbackLocale: defaultLocale,
  messages,
})

export default i18n
