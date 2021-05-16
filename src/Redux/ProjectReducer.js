const initialState = {
 projectList: [
  {
    id: "1",
    name: "Mello",
    description: "A social media that targeting to cat owner",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603043/social_vcatdf.jpg",
    status: "Ongoing",
    technique: "HTML5, CSS3, Javscript, Reactjs",
    addition:
      "Context API, React-Boostrap, Material UI, Firebase Cloud Service, Responsive",
    webLink: "https://mellow-83a7f.web.app",
    type:"Advanced"
  },
  
  {
    id: "2",
    name: "Dressing room",
    description: "An app allow user to change clothes online",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603237/clothe_co7pxo.jpg",
    status: "Completed",
    technique: "HTML5, CSS3, Javscript, Reactjs",
    addition: "Redux, React-Boostrap, Material UI, Firebase Deploy Service",
    webLink: "https://dressing-room-75ad4.web.app",
    type:"Basic"
  },
  
 
  {
    id: "3",
    name: "E-Manage",
    description: "A web app allow user to manage employees",
    role: "Frontend Developer",
    image:
      "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603241/management_qvbnnh.jpg",
    status: "Complete",
    technique: "HTML5, CSS3, Javscript",
    addition: "Bootstrap, Firebase Deploy Service",
    webLink: "https://emloyeemanager.netlify.app",
    type:"Basic"
  },
  {
    id: "4",
    name: "Uber Calculation",
    description: "An app allows user to calculate Uber cost",
    role: "Frontend Developer",
    image:
      "https://images.unsplash.com/photo-1579667410546-f7079afa0601?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
    status: "Complete",
    technique: "HTML5, CSS3, Javscript",
    addition:
      "Context API, React-Boostrap, Material UI, Firebase Cloud Service",
    webLink: "https://cranky-perlman-507270.netlify.app/",
    type:"Basic"
  },
  {
    id: "5",
    name: "CyberPunk",
    description: "An online programming course",
    role: "Frontend Developer, team-leader",
    image:
      "https://res.cloudinary.com/dufh7rv0n/image/upload/v1617603241/course_d7nyks.jpg",
    status: "Ongoing",
    technique: "HTML5, CSS3, Javscript, Reactjs",
    addition:
      "Redux, React-Boostrap, Material UI, Firebase Deploy Servive ,Responsive",
    webLink: "https://cyber-e0d08.web.app/",
    type:"Advanced"
  },
],

};

const projectReducer = (state = initialState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};

export default projectReducer;
