export const PORTFOLIO_DATA = {
  level: { current: 999, max: 1000, totalBlocks: 50 },
  skills: [
    { key: 'htmlSkill', level: 96 },
    { key: 'pythonSkill', level: 83 },
    { key: 'mysqlSkill', level: 80 },
    { key: 'aiToolsSkill', level: 86 },
    { key: 'reactSkill', level: 80 }
  ],
  projectGroups: [
    {
      titleKey: 'frontEndTitle', badgeKey: 'badgeBeginner',
      items: [
        { href: './Store-E-Commerce/index.html', className: 'level-green', image: 'https://img.freepik.com/premium-psd/dark-smartphone-mockup-design_772836-647.jpg', titleKey: 'storeTitle', descKey: 'storeDesc', levelKey: 'req25' },
        { href: './gameXO/index.html', className: 'level-green', image: 'https://img.tapimg.net/market/images/959908226f4925523b68f0e2035e0d87.png?imageView2/0/h/270/format/jpg/interlace/1/ignore-error/1/t/1', titleKey: 'xoTitle', descKey: 'xoDesc', levelKey: 'req60' },
        { href: './imageGallery/index.html', className: 'level-green', image: 'https://play-lh.googleusercontent.com/eAXNQ-MW9GgvDEGnaxwL9xEoxBYkfqou3nu-RPBMIo0N47wgMDervpSFWmsCa0WrvYY=w600-h300-pc0xffffff-pd', titleKey: 'galleryTitle', descKey: 'galleryDesc', levelKey: 'req70' },
        { href: './time/index.html', className: 'level-green', image: 'https://tse1.mm.bing.net/th?id=OIP.aev3AAxwxk04v44Rt80QcgHaEL&rs=1&pid=ImgDetMain&o=7&rm=3', titleKey: 'timeTitle', descKey: 'timeDesc', levelKey: 'req75' }
      ]
    },
    {
      titleKey: 'frontEndTitle', badgeKey: 'badgeIntermediate',
      items: [
        { href: './Movie-Search-App/index.html', className: 'level-blue', image: 'https://media.filfan.com/NewsPics/FilfanNew/large/291935_0.jpeg', titleKey: 'movieTitle', descKey: 'movieDesc', levelKey: 'req50' },
        { href: 'https://pdfaaaa.wuaze.com/?i=1', className: 'level-blue', image: 'https://www.adobe.com/mena_ar/acrobat/online/media_1fad6a940cbc343d2b6db4c4e06ce55373c8312af.png?width=1200&format=pjpg&optimize=medium', titleKey: 'pdfTitle', descKey: 'pdfDesc', levelKey: 'req80', external: true },
        { href: 'https://merge-me.netlify.app', className: 'level-blue', image: 'https://aitnews.com/wp-content/uploads/2020/07/How-to-combine-PDF-files-5.jpg', titleKey: 'mergeTitle', descKey: 'mergeDesc', levelKey: 'req260', external: true },
        { href: 'https://edit-now.netlify.app', className: 'level-blue', image: 'https://tech3arabi.com/wp-content/uploads/2021/07/JGpXanoHdiHgngwDvgtt3A.jpg', titleKey: 'editTitle', descKey: 'editDesc', levelKey: 'req100', external: true }
      ]
    },
    {
      titleKey: 'fullStackTitle', badgeKey: 'badgeAdvanced',
      items: [
        { href: 'https://helloapp.ct.ws/log/loginpage.html', className: 'level-red', image: 'sadsa.JPG', titleKey: 'helloTitle', descKey: 'helloDesc', levelKey: 'req250', external: true },
        { href: 'https://unknown-p.netlify.app', className: 'level-red', image: 'https://www.marketingmedian.com/wp-content/uploads/2024/08/linkedin-formatting-post-e1723557833704.jpg', titleKey: 'unknownTitle', descKey: 'unknownDesc', levelKey: 'req220', external: true },
        { href: 'https://my-property-1.netlify.app', className: 'level-red', image: 'https://solutions-time.com/wp-content/uploads/2021/05/salse-anlystis.jpg', titleKey: 'propertyTitle', descKey: 'propertyDesc', levelKey: 'req300', external: true }
      ]
    }
  ],
  reactGroups: [
    {
      titleKey: 'frontEndTitleCap', badgeKey: 'badgeReact',
      items: [
        { href: 'https://to-do-list-awm.netlify.app', className: 'level-re', image: 'https://blog.lulu.com/content/images/2024/12/07-21-20-ToDoList-Blog.png', titleKey: 'todoReactTitle', descKey: 'todoReactDesc', levelKey: 'req300', external: true },
        { href: 'https://quizonline.site', className: 'level-re', image: 'QuizOnline.png', titleKey: 'quizTitle', descKey: 'quizDesc', levelKey: 'req400', external: true },
        { href: 'https://power-awm.netlify.app', className: 'level-re', image: 'power.png', titleKey: 'powerTitle', descKey: 'powerAwm', levelKey: 'req400', external: true }
      ]
    }
  ]
};

const TRANSLATIONS: Record<string, string> = {
  htmlSkill: "HTML/CSS",
  pythonSkill: "Python",
  mysqlSkill: "MySQL",
  aiToolsSkill: "AI Tools",
  reactSkill: "React",

  frontEndTitle: "Front-End Development",
  fullStackTitle: "Full-Stack Development",
  frontEndTitleCap: "Front-End (React)",

  badgeBeginner: "Beginner",
  badgeIntermediate: "Intermediate",
  badgeAdvanced: "Advanced",
  badgeReact: "React",

  storeTitle: "E-Commerce Mockup",
  storeDesc: "A responsive e-commerce layout.",
  xoTitle: "Tic Tac Toe",
  xoDesc: "Classic XO game implementation.",
  galleryTitle: "Image Gallery",
  galleryDesc: "A simple visual gallery.",
  timeTitle: "Time App",
  timeDesc: "Time and clock utility.",
  
  movieTitle: "Movie Search",
  movieDesc: "Search database for movies.",
  pdfTitle: "PDF Utilities",
  pdfDesc: "Online PDF viewer.",
  mergeTitle: "Merge Me",
  mergeDesc: "Combine multiple PDF files.",
  editTitle: "Edit Now",
  editDesc: "Simple file editing tool.",
  
  helloTitle: "Hello App",
  helloDesc: "Full-stack authentication system.",
  unknownTitle: "Unknown P",
  unknownDesc: "Social media formatting tool.",
  propertyTitle: "My Property",
  propertyDesc: "Real estate platform tool.",
  
  todoReactTitle: "To-Do List (React)",
  todoReactDesc: "Modern React-based to-do list.",
  quizTitle: "Quiz Online",
  quizDesc: "Take quizzes online.",
  powerTitle: "Power Tool",
  powerAwm: "Application utility."
};

export const t = (key: string) => TRANSLATIONS[key] || key;

export const parseReqLevel = (levelKey: string) => {
  return levelKey.replace('req', 'Lv.');
};
