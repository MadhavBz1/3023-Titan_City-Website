import React from "react";
import {Tilt} from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

import { shaiyaan } from "../assets";



const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
    <motion.div 
      variants={fadeIn("left", "spring", 0.1, 2)}
    >
      <img 
        src={shaiyaan} 
        alt='logo' 
        style={{ float: 'right', marginLeft: '1em', marginRight: "2.3em"}}
        className='w-59 h-64 rounded-3xl' 
      />
    </motion.div>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Project Objective.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
      >
        Welcome to Titan, Saturn’s biggest moon, if they put a pushpin on it, it would be called a tack on Titan! 
        Titan Quest allows children to immerse themselves in Saturn’s infamous moon, Titan, where they will be able 
        to challenge themselves with real-life problems regarding survival on the moon through fun interactive mini-games!<br/><br/>
        The game begins with a small astronaut that the user is able to name arriving on Titan and preparing for their 
        space expedition. The astronaut's mission is to create an environment that would be habitable for them and gain as much 
        information about the moon as possible to bring back to Earth.<br/><br/>
        The game introduces a role-playing single-player format with an open-world map for the user to explore and collect 
        resources and information to aid in their survival. <br/><br/>
        The purpose of our video game is to educate people on certain facts about Titan, how life would be different if we 
        didn't live on Earth, the struggles of space exploration, and facts about the solar system all through interactive 
        educational mini-games. A few important questions that we want to answer through our game are: <br/><br/>

      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "proj_obj");
