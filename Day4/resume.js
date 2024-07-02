const resume = {
    "name": "Yuvanbharathi",
    "contactInformation": {
      "email": "nyuvanbharathi@gmail.com",
      "phone": "123-456-7890",
      "address": "123 Main St, chennai"
    },
    "summary": "Experienced software developer with a strong background in developing scalable web applications and working with cutting-edge technologies. Proficient in multiple programming languages and frameworks.",
    "education": [
      {
        "degree": "Bachelor of Engineering in Computer Science",
        "institution": "MGR University",
        "graduationYear": 2023
      }
    ],

    "skills": [
      "JavaScript",
      "React",
      "Node.js",
      "HTML",
      "CSS",
      "RESTful APIs",
      "Git"
    ],
    "certifications": [
      {
        "name": "Certified MERN Developer",
        "issuingOrganization": "Guvi",
        "issueDate": "March 2024"
      }
    ],
    "projects": [
      {
        "name": "Personal Portfolio Website",
        "description": "Developed a personal portfolio website to showcase my projects and skills. Utilized React for the frontend and Node.js for the backend.",
        "technologies": [
          "React",
          "Node.js",
          "CSS"
        ],
        "link": "http://www.yuvanportfolio.com"
      }
    ],
    "languages": [
      {
        "language": "Tamil",
        "proficiency": "Native"
      },
      {
        "language": "English",
        "proficiency": "Professional working proficiency"
      }
    ]
  };

  
  // Using a simple 'for' loop to iterate over the 'education' array
  console.log("Education:");
for (let i = 0; i < resume.education.length; i++) {
  const education = resume.education[i];
  for (const key in education) {
    if (education.hasOwnProperty(key)) {
      console.log(`${key}: ${education[key]}`);
    }
  }
  // console.log(); // Add a blank line for readability between education entries
}
  
  // Using 'for...in' to iterate over the 'contactInformation' object
  console.log("\nContact Information:");
  for (const key in resume.contactInformation) {
    if (resume.contactInformation.hasOwnProperty(key)) {
      console.log(`${key}: ${resume.contactInformation[key]}`);
    }
  }
  
  // Using 'for...of' to iterate over the 'skills' array
  console.log("\nSkills:");
  for (const skill of resume.skills) {
    console.log(skill);
  }
  
  // // Using 'forEach' to iterate over the 'Project' array
  // console.log("\nProjects:");
  // resume.projects.forEach(project => {
  //   console.log(project);
  // });

  console.log("\nProjects:");
resume.projects.forEach(project => {
  for (const key in project) {
    if (project.hasOwnProperty(key)) {
      console.log(`${key}: ${project[key]}`);
    }
  }
});