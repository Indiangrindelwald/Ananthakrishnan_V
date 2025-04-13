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
          title: 'Electro-Optic Characterization of LiNbO₃ Crystal',
          description:
            'Investigated the electro-optic properties of Lithium Niobate (LiNbO₃) crystals, focusing on half-wave voltage (Vπ) measurement via the Pockels effect. Designed an optical setup with polarizers, lasers, and photodetectors to quantify voltage-induced birefringence. Demonstrated applications in optical modulation, achieving results consistent with theoretical models for nonlinear materials.',
          imageUrl:
            'data:image/jpeg;base64,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', // Replace with actual setup/crystal images
          link: '' // Optional (e.g., GitHub repo or paper)
        },
        {
          title: 'Magneto-Optic Study of SF6 Glass',
          description:
            'Investigated the Faraday effect in SF6 glass, measuring its Verdet constant using polarized laser light under variable magnetic fields. Designed an optical bench with Helmholtz coils, high-sensitivity photodetectors, and lock-in amplification to quantify polarization rotation. Characterized the material\'s potential for magneto-optic devices, comparing results with theoretical models for rare-earth-doped glasses.',
          imageUrl:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTF6sKT_EETDbMcRD6CNPxX2gmXw6_meHZQow&s', // Replace with images of your glass sample/experimental setup
          link: '' // Optional (e.g., GitHub/data repository)
        },
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
  hotjar: {
    id: '6370123',
    snippetVersion: 6,
  },


  themeConfig: {
    defaultTheme: 'cupcake',

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
