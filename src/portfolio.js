/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/130956-food-loader.json"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Mehar Johal",
  title: "Heya! I'm",
  subTitle: emoji(
    "Hi! I'm a third year CS major at Georgia Tech 💻, amateur cook 🍜, and avid linguist 📙 with experience working on petabyte scale Distributed System applications with Java / Python / AWS and everything in between!"
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PaA0U2CytZzIpkMlJ9fwlnPBC845Scu8/view?usp=share_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/mjohal3",
  linkedin: "https://www.linkedin.com/in/mehar-s-johal/",
  gmail: "meharj03@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "BUILD AN INCLUSIVE FUTURE WITH CODE AND A BOUNDLESS CURIOUSITY",
  skills: [
    emoji(
      "⚡ Develop highly responsive infrastructure, from database to user interface for your systems of scale"
    ),
    emoji(
      "☁️ Cloud integration and transitioning with knowledge of AWS, Azure, and Terraform"
    ),
    emoji(
      "🔎 Personal research in Computer Vision analysis of satellite imagery and threat detection / CTF reverse engineering with Ghidra"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "AWS",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-c"
    },
    {
      skillName: "R",
      fontAwesomeClassname: "fab fa-r-project"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Georgia Tech",
      logo: require("./assets/images/gtlogosquare.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "August 2021 - Present",
      desc: "Specialization in Intelligence and Media",
      descBullets: [
        "Relevant Coursework: Data Structures and Algorith, Algorithms and Complexity, Computer Organization, Databases, Computer Graphics, Linear Algebra, Combinatorics",
        "Clubs: VG Dev, Sikh Student Association"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Backend/Distributed Systems", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Cloud / AWS",
      progressPercentage: "85%"
    },
    {
      Stack: "UI/UX Design",
      progressPercentage: "70%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer Intern",
      company: "Amazon",
      companylogo: require("./assets/images/smolamazon.png"),
      date: "May 2022 – August 2022",
      descBullets: [
        "Worked as part of DynamoDB team, managing exabytes of storage for over 250,000 end users",
        "Implemented and began global rollout to all customers in all availability zones.",
        "Designed a new infrastructure layout using distributed cache called MemDS to mitigate scalability issues and improve latency for all end users"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "Bloomberg",
      companylogo: require("./assets/images/bloomberg.jpg"),
      date: "May 2021 – August 2021",
      desc: "Worked with Bloomberg’s Compute Automation team, managing a vast variety of hardware in their national datacenters. Developed with Flask Restful API interfaces and ideated a new Python CLI wrapper package from the ground up for deployment. Containerized CLI using B-Package and Kubernetes, and deployed to Terminal."
    },
    {
      role: "ML Teaching Assistant",
      company: "Columbia University",
      companylogo: require("./assets/images/columbia.png"),
      date: "May 2020 – August 2020",
      desc: "Worked as a teaching assistant for the 2020 Columbia AI4ALL Program. Taught Python and introductory Machine Learning (ML) concepts through Colaboratory, and led discussions on the ethics and social justice implications of AI systems. Also created supplementary Jupyter Notebooks based on current Kaggle and DS trends, and led a 5 person research group to create a KNN Spotify reccomendation algorithm."
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
  subtitle: "STARTUPS AND COMPANIES I'VE FOUNDED",
  projects: [
    {
      image: require("./assets/images/hsnavigator.jpg"),
      projectName: "HS Navigator",
      projectDesc:
        "Founded 501c3 Non-Profit HS Navigator, (hsnavigator.org), and created a one-stop search tool for high school students searching for pre-college summer opportunities or internship experience. Also launched a summer internship program and webinar series called Young Scholars. Featured on CBS New York, NJ 101.5, and recognized by hundreds of school districts and Roselle City Council as an official school partner.",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://hsnavigator.org"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/Conrad_Challenge_Logo_RGB.png"),
      projectName: "Techognize",
      projectDesc:
        "Designed and ideated Techognize, a VR/AR educational flashcard to help transfer information from Chrome OS devices to any mobile environment, and assist those with learning disabilities by encouraging interactive studying habits. Recognized by NASA Conrad Challenge and won the 2020 Innovator in Educational Technology",
      footerLink: [
        {
          name: "Visit Website",
          url: "https://www.conradchallenge.org/2020-conrad-innovators"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements🏆 "),
  subtitle:
    "Achievements, Certifications, and Some Cool Stuff that I have done!",

  achievementsCards: [
    {
      title: "AWS Certifications",
      subtitle:
        "I am certified as a Cloud Practitioner, Solutions Architect Associate, and have the Machine Learning Specialty for AWS!",
      image: require("./assets/images/Amazon_Web_Services-Logo.wine.png"),
      imageAlt: "AWS Logo",
      footerLink: [
        {
          name: "Badge",
          url: "https://www.credly.com/badges/bc1ba696-1342-4d78-af29-344b71475412/public_url"
        }
      ]
    },
    {
      title: "LinkedIn Skill Badges",
      subtitle:
        "Passed LinkedIn Skill Assessments for Java, Python, Linux, and Machine Learning",
      image: require("./assets/images/linkedin.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "Linkedin",
          url: "https://linkedin.com/in/mehar-s-johal"
        }
      ]
    },
    {
      title: "NASA Conrad Innovator",
      subtitle:
        "Won 2020 NASA Conrad Innovation Challenge in Educational Technology",
      image: require("./assets/images/Conrad_Challenge_Logo_RGB.png"),
      imageAlt: "Conrad Logo",
      footerLink: [{name: "Website", url: "https://www.conradchallenge.org/"}]
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
  subtitle: emoji("I LOVE TO SPREAD THE KNOWLEDGE, FOLLOWING MY SEVA"),

  talks: [
    {
      title: "Young Scholar Program",
      subtitle:
        "HS Navigator's 2022 and 2021 YSP, attended by over 200 students",
      event_url: "https://hsnavigator.org/young-scholar-program-2022"
    },
    {
      title: "Sikhs at JP Morgan",
      subtitle: "",
      event_url:
        "https://www.linkedin.com/feed/update/urn:li:activity:7009765152350773248?utm_source=share&utm_medium=member_desktop"
    }
  ],
  display: true // Set false to hide this section, defaults to true
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
  number: "+1-201-937-6090",
  email_address: "meharj03@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
