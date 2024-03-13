/* eslint-disable no-unused-vars */
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { steps } from '../constants';
import { backgroundImageMd, backgroundImageSm } from "../assets/index";

const Steps = ({ activeStep }) => {
     const navigate = useNavigate();
     const [isEmailValid, setEmailValid] = useState(true);

     const validateInputs = () => {
          const name = document.getElementById('name').value.trim();
          return name !== '' && isEmailValid;
     };

     const getBackgroundImage = () => {
          if (window.innerWidth >= 1024) {
               return `url(${backgroundImageMd})`;
          } else {
               return `url(${backgroundImageSm})`;
          }
     };

     return (
          <div className="relative flex h-[172px] lg:h-[500px] w-full lg:w-[300px] justify-center bg-cover rounded-none lg:rounded-xl" style={{ backgroundImage: getBackgroundImage() }}>
               <div className="flex flex-row lg:flex-col h-fit lg:h-full gap-8 mt-10">
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
