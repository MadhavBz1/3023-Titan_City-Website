import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

import { game1 } from "../assets";
import { game2 } from "../assets";
import { game3 } from "../assets";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className='bg-black-200 p-10 rounded-3xl xs:w-[820px] min-h-[400px] w-full'
  >
    <div className='mt-1'>
      <p className='text-white tracking-wider text-[18px]' >{testimonial}</p>
    </div>
    <img 
        src={image} 
        style={{
          float: 'right',
          marginTop: '1.9em',
          marginLeft: '1em',
          marginRight: '0.2em',
          maxWidth: '100%',  // Set the maximum width to ensure scaling
          maxHeight: '400px', // Set the maximum height (adjust as needed)
        }}
        className='rounded-3xl'
    />
  </motion.div>
);


const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");