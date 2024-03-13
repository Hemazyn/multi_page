/* eslint-disable no-unused-vars */
import { useState } from 'react';
import PropTypes from 'prop-types';
import { parsePhoneNumberFromString } from 'libphonenumber-js';

const FirstPage = ({ onNextStep, activeStep }) => {
     const [number, setNumber] = useState('');
     const [isNumberValid, setNumberValid] = useState(true);
     const [email, setEmail] = useState('');
     const [isEmailValid, setEmailValid] = useState(true);

     const validateNumber = (inputNumber) => {
          const phoneNumber = parsePhoneNumberFromString(inputNumber);
          setNumberValid(phoneNumber && phoneNumber.isValid());
     };

     const validateEmail = () => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          setEmailValid(emailRegex.test(email));
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          const trimmedNumber = number.trim();
          const trimmedEmail = email.trim();
          validateNumber(trimmedNumber);
          validateEmail();

          if (!trimmedNumber || !isNumberValid || !isEmailValid) {
               return;
          }
          onNextStep();
     };


     return (
          <>
               <form onSubmit={handleSubmit} noValidate className="h-full flex flex-col justify-between">
                    <div className="bg-Magnolia lg:bg-White w-full h-[400px] flex justify-center">
                         <div className="absolute top-[110px] lg:relative lg:top-0 flex flex-col bg-White w-[90%] lg:w-[500px] mx-auto rounded-xl p-8">
                              <h1 className="mt10 text-3xl text-Marine-blue font-Ubuntu font-bold">Personal Info</h1>
                              <p className="text-sm text-Cool-gray mt-3"> Please provide your name, email address, and phone number.</p>
                              <div className="flex flex-col mt-7 mt10 gap-4">
                                   <div className="flex flex-col gap-1">
                                        <label htmlFor="name" className="font-normal text-Marine-blue">Name</label>
                                        <input type="text" name="name" id="name" placeholder="e.g. Stephen King" required className="border border-Light-gray rounded-lg p-3 text-sm" />
                                   </div>
                                   <label htmlFor="email" className="font-normal text-sm text-Marine-blue mt3">Email address
                                        <span className={`float-end text-Strawberry-red font-medium text-xs ${isEmailValid ? 'hidden' : 'block'}`}>This field is required</span>
                                        <input type="email" name="email" id="email" placeholder="e.g. stephenking@lorem.com"
                                             className={`block border ${isNumberValid ? 'border-Light-gray' : 'border-Strawberry-red'} p-3 w-full mt-1 rounded-md font-light cursor-pointer outline-Purplish-blue ${!isNumberValid ? 'bg-White placeholder:text-Marine-blue' : ''}`} value={email} onChange={(e) => setEmail(e.target.value)} />
                                   </label>
                                   <label htmlFor="tel" className="font-normal text-sm text-Marine-blue">Phone Number
                                        <span className={`float-end text-Strawberry-red font-medium text-xs ${isNumberValid ? 'hidden' : 'block'}`}>This field is required</span>
                                        <input type="tel" name="tel" value={number} id="tel" placeholder="e.g. +1 234 567 890"
                                             className={`block border ${isNumberValid ? 'border-Light-gray' : 'border-Strawberry-red'} p-3 w-full mt-1 rounded-md font-light cursor-pointer outline-Purplish-blue ${!isNumberValid ? 'bg-White placeholder:text-Marine-blue' : ''}`}
                                             onChange={(e) => setNumber(e.target.value)} />
                                   </label>
                              </div>
                         </div>

                    </div>
                    <div className="flex justify-between bg-White py-5 w-[90%] mx-auto lg:w-[430px]">
                         <button className="opacity-0">Next Step</button>
                         <button type="submit" className="bg-Marine-blue text-White px-5 py-2 rounded-md w-fit">Next Step</button>
                    </div>
               </form>
          </>
     );
};

FirstPage.propTypes = {
     onNextStep: PropTypes.func.isRequired,
     activeStep: PropTypes.number.isRequired,
};

export default FirstPage;
