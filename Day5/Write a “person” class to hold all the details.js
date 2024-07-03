class Person {
    constructor(name, contactInformation, summary, education, skills, certifications, projects, languages) {
      this.name = name;
      this.contactInformation = contactInformation;
      this.summary = summary;
      this.education = education;
      this.skills = skills;
      this.certifications = certifications;
      this.projects = projects;
      this.languages = languages;
    }
  
    displayEducation() {
      console.log("Education:");
      for (let i = 0; i < this.education.length; i++) {
        const education = this.education[i];
        for (const key in education) {
          if (education.hasOwnProperty(key)) {
            console.log(`${key}: ${education[key]}`);
          }
        }
      }
    }
  
    displayContactInformation() {
      console.log("\nContact Information:");
      for (const key in this.contactInformation) {
        if (this.contactInformation.hasOwnProperty(key)) {
          console.log(`${key}: ${this.contactInformation[key]}`);
        }
      }
    }
  
    displaySkills() {
      console.log("\nSkills:");
      for (const skill of this.skills) {
        console.log(skill);
      }
    }
  
    displayProjects() {
      console.log("\nProjects:");
      this.projects.forEach(project => {
        for (const key in project) {
          if (project.hasOwnProperty(key)) {
            console.log(`${key}: ${project[key]}`);
          }
        }
      });
    }
  
    displayCertifications() {
      console.log("\nCertifications:");
      for (const cert of this.certifications) {
        for (const key in cert) {
          if (cert.hasOwnProperty(key)) {
            console.log(`${key}: ${cert[key]}`);
          }
        }
      }
    }
  
    displayLanguages() {
      console.log("\nLanguages:");
      for (const language of this.languages) {
        for (const key in language) {
          if (language.hasOwnProperty(key)) {
            console.log(`${key}: ${language[key]}`);
          }
        }
      }
    }
  }


  const resume = {
    name: "Yuvanbharathi",
    contactInformation: {
      email: "nyuvanbharathi@gmail.com",
      phone: "123-456-7890",
      address: "123 Main St, Chennai"
    },
    summary: "Experienced software developer with a strong background in developing scalable web applications and working with cutting-edge technologies. Proficient in multiple programming languages and frameworks.",
    education: [
      {
        degree: "Bachelor of Engineering in Computer Science",
        institution: "MGR University",
        graduationYear: 2023
      }
    ],
    skills: [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Git"
    ],
    certifications: [
      {
        name: "Certified MERN Developer",
        issuingOrganization: "Guvi",
        issueDate: "March 2024"
      }
    ],
    projects: [
      {
        name: "Personal Portfolio Website",
        description: "Developed a personal portfolio website to showcase my projects and skills. Utilized React for the frontend and Node.js for the backend.",
        technologies: [
          "React",
          "Node.js",
          "CSS"
        ],
        link: "http://www.yuvanportfolio.com"
      }
    ],
    languages: [
      {
        language: "Tamil",
        proficiency: "Native"
      },
      {
        language: "English",
        proficiency: "Professional working proficiency"
      }
    ]
  };
  
  const person = new Person(
    resume.name,
    resume.contactInformation,
    resume.summary,
    resume.education,
    resume.skills,
    resume.certifications,
    resume.projects,
    resume.languages
  );
  
  person.displayEducation();
  person.displayContactInformation();
  person.displaySkills();
  person.displayProjects();
  person.displayCertifications();
  person.displayLanguages();
  