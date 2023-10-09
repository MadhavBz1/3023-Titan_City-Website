import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import { Link } from 'react-router-dom';


const Hero = ({Hero}) => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#c98f38]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} violet-text-gradient`}>
            HI, WE ARE <br></br>DALLAS COWGIRLS
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            
          </p>
        </div>
        
      </div>

      <ComputersCanvas />


      <div className='absolute xs:bottom-1 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div  className='green rounded-[20px] py-5 px-12 w-[250px] h-[64px] flex justify-evenly items-center flex-col' >
          </div>
        </a>
      </div>

      <Link className='absolute xs:bottom-7 bottom-32 w-full flex justify-center items-center' 
      to="https://gx.games/games/s3zosx/titanquest/" target="_blank" rel="noopener noreferrer">
          <button className={'font-black text-black lg:text-[30px] lg:leading-[19px] '}>       
          PLAY NOW!
        </button>
      </Link>


      {/* <div className='flex flex-col justify-center items-center -mt-12'>
        <p className={`text-secondary text-[13px] mt-4`}>Press to play game</p>
      </div> */}
    </section>
  );
};

export default Hero;
