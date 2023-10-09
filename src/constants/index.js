import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  photoshop,
  CPlus,
  html,
  css,
  reactjs,
  tailwind,
  AfterEffects,
  PremierePro,
  git,
  figma,
  aws,
  plasp,
  Calle,
  Kumon,
  Usertesting,
  MCC,
  construction,
  testlegend,
  threejs,
} from "../assets";

import { game1 } from "../assets";
import { game2 } from "../assets";
import { game3 } from "../assets";

export const navLinks = [
  {
    id: "proj_obj",
    title: "Project Objective",
  },
  {
    id: "mini_game",
    title: "Mini Games",
  },
  {
    id: "proj_exp",
    title: "Project Experience",
  },
  {
    id: "team_inf",
    title: "Team Info",
  },
];


const services = [
  {
    title: "How is Bob's emotional and physical state?",
    icon: web,
  },
  {
    title: "How will Bob get food and water?",
    icon: mobile,
  },
  {
    title: "How could Bob still have a succesfull expedition ? ",
    icon: backend,
  },
  {
    title: "How will Bob communicate with Earth?",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C++",
    icon: CPlus,
  },

  {
    name: "Adobe Photoshop",
    icon: photoshop,
  },
  {
    name: "Adobe After Effects",
    icon: AfterEffects,
  },
  {
    name: "Adobe Premiere Pro",
    icon: PremierePro,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "Gym Mini Game:",
    company_name: "Bench Press ",
    icon: Kumon,
    iconBg: "#383E56",
    date: "Spam the spacebar to lift the weight ",
    points: [
      "Staying active and exercising is a great way to stay healthy no matter where you are in our universe! It is also a great way to pass the time as you begin to miss your family on Earth and await for your mission to end.", 
      "As we know, our weight on Earth would be different than that of anywhere else in space, due to the force of gravity. Since the force of gravity on Titan is  1.352m/s^2, our weight would be 1/7th of that on Earth. Due to this, muscles will undergo muscle atrophy and deterioration of the skeleton when your weight shifts; you will experience things such as loss of muscle and bone density, and weakened immune system.", 
      "To highlight these challenges and the importance of exercise, we created a mini-game where the user is able to work out using a bench press!",
       
    ],
  },
  {
    title: "Green House Mini Game:",
    company_name: "Planting potatoes ",
    icon: plasp,
    iconBg: "#E6DEDD",
    date: "click where you want to plant the potatoes and let them grow",
    points: [
      "Now that you’re in a space without any fast food locations, it’s time to learn how to grow your own food! In this minigame, the user has found a geologically stable location to build a greenhouse and is growing potatoes.",
      "One challenge the user will face is the temperature being about -180 Celsius, so they will need to create a heat source. This can be done by using the oxygen from the ice or atmosphere and burning it with methane (which is 5% of the atmospheric composition) to create a heat source. Things such as fertilizers and light sources will already be provided to make the user’s experience easier.",
      "This mini-game emphasizes the difficulties of trying to make food on Titan and teaches people the different environmental and atmospheric conditions on Titan.",
    ],
  },
  {
    title: "Telescope Mini Game:",
    company_name: "Looking at the stars and planets",
    icon: Calle,
    iconBg: "#383E56",
    date: "Pick the right lens to see the stars and planets",
    points: [
      "Now that you’re at a location without any light pollution, you should be able to see the entire Milky Way band and the 88 recognized constellations in space! However, due to Titan’s extremely thick atmosphere, it would be difficult to see the sky unless it were a clear day.",
      "The user would use a telescope that contains the different electromagnetic radiations, including infrared and ultraviolet to look up into the sky and take observations. Unfortunately, the sky would look no different than the one from Earth, you would just be witnessing different perspectives",
      "As the user observes the sky and stumbles upon a planet or other object, a fun fact would appear regarding that astronomical body.",
      "This challenge is just a fun way to educate the user about different celestial bodies and inform them about different lenses used in telescopes and what they’re able to witness.",
    
    ],
  },
  {
    title: "Ice Cave/Water Purification Mini Game:",
    company_name: "Digging for gold",
    icon: Usertesting,
    iconBg: "#E6DEDD",
    date: "Dig for ice and purify it to get water as well as find interesting samples",
    points: [
      "Since Titan is very cold, you will probably witness lots of rain and snow that would freeze. Since the water contains cyanide, it is not drinkable.",
      "In this game, the user is tasked with finding a cave to extract water and filter it for drinkable water.",
      "This challenge teaches people how you can extract water from different materials and gives them the opportunity for the user to study Titan’s internal structure and core-mantle.",
    ],
  },
  {
    title: "Building a Radio Mini Game:",
    company_name: "Communicating with Earth",
    icon: MCC,
    iconBg: "#383E56",
    date: "Pick the right parts to build a radio",
    points: [
      "During your space expedition, you are expected to communicate your findings back to your boss on Earth.",
      "Since radio waves can travel at the speed of light, you would be able to send a signal back to Earth in around 80 minutes.",
      "When creating this radio, you are given two options for material usage using the rocky materials from Titan. This would introduce the user to the different materials and how to extract them to create useful tools during the expedition.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Gym Mini Game:",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: game1,
  },
  {
    testimonial:
      "GreenHouse Mini Game:",
    name: "Demitri Lee",
    designation: "CTO",
    company: "456 Enterprises",
    image: game2,
  },
  {
    testimonial:
      "Overworld Experience:",
    name: "Demitri Lee",
    designation: "CTO",
    company: "456 Enterprises",
    image: game3,
  },
];


const projects = [
  {
    name: "Challenges Faced",
    description0:[
      "1. When making a gym mini-game, the different gravities for each planet created a big range of actual weight in Earth numbers. This made it difficult to find a pattern that could keep the game consistent as well as playable. "
    ],
    description1:[
      "2. Creating the Animated characters/sprites took a lot of time away from the actual coding side. This forced us to not create more mini-games and a better storyline for the game.",
    ],
    description2:[
      "3. The biggest challenge we faced was the time constraint. We had a lot of ideas for the game but we could not implement them due to the time constraint. ",
    ],
    description3:[
      "4. Another challenge we faced was the lack of knowledge of the different technologies we used. We had to learn how to use them while making the game. ",
    ],
    description4:[
      "5. Another challenge we faced was the lack of knowledge of the different technologies we used. We had to learn how to use them while making the game. ",
    ],
    description5:[ 
      "6. Creating a website that has all the information on what are project was about created a lot of complications. From trying to figure out a related design to trying to make it aesthetic took a lot of time.",
    ],
    tags: [
      {
        name: "",
        color: "blue-text-gradient",
      },
      {
        name: "",
        color: "green-text-gradient",
      },
      {
        name: "",
        color: "pink-text-gradient",
      },
    ],
    image: testlegend,
    source_code_link: "https://github.com/Infinity606/Test-Legends",
  },
  {
    name: "Accomplishments Achieved Through This Hackathon",
    description0:[
      "1. The animations created for the mini-games using our own sprites had a fun look to it. This would make it fun to play the game since it's both nice to look at and interactive. "
    ],
    description1:[
      "2. All the mini-game ideas created had actual reasoning as to why they are important and educational to users. This makes the premise of the game a fun learning experience.",
    ],
    description2:[
      "3. Most of us learned new coding software by making this video game. This has taught us how games are made and given us an appreciation for actual game developers who have to do this all the time. ",
    ],
    description3:[
      "4. The facts about Titan and other things in the game were very educative for us and will be for future users. ",
    ],
    description4:[
      "5. Creating a website that has all our ideas and thought processes for the game as well as the site itself being aesthetic and being on theme for this hackathon was fun. ",
    ],
    description5:[ 
      "6. Our main achievement was being able to make a functional video game with an actual purpose within the given 1.5 days time period. Overcoming multiple challenges to create a useable prototype is something we didn't even expect.",
    ],
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: construction,
    source_code_link: "https://github.com/Infinity606",
  }
];

export { services, technologies, experiences, testimonials, projects };