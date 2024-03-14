/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { steps } from '../constants';
import { backgroundImageMd, backgroundImageSm } from "../assets/index";

const Steps = ({ activeStep }) => {
     const navigate = useNavigate();
     const [isEmailValid, setEmailValid] = useState(true);
     const [windowWidth, setWindowWidth] = useState(window.innerWidth);
     useEffect(() => {
          const handleResize = () => {
               setWindowWidth(window.innerWidth);
          };
          window.addEventListener('resize', handleResize);
          return () => {
               window.removeEventListener('resize', handleResize);
          };
     }, []);
     const validateInputs = () => {
          const name = document.getElementById('name').value.trim();
          return name !== '' && isEmailValid;
     };
     const backgroundImageUrl = windowWidth >= 1024 ? backgroundImageMd : backgroundImageSm;

     return (
          <div className=" relative flex justify-center bg-cover rounded-none lg:rounded-xl h-full">
               <img src={backgroundImageUrl} alt="background" className="relative h-full w-full lg:w-fit max-w-none" />
               <div className="absolute flex flex-row lg:flex-col h-full w-full justify-center lg:justify-start gap-8 pl-0 lg:pl-5 pt-10">
                    {steps.map(({ id, number, step, info }, index) => (
                         <div key={id} className={`flex flex-row h-fit gap-4 ${index === activeStep ? 'active' : ''}`}>
                              <h1 className={`grid place-items-center w-10 h-10 rounded-full text-White border-2 border-Pastel-blue ${index === activeStep ? 'bg-Light-blue text-[#000]' : ''}`}>{number}</h1>
                              <div className="flex-col justify-center hidden lg:block">
                                   <p className="mb-0 uppercase text-xs font-extralight text-Light-gray">{step}</p>
                                   <h4 className="font-Ubuntu font-medium uppercase text-White">{info}</h4>
                              </div>
                         </div>
                    ))}
               </div>

          </div>
     );
};

Steps.propTypes = {
     activeStep: PropTypes.number.isRequired,
};

export default Steps;
