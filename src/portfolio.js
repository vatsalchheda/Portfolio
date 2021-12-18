/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vatsal Chheda",
  title: "Hi all, I'm Vatsal",
  subTitle: emoji(
    "A passionate Full Stack Software Developer 🚀 having an experience of building Web with JavaScript / Reactjs / Nodejs and some other cool libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1zruF3kih2deHacTZHxxs7BGwqyQOHKmk/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vatsalchheda",
  linkedin: "https://www.linkedin.com/in/vatsalchheda/",
  gmail: "vatsalchheda007@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/chhedavatsal/",
  instagram: "https://www.instagram.com/chheda_vatsal/",
  twitter: "https://www.twitter.com/chheda_vatsal/",
  medium: "https://medium.com/@vatsalchheda007",
  stackoverflow: "https://stackoverflow.com/users/12171239/vatsal-chheda",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "FULL STACK DEVELOPER WHO'S EXPLORING MACHINE LEARNING, DEEP LEARNING, ARTIFICIAL INTELLIGENCE AND DATA SCIENCE",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web applications"
    ),
    emoji("⚡ Progressive Web Applications "),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "php",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "bootstrap",
      fontAwesomeClassname: "fab fa-bootstrap"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "git-alt",
      fontAwesomeClassname: "fab fa-git-alt"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName:
        "Dwarkadas J Sanghvi College of Engineering, affiliated with University of Mumbai",
      logo: require("./assets/images/DJSCE.jpg"),
      subHeader: "Bachelors of Engineering in Computer Engineering",
      duration: "August 2018 - current",
      desc: "Participated in the research of Machine Learning, Bioinformatics, NLP and published 4 papers.",
      descBullets: [
        "Maintained an average of 9.13 GPA of upto 6 semesters",
        "Vice-Chairperson of Logistics in DJACM",
        "Treasurer of the Computer Department for Annual Festival called Trinity"
      ]
    },
    {
      schoolName: "Shubhamraje Junior College",
      logo: require("./assets/images/SRJC.png"),
      subHeader: "High School (HSC)",
      duration: "September 2016 - April 2018",
      desc: "Ranked top 10% in the program. Took Computer Science as a vocational course.",
      descBullets: [
        "Took Science as a Stream in High School",
        "Studied C++, Microprocessor Programming as a part of Computer Science",
        "Scored 153/200 in MHT-CET"
      ]
    },
    {
      schoolName: "DAV Public School",
      logo: require("./assets/images/DAV.png"),
      subHeader: "Secondary School (CBSE)",
      duration: "September 2013 - April 2016",
      desc: "Ranked top 10% in the program",
      descBullets: ["Maintained a CGPA of 9.6/10"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    },
    {
      Stack: "Machine Learning",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Tech Intern",
      company: "Monk E",
      companylogo: require("./assets/images/MonkE.png"),
      date: "Nov 2020 – Mar 2021",
      desc: "Worked on Slash.Finance",
      descBullets: [
        "Developed an Invoice Management and Creation Website.",
        "Generating a downloadable customized invoice in PDF.",
        "Implemented Manager and Influencer Login.",
        "Manager can access multiple accounts.",
        "Worked with ReactJS, Firebase and Firestore."
      ]
    },
    {
      role: "Front-End Developer",
      company: "Munchin",
      companylogo: require("./assets/images/munchin.png"),
      date: "Jun 2020 – Sept 2020",
      desc: "Worked on Munch-in.in, a Social Media Web App",
      descBullets: [
        "Laid down the initial working of the app (React Router).",
        "Developed frontend including infinite scrolling",
        "Integrated Frontend with backend technologies",
        "Worked with ReactJS & Django-React Framework."
      ]
    },
    {
      role: "Front End Mentee",
      company: "Unicode",
      companylogo: require("./assets/images/unicode.svg"),
      date: "Aug 2019 – Jun 2020",
      desc: "Worked on Doctor-Clinic App",
      descBullets: [
        "Performed atomic tasks related to web development as a part of training process",
        "Developed few pages of the doctor clinic Portal and integrated with Backend",
        "Worked with ReactJS & Django-React Framework."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle:
    "SOME PROJECTS I DELVED INTO AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/eyeris.png"),
      projectName: "Eyeris Web App",
      projectDesc: "E-Commerce app for Patni Opticians"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://saayahealth.com/"
      //   }
      //   //  you can add extra buttons here.
      // ]
    },
    {
      image: require("./assets/images/automl.png"),
      projectName: "AutoML",
      projectDesc: "Web App for Automated Machine Learning"
      // footerLink: [
      //   {
      //     name: "Visit Website",
      //     url: "http://nextu.se/"
      //   }
      // ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  // title: emoji("Achievements And Certifications 🏆 "),
  title: emoji("Publications 📚"),
  subtitle: "Some Cool Stuff that I have published !",

  achievementsCards: [
    {
      title:
        "Data-driven Pre-processing Techniques for Early Diagnosis of Diabetes, Heart and Liver Diseases",
      subtitle:
        "Co-authored and presented the paper in IEEE ICECCT 2021, which got published in IEEE Xplore.",
      image: require("./assets/images/paperbeproj.png"),
      footerLink: [
        {
          name: "View Paper",
          url: "https://doi.org/10.1109/ICECCT52121.2021.9616835"
        },
        {
          name: "Final Year Project",
          url: ""
        }
      ]
    },
    {
      title:
        "Neural Machine Translation from Polish to Engllish using various techniques",
      subtitle:
        "Co-authored and presented the paper in CIESD 2021, which will be published in Web of Science and Scopus indexed AIP Publishing Journal.",
      image: require("./assets/images/papernmt.png"),
      footerLink: [
        {
          name: "View Paper",
          url: ""
        }
      ]
    },

    {
      title:
        "Automated Data Driven preprocessing and training of classification models",
      subtitle:
        "Co-authored and presented the paper in ICCCT 2021, will be published in IEEE Xplore.",
      image: require("./assets/images/paperautoml.png"),
      footerLink: [
        {name: "View Paper", url: ""},
        {name: "Auto ML Project", url: ""}
      ]
    },
    {
      title: "Stroke Prediction using Machine Learning",
      subtitle:
        "Co-authored and presented the paper in ICACET 2021, will be published in Scopus Indexed IOP Publishing Journal .",
      image: require("./assets/images/paperstroke.png"),
      footerLink: [
        {
          name: "View Paper",
          url: ""
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9004418123",
  email_address: "vatsalchheda007@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "chheda_vatsal", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
