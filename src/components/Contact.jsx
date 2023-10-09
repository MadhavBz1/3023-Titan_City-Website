import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Shaiyaan Ishtiaq",
          from_email: form.email,
          to_email: "shaiyaan_ishtiaq@outlook.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);

          alert("Ahh, something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      className={`xl:mt-12 gap-10 overflow-hidden`}
    >
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <motion.div
        variants={slideIn("left", "tween", 0.5, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'
        style={{ float: 'right', marginLeft: '1em', marginRight: "-6.1em"}}
      >
      
      </motion.div>
        <p className={styles.sectionSubText}>Future of the Game</p>
        <h3 className={styles.sectionHeadText}>Team Information</h3>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><b>Future of Stuck on Titan</b></span>
            <p>
            1. We want to create more interactive as well as educational mini-games to ensure users do not get bored of the game too quickly. Some of these mini-games can help answer problems we had not such as medical concerns regarding radiation and weather.<br></br>
            <br></br>2. We want to try and make the game available for online multiplayer features, such as leaderboards for the fastest times in games,and a global chat that can be used by users to talk to others who have a passion for space exploration. This would create more reasons as to why users would want to keep playing as well as create a way for users to learn other facts through other users on the chat.<br></br>
            <br></br>3. Having an actual engaging storyline that keeps users interested throughout the whole video game could also be the next step. This would make users want to learn more about the topics taught in the game because they might come back in the later parts of the storyline.<br></br>
            <br></br>4. We also want to include a machine learning portion to the game, such as a weather predictor for real day-to-day weather on Titan. We could also predict actual star arrangements that Saturn would have when looking through the telescope mini-game, so there is always a new astronomical body to learn about in that mini-game.<br></br>
            <br></br>5. We can also add different planets to where Bob gets stranded. This could create so many different possibilities to learn about astronomical bodies.

            </p>
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'><b>Our Amazing Team</b></span>
            <p>
              Our team was splilt into two sub teams, the Developer Team and the Reasearch Team:<br></br> <br></br>
              <b>Developer Team:</b> <br></br> Alex Eckardt, Shaiyaan Ishtiaq, Marwa Khafagy, Haneef Taher <br></br> <br></br>
              <b>Research Team:</b> <br></br> Marian Farra, Madhav Bezawada <br></br> <br></br>
            </p>
          </label>
         

          
        </form>
        
      </motion.div>


    </div>
  );
};

export default SectionWrapper(Contact, "team_inf");
