import reactjs from "../src/assets/reactjs.png";
import vue from "../src/assets/vue.png";
import javascript from "../src/assets/javascript.png";
import html from "../src/assets/html.jpg";
import css from "../src/assets/css.png";
import sass from "../src/assets/sass.svg";
import bootstrap from "../src/assets/bootstrap.png";
import material from "../src/assets/materialui.png";
import vuetify from "../src/assets/vuetify.png";
import node from "../src/assets/nodejs.png";
import mongo from "../src/assets/mongodb.png";
import npm from "../src/assets/npm.png";
import nextjs from "../src/assets/nextjs.png";
import gitbash from "../src/assets/gitbash.png";
import github from "../src/assets/github.png";
import angular from "../src/assets/angular.png";
import svelte from "../src/assets/svelte.png";
import postman from "../src/assets/postman.png";
import tailwind from "../src/assets/tailwind.svg";
import graphql from "../src/assets/graphql.png";
import cypress from "../src/assets/cypress.jpg";
import wordpress from "../src/assets/wordpress.png";
import redux from "../src/assets/redux.png";
import strapi from "../src/assets/strapi.png";
import socket from "../src/assets/socket.png";
import rest from "../src/assets/restapi.png";
import ecogenic from "../src/assets/ecogenic.png";
import porter from "../src/assets/porter.png";
import studentmgt from "../src/assets/studentapp.png";
import guestmusic from "../src/assets/guesthome.png";
import ecom from "../src/assets/ecom.png"
import expressjs from "../src/assets/expressjs.png";
import profile_pic_head from "../src/assets/_profile_head_shot.png"
export const configData = {
  header: {
    navList: [
      {
        navName: "Home",
        id: 1,
        launchControl: false
      },
      {
        navName: "About",
        id: 2,
        launchControl: false
      },
      {
        navName: "Resume",
        id: 3,
        launchControl: false
      },
      {
        navName: "Projects",
        id: 4,
        launchControl: false
      },
      {
        navName: "Contact",
        id: 5,
        launchControl: false
      },
      {
        navName: "My Tech Blog",
        id: 6,
        launchControl: true
      }
    ],
    backgroundColor: "#303030",
    fontSize: ""
  },
  homeBanner: {
    above: {
      heading: "I'm Chandan.",
      skillTag: "Full-Stack Developer. A Life Long Student 🚀 .",
      socialList: [
        {
          icon: "",
          name: "Linkedin",
          link: "",
          launchControl: true
        },
        {
          icon: "",
          name: "Github",
          link: "",
          launchControl: true
        }
      ],
      description: "I am an experienced MERN stack developer with experience in designing and developing web applications using ReactJS, NodeJS, Express, and MongoDB. but am not restricted to any specific technology. I consider myself a lifelong student, I never ever stop myself to learn new technology. Proficient in front-end and back-end development, API integrations, and responsive web design.",
      fontSize: "",
      backgroundColor: ""
    },
    below: {
      backgroundImageUrl: "",

    },


  },
  aboutMe: {
    profile:{
      photoUrl:profile_pic_head,
      launchControl: true
    },
    aboutMe: {
      headingName: "I'm Chandan.Full-Stack Developer.Life Long Student 🚀 .",
      bio: 'I am an experienced MERN stack developer with experience in designing and developing web applications using ReactJS, NodeJS, Express, and MongoDB. but am not restricted to any specific technology. I consider myself a lifelong student, I never ever stop myself to learn new technology. Proficient in front-end and back-end development, API integrations, and responsive web design.',
      launchControl: true
    },
    contactDetails: {
      headingName: "Contact",
      name: "Chandan",
      address: "",
      mail: "malikchandan926@gmail.com",
      mobile: "",
      launchControl: true
    },
    resume: {
      name: "Download My Resume",
      link: "https://drive.google.com/file/d/1zdn-ee6vatqU21m6K8vecXCi-UkBtGw5/view",
      launchControl: true,
       bgColor: "#E83941",
       textColor: "white",
    },
    backgroundColor: "#303030"
  },
  techSkills: {
    headingName: "My Expertise Skills 🚀",
    align: "left", //left , middle , end,
    skillList: [
      {
        name: "Javascript",
        url: javascript,
        launchControl: true
      },
      {
        name: "HTML",
        url: html,
        launchControl: true
      },
      {
        name: "CSS",
        url: css,
        launchControl: true
      },
      {
        name: "React",
        url: reactjs,
        launchControl: true
      },
      {
        name: "NextJS",
        url: nextjs,
        launchControl: true
      },
      {
        name: "NodeJS",
        url: node,
        launchControl: true
      },
      {
        name: "MongoDB",
        url: mongo,
        launchControl: true
      },
      // {
      //   name: "Vue",
      //   url: vue,
      //   launchControl: true
      // },
      // {
      //   name: "Angular",
      //   url: angular,
      //   launchControl: true
      // },
      // {
      //   name: "Svelte",
      //   url: svelte,
      //   launchControl: false
      // },

      {
        name: "Sass",
        url: sass,
        launchControl: true
      },
      {
        name: "Bootstrap",
        url: bootstrap,
        launchControl: true
      },
      {
        name: "Material UI",
        url: material,
        launchControl: true
      },
      // {
      //   name: "Vuetify",
      //   url: vuetify,
      //   launchControl: true
      // },
    
      {
        name: "NPM",
        url: npm,
        launchControl: true
      },
      {
        name: "Gitbash",
        url: gitbash,
        launchControl: true
      },
      {
        name: "Github",
        url: github,
        launchControl: true
      },
      {
        name: "Postman",
        url: postman,
        launchControl: true
      },
      {
        name: "Tailwind",
        url: tailwind,
        launchControl: true
      },
      // {
      //   name: "Wordpress",
      //   url: wordpress,
      //   launchControl: true
      // },
      {
        name: "Redux",
        url: redux,
        launchControl: true
      },
      {
        name: "Cypress",
        url: cypress,
        launchControl: true
      },
     
      {
        name: "GraphQL",
        url: graphql,
        launchControl: true
      },
      {
        name: "Rest APIs",
        url: rest,
        launchControl: true
      },
      // {
      //   name: "Strapi",
      //   url: strapi,
      //   launchControl: false
      // },
      {
        name: "Socket.io",
        url: socket,
        launchControl: true
      },
    ]
  },
  projects: {
    projectList: [

      {
        id: "0",
        name: "Ecogenic",
        url: "https://github.com/stockchandu/Project-Ecogenic",
        live: "https://ecogenic-life.netlify.app/",
        img: `${ecogenic}`,
        description:
          "Eco genic is a project which focuses on helping people attain their sustainable lifestyle using green behavior.",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true
      },
      {
        id: "0",
        name: "Nordstrom",
        url: "https://github.com/stockchandu/Project-Nordstrom",
        live: "https://project-nordstrom.netlify.app/",
        img: "https://miro.medium.com/max/1400/1*Zr3Q2IrfG7VQ_G38kNiUNA.png",
        description:
          "Nordstrom is an American luxury department store chain. and evolved into a full-line retailer with departments for clothing, footwear, handbags, jewelry, accessories, cosmetics, and fragrances.",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true
      },

      {
        id: "1",
        name: "Porter",
        url: "https://github.com/stockchandu/Project-Porter-v2",
        live: "https://porter-logistics.herokuapp.com/",
        img: `${porter}`,

        description:
          "Porter is india's largest marketplace for intra-city logistics, porter enables companies and users to book minitrucks online and track the movement of their goods across the city.",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true
      },
      {
        id: "4",
        name: "Music Album",
        url: "https://github.com/stockchandu/music-album",
        live: "https://music-chandu-album.netlify.app/search?genre=romantic&page=1&size=8",
        img: `${guestmusic}`,

        description:
          "A application of music album , guest can see all album , filter album and artist can add new album , sort album and delete album",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true
      },
      {
        id: "100",
        name: "E-commerce",
        url: "https://github.com/stockchandu/ecommerce-app.git",
        live: "https://student-management-app-chandu.netlify.app/",
        img: `${ecom}`,

        description:
          "A application for online selling products.",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true
      },
      {
        id: "1",
        name: "Student Management",
        url: "https://github.com/stockchandu/student-management",
        live: "https://student-management-app-chandu.netlify.app/",
        img: `${studentmgt}`,
        description:
          "A application to manage student ,add student ,add contest,filter contest etc.",
        languages: [
          {
            tech: reactjs
          },
          {
            tech: node
          },
          {
            tech: mongo
          },
          {
            tech: expressjs
          },
        ],
        launchControl: true,

      },
    ],
    backgroundColor: "",
    fontSize: ""

  },
  callToAction: {
    btnList: [
      {
        name: "More Projects",
        link: "https://github.com/stockchandu",
        launchControl: true,
        textColor: "white",
        bgColor: "#E83941"
      }
    ]
  },
  footer: {
    firstHeadingName: "© Copyright",
    year: "2021-25",
    secondHeadingName: "Chandan ❤️"
  }
}