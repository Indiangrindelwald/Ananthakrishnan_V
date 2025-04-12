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
  base: '/',
  
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
          title: 'VCSEL Optical analysis using FDTD',
          description:
            "This project analyzes a VCSEL designed using Lumerical's FDTD solver, simulating its electromagnetic performance through field distribution, Poynting vector, and far-field projections to optimize it for optical communication and sensing. The results demonstrate FDTD's effectiveness in modeling VCSEL structures for improved efficiency in photonic systems.",
          imageUrl:
            'https://www.mdpi.com/biosensors/biosensors-12-01098/article_deploy/html/images/biosensors-12-01098-g001.png',
          link: 'https://drive.google.com/file/d/1kgqxZtD0e3oQpO3gWAc8xsF5Z_a_RvDs/view?usp=sharing',
        },
        {
          title: 'Electric Current Measurement via Laser Speckle (DILSIC)',
          description:
            'Exploring non-invasive electric current measurement in PCBs using Digital Image Correlation (DIC) and laser speckle imaging. Demonstrated thermal expansion correlation in copper wires under low currents, with ongoing work to extend the method for PCB mass testing. Presented at OptoIn-24 (OSI) and published in conference proceedings.',
          imageUrl:
            'https://405nm.com/wp-content/uploads/2023/01/Laser_speckle.webp', // Replace with experimental setup/speckle images
          link: '', // Add publication link when available
          skills: ['DIC', 'Speckle Imaging', 'Istra4D', 'LaTeX', 'Non-destructive Testing'],
        },
        {
          title: 'Mie Scattering Analysis in FDTD',
          description:
            'Investigated Mie scattering phenomena for spherical particles of varying sizes under broadband illumination using Finite-Difference Time-Domain (FDTD) simulations. Characterized scattering efficiency, angular distribution, and wavelength-dependent effects. Validated results against theoretical Mie solutions and explored potential applications in optical nanoantennas and related sensors.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQICsui0byre5EbU8YHUllGOTB31jvqR9u6Zw&s', // Replace with actual simulation visuals/plots
          link: '', // Optional
        },
        {
          title: 'LiFi Audio Transmission System',
          description:
            'Designed and implemented a proof-of-concept LiFi system using an Arduino UNO, a laser diode, and a solar cell as the receiver. Transmitted audio signals (music from a smartphone) via amplitude-modulated laser light, decoded by the solar cell, and outputted to a speaker through the Arduino\'s analog input. Demonstrated real-time, wireless data transmission over visible light with minimal latency, highlighting the potential for low-cost, secure communication systems.',
          imageUrl:
            'https://www.oledcomm.net/wp-content/uploads/2024/11/What-is-Free-Space-Optical-Communication-scaled.jpg', // Replace with setup photos
          link: 'https://github.com/yourusername/lifi-audio-arduino', // Optional
        },
        {
          title: '3D LiDAR Prototype with STM32',
          description:
            'Developed a low-cost 3D LiDAR system using an STM32 microcontroller and ultrasonic tof sensor (TF Luna) for spatial mapping. Implemented real-time data acquisition, servo motor control for azimuth/elevation scanning, and point cloud generation via custom algorithms. Demonstrated applications in obstacle avoidance and small-scale environment reconstruction, achieving ±5 cm accuracy within a 3-meter range.',
          imageUrl:
            'https://www.geo.tuwien.ac.at/pg/pctools/publish/pointCloudThinOut/html/pointCloudThinOut_02.png', // Replace with setup photos/point cloud visuals
          link: 'https://github.com/yourusername/stm32-3d-lidar', // Optional
        },
        {
          title: 'Solar Power Grid Simulation (MATLAB/Simulink)',
          description:
            'Modeled a solar array integrated with power grids to analyze IV characteristics during an IEEE workshop. Gained insights into renewable energy systems and grid compatibility.',
          imageUrl:
            'https://www.energy.gov/sites/default/files/styles/full_article_width/public/2024-08/Crystalline-Silicon-Module.png?itok=MbcgoQm_', // Replace with simulation screenshots
          link: '',
          skills: ['MATLAB', 'Simulink', 'Renewable Energy Systems'],
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
    "Ultrafast lasers and Optics", "Zemax Opticstudio","Lumerical (FDTD)",

"COMSOL (FEM)",
 "Inverse design",

"Digital Image Correlation (DIC)",

"Speckle Imaging",

"Laser Laboratory Techniques",

"Silvaco TCAD",

"Altium",

"KLayout",

"Statistical process control (JMP)",

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
    //journalName: "Proceedings of OPTOIn-2024", // Leave empty if not published in a journal
    authors: "Ananthakrishnan V, Vishwanath J R, Muhammad Rishad K P", // Add co-authors if any
    link: "https://csio.res.in/OPTOIN2024/e-Proceedings_OPTOIn-2024.pdf", // Add DOI or conference link if available
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
    id: 'G-DZ1VTEE259', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  //hotjar: {
  //  id: '',
  //  snippetVersion: 6,
  //},


  themeConfig: {
    defaultTheme: 'pastel',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

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
