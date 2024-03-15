/* eslint-disable no-unused-vars */
import { useState } from "react";
import PropTypes from 'prop-types';
import { planType } from "../constants";

const ThirdPage = ({ onNextStep, activeStep, setActiveStep, selectedPlan }) => {
     const [selectedItemIds, setSelectedItemIds] = useState([]);

     const handleItemClick = (id) => {
          setSelectedItemIds((prevIds) => {
               if (prevIds.includes(id)) {
                    return prevIds.filter((prevId) => prevId !== id);
               } else {
                    return [...prevIds, id];
               }
          });
     };

     const handleNext = () => {
          if (selectedItemIds.length > 0) {
               onNextStep({
                    selectedPlan,
                    selectedItemIds,
                    itemsDetails: planType.filter((item) => selectedItemIds.includes(item.id)),
               });
          }
     };


     const handleGoBack = () => {
          setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
     };

     return (
          <>
               <form noValidate className="h-full flex flex-col justify-between">
                    <div className="bg-Magnolia lg:bg-White w-full h-[400px] flex justify-center">
                         <div className="absolute top-[110px] lg:relative lg:top-0 flex flex-col bg-White w-[90%] lg:w-[500px] mx-auto rounded-xl p-8">
                              <h1 className="mt10 text-3xl text-Marine-blue font-Ubuntu font-bold">Pick add-ons</h1>
                              <p className="text-sm text-Cool-gray mt-2">Add-ons help enhance your gaming experience.</p>
                              <div className="flex flex-col mt-8 gap-4">
                                   {/* planType */}
                                   {planType.map(({ id, planTypeName, planTypeText, planPerMonth, planPerYear }) => {
                                        const isChecked = selectedItemIds.includes(id);
                                        return (
                                             <div key={id} className={`flex flex-row justify-between items-center border ${isChecked ? 'bg-Magnolia border-Purplish-blue' : 'border-Light-gray'} hover:border-Purplish-blue cursor-pointer rounded-lg px-3 py-4 gap20`} onClick={() => handleItemClick(id)}>
                                                  <div className="flex flex-row gap-3 items-center">
                                                       <input type="checkbox" name="checkbox" id={`checkbox-${id}`} className="w5 rounded-full cursor-pointer border border-[yellow]" checked={isChecked} onChange={() => handleItemClick(id)} onClick={() => handleItemClick(id)} />
                                                       <div className="flex flex-col">
                                                            <h2 className="text-Marine-blue font-semibold">{planTypeName}</h2>
                                                            <p className="text-Cool-gray font-light text-xs">{planTypeText}</p>
                                                       </div>
                                                  </div>
                                                  <p className="text-sm font-normal text-Purplish-blue">{selectedPlan === 'monthly' ? planPerMonth : planPerYear}</p>
                                             </div>
                                        );
                                   })}
                              </div>
                         </div>
                    </div>

                    <div className="flex justify-between bg-White py-5 w-[90%] mx-auto lg:w-[430px]">
                         <button type="reset" onClick={handleGoBack} className="text-Cool-gray hover:text-Marine-blue font-medium px-5 py-2 w-fit font-Ubuntu cursor-pointer">Go Back </button>
                         <button type="button" onClick={handleNext} disabled={!selectedItemIds} className="bg-Marine-blue text-White px-5 py-2 rounded-md w-fit font-Ubuntu cursor-pointer"> Next Step </button>
                    </div>
               </form>
          </>
     );
};

ThirdPage.propTypes = {
     onNextStep: PropTypes.func.isRequired,
     activeStep: PropTypes.number.isRequired,
     setActiveStep: PropTypes.func.isRequired,
     selectedPlan: PropTypes.string.isRequired,
};

export default ThirdPage;