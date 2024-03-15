/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { plan } from "../constants";

const SecondPage = ({ onNextStep, activeStep, setActiveStep, selectedPlan, setSelectedPlan }) => {
     const [selectedItemId, setSelectedItemId] = useState(null);

     const handleToggle = () => {
          setSelectedPlan((prevPlan) => (prevPlan === 'monthly' ? 'yearly' : 'monthly'));
     };

     const handleItemClick = (id) => {
          setSelectedItemId((prevId) => (prevId === id ? null : id));
     };

     const handleNext = () => {
          if (selectedItemId) {
               onNextStep({
                    selectedPlan,
                    selectedItemId,
                    planDetails: [plan.find((item) => item.id === selectedItemId)],
               });
          }
     };

     const handleGoBack = () => {
          setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
     };

     useEffect(() => {
          if (activeStep === 1) {
               setSelectedPlan('monthly');
          }
     }, [activeStep, setSelectedPlan]);

     return (
          <>
               <form noValidate className="h-full flex flex-col justify-between scroll-smooth">
                    <div className="bg-Magnolia lg:bg-White w-full h-[550px] flex justify-center">
                         <div className="absolute top-[110px] lg:relative lg:top-0 flex flex-col bg-White w-[90%] lg:w-[500px] mx-auto rounded-xl p-8">
                              <h1 className="mt10 text-3xl text-Marine-blue font-Ubuntu font-bold">Select your plan</h1>
                              <p className="text-sm text-Cool-gray mt-2">You have the option of monthly or yearly billing.</p>
                              <div className="flex flex-col md:flex-row mt-8 gap-4">
                                   {/* plan and price */}
                                   {plan.map(({ id, icon, plan, perMonth, perYear, bonus }) => {
                                        return (
                                             <div key={id} className={`flex flex-row md:flex-col items-center md:items-start border ${selectedItemId === id ? 'bg-Magnolia border-Purplish-blue' : 'border-Light-gray'} hover:border-Purplish-blue cursor-pointer rounded-lg px-4 py-3 gap-4 lg:gap-12 w-full lg:w-[150px]`} onClick={() => handleItemClick(id)}>
                                                  <img src={icon} alt={plan} loading="lazy" className="w-[40px] h-[40px]" />
                                                  <div className="flex flex-col gap-[3px]">
                                                       <h2 className="text-Marine-blue font-semibold">{plan}</h2>
                                                       <p className="text-Cool-gray font-light text-sm">{selectedPlan === 'monthly' ? perMonth : perYear}</p>
                                                       {selectedPlan === 'yearly' && (<p className="font-light text-xs text-Marine-blue font-Ubuntu">{bonus}</p>)}
                                                  </div>
                                             </div>
                                        );
                                   })}
                              </div>
                              <div className="w-full flex justify-center bg-Magnolia rounded-md py-3 mt-8">
                                   <div className="flex flex-row gap-5">
                                        <p className="text-Marine-blue font-Ubuntu font-medium text-sm">Monthly</p>
                                        <label htmlFor="check" className="bg-Marine-blue cursor-pointer relative w-10 h-[20px] rounded-full">
                                             <input type="checkbox" id="check" className="sr-only peer" onClick={handleToggle} />
                                             <span className="w-[12px] h-[12px] bg-White absolute left-1 top-[4px] rounded-full peer-checked:left-6 transition-all duration-500" id="toggle" ></span>
                                        </label>
                                        <p className="text-Marine-blue font-Ubuntu font-medium text-sm">Yearly</p>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between bg-White py-5 w-[90%] mx-auto lg:w-[430px]">
                         <button type="reset" onClick={handleGoBack} className="text-Cool-gray hover:text-Marine-blue font-medium px-5 py-2 w-fit font-Ubuntu cursor-pointer">Go Back </button>
                         <button type="submit" onClick={handleNext} disabled={!selectedItemId} className="bg-Marine-blue text-White px-5 py-2 rounded-md w-fit font-Ubuntu cursor-pointer"> Next Step </button>
                    </div>
               </form>
          </>
     );
};

SecondPage.propTypes = {
     onNextStep: PropTypes.func.isRequired,
     activeStep: PropTypes.number.isRequired,
     setActiveStep: PropTypes.func.isRequired,
     selectedPlan: PropTypes.string.isRequired,
     setSelectedPlan: PropTypes.func.isRequired,
};

export default SecondPage;