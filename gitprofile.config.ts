// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'Indiangrindelwald', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/Ananthakrishnan_V/',
  projects: {
    github: {
      display: false, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: ['arifszn/gitprofile', 'arifszn/pandora'], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
        {
          title: 'Project Name',
          description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
          imageUrl:
            'https://img.freepik.com/free-vector/illustration-gallery-icon_53876-27002.jpg',
          link: 'https://example.com',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Ananthakrishnan V',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'ananthakrishnan-v',
    
    
   
   
    instagram: 'paaatukaaran',
    
    

   
  
    phone: '+918547042102',
    email: 'v_ananthakrishnan@ug.cusat.ac.in',

  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1RuZm4unscw7nAJp5JnQ3LzRhT5zkHMpJ/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  transcript: {
    fileUrl:
      ' https://drive.google.com/file/d/1lX94hBj2CdPVn_DXmwAqcdWHvBvU3sC5/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    "Zemax Opticstudio", "Inverse design",

"Digital Image Correlation (DIC)",

"Speckle Imaging",

"Laser Laboratory Techniques",

"Silvaco TCAD",

"Altium",

"KLayout",

"Statistical process control (JMP)",

"Lumerical (FDTD)",

"COMSOL (FEM)",

"Python",

"MATLAB",

"Simulink",

"3D Printing/Modelling",
  ],
  experiences: [
    {
      company: "Centre for Nano Science and Engineering (CeNSE), IISc Bangalore",
      position: "Winter School 2024",
      from: "December 2024",
      to: "December 2024",
      companyLink: "https://www.cense.iisc.ac.in",
      description: "Explored semiconductor technology fundamentals, including wafer processing, device fabrication, and characterization. Gained hands-on experience with COMSOL, Altium, and JMP for simulations, PCB design, and process control. Conducted TCAD simulations for MOSFETs and CMOS integration, and studied photonics integration and MEMS packaging for next-gen devices."
    },
    {
      company: "CUSAT (Bachelor’s Thesis Project)",
      position: "Research Student (Optics/Electronics)",
      from: "January 2024",
      to: "April 2024",
      companyLink: "https://www.cusat.ac.in",
      description: "Investigated non-invasive electric current measurement using laser speckle and Digital Image Correlation (DIC). Presented at OptoIn-24 International Conference. Skills: DIC, Speckle Imaging, Istra4D, LaTeX."
    },
    {
      company: "IEEE Workshop (CUSAT)",
      position: "Project Trainee (MATLAB/Simulink)",
      from: "November 2022",
      to: "January 2023",
      companyLink: "https://www.ieee.org",
      description: "Simulated a solar array connected to power grids to study IV characteristics. Skills: MATLAB, Simulink."
    },
    {
      company: "CUSAT FABLAB - Technology Business Incubator",
      position: "Summer Intern (Robotics/LIDAR)",
      from: "Summer 2023",
      to: "Summer 2023",
      companyLink: "https://www.cusat.ac.in",
      description: "Miniaturized a movable LIDAR system using STM32 and TOF sensors. Achieved a working range of 3 meters with high-quality point cloud data. Skills: Arduino, robotics, data processing."
    }
],
certifications: [
  {
    name: "Materials Design for Electronic, Electromechanical and Optical Functions",
    body: "Dr. Pavan Nukala, CeNSE, IISc (NPTEL)",
    year: "2025",
    link: "https://nptel.ac.in",
  },
  {
    name: "Hands-on COMSOL Multiphysics Training",
    body: "CUSATECH Foundation",
    year: "2024",
    link: "https://www.comsol.com", // Replace with actual organizer link if available
  },
  {
    name: "Optical Designing with Zemax",
    body: "CADFEM India & IEEE Photonics Society, CUSAT",
    year: "2024",
    link: "https://www.zemax.com", // Replace with actual workshop link if available
  },
  {
    name: "MATLAB/Simulink Onramp",
    body: "MathWorks Learning Center",
    year: "2023",
    link: "https://matlabacademy.mathworks.com",
  },
  {
    name: "Python Megacourse",
    body: "Udemy",
    year: "2022",
    link: "https://www.udemy.com",
  },
 
  
],
educations: [
  {
    institution: "International School of Photonics, Cochin University of Science and Technology (CUSAT), Kochi",
    degree: "Integrated MSc in Photonics",
    from: "2021", // Assuming start year (adjust if needed)
    to: "2026",
    cgpa: "8.5/10",
  },
  {
    institution: "PM Shri Kendriya Vidyalaya NAD Aluva (CBSE)",
    degree: "XII (Senior Secondary)",
    from: "2019",
    to: "2020",
    percentage: "92%", // Converted from 9.2/10 for clarity
  },
  {
    institution: "PM Shri Kendriya Vidyalaya NAD Aluva (CBSE)",
    degree: "X (Secondary)",
    from: "2017",
    to: "2018",
    percentage: "91%", // Converted from 9.1/10
  },
],
publications: [
  {
    title: "Application of Digital Laser Speckle Image Correlation (DiLSIC) for Studying Thermal Behaviour in a Wire",
    conferenceName: "OptoIn-24 – International Conference on Advances in Optics and Photonics Instrumentation (by OSI)",
    journalName: "Proceedings of OPTOIn-2024", // Leave empty if not published in a journal
    authors: "Ananthakrishnan V, Vishwanath J R, Muhammad Rishad K P", // Add co-authors if any
    link: "ISBN: 978-93-48843-25-8", // Add DOI or conference link if available
    description: "Explored non-invasive measurement of electric current in PCBs using laser speckle and Digital Image Correlation (DIC). Demonstrated thermal expansion analysis of copper wires under low currents, with ongoing work to extend the method for PCB applications and mass testing of electrical circuits.",
  },
  // Add other publications if applicable
],


  // Display articles from your medium or dev account. (Optional)
  //blog: {
  //  source: 'dev', // medium | dev
  //  username: 'arifszn', // to hide blog section, keep it empty
  //  limit: 2, // How many articles to display. Max is 10.
  //},
  googleAnalytics: {
    id: 'G-VTQP37P3VB', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  //hotjar: {
  //  id: '',
  //  snippetVersion: 6,
  //},
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  //footer: `Made with <a 
  //    class="text-primary" href="https://github.com/arifszn/gitprofile"
  //    target="_blank"
  //    rel="noreferrer"
  //  >GitProfile</a> and ❤️`,

  enablePWA: true,
};

export default CONFIG;
