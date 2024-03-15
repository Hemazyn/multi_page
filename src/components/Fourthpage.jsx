/* eslint-disable react/prop-types */
const FourthPage = ({ setActiveStep, onConfirmClick, secondPageData, thirdPageData }) => {
     const handleGoBack = () => {
          setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
     };

     const handleConfirm = () => {
          onConfirmClick();
     };

     const calculateTotalPrice = () => {
          const planDetailsTotal = secondPageData.planDetails.reduce((acc, item) => {
               const perYearValue = parseFloat(item.perYear.match(/\d+/));
               return acc + (secondPageData.selectedPlan === 'monthly' ? parseFloat(item.perMonth.slice(1)) : perYearValue);
          }, 0);

          const itemsDetailsTotal = thirdPageData.itemsDetails.reduce((acc, item) => {
               return acc + (thirdPageData.selectedPlan === 'monthly' ? parseFloat(item.planPerMonth.slice(2, -3)) : parseFloat(item.planPerYear.slice(2, -3)));
          }, 0);

          return planDetailsTotal + itemsDetailsTotal;
     };
     const getUnit = () => {
          return secondPageData.selectedPlan === 'monthly' ? '/mo' : '/yr';
     };
     return (
          <>
               <form noValidate className="h-full flex flex-col justify-between">
                    <div className="bg-Magnolia lg:bg-White w-full h-[400px] flex justify-center">
                         <div className="absolute top-[110px] lg:relative lg:top-0 flex flex-col bg-White w-[90%] lg:w-[500px] mx-auto rounded-xl p-8">
                              <h1 className="mt10 text-3xl text-Marine-blue font-Ubuntu font-bold">Finishing up</h1>
                              <p className="text-sm text-Cool-gray mt-2">Double-check everything looks OK before confirming.</p>
                              {/* Display selectedData details here */}
                              <div className="flex flex-col mt-8 rounded-[20px]">
                                   <div className="flex flex-col p-4 bg-Magnolia w-full gap-5 rounded-xl">
                                        {/* Plan Details*/}
                                        {secondPageData.planDetails.map((item, index) => (
                                             <div key={index} className="flex flex-row justify-between items-center">
                                                  <div className="flex flex-col">
                                                       <h4 className="text-Marine-blue font-medium font-Ubuntu">{item.plan} <span className="font-Ubuntu capitalize">({secondPageData.selectedPlan})</span> </h4>
                                                       <p className="text-Cool-gray underline decoration-2 text-sm">Change</p>
                                                  </div>
                                                  <p className="text-Marine-blue font-medium">{secondPageData.selectedPlan === 'monthly' ? item.perMonth : item.perYear}</p>
                                             </div>
                                        ))}
                                        <hr className="text-Light-gray" />
                                        <div className="flex flex-col gap-2">
                                             {/* Items Details */}
                                             {thirdPageData.itemsDetails.map((item, index) => (
                                                  <div key={index} className="flex flex-col">
                                                       <div className="flex flex-row justify-between items-center">
                                                            <p className="text-Cool-gray text-sm type">{item.planTypeName}</p>
                                                            <span className="font-medium text-Marine-blue text-sm">{thirdPageData.selectedPlan === 'monthly' ? item.planPerMonth : item.planPerYear}</span>
                                                       </div>
                                                  </div>
                                             ))}
                                        </div>
                                   </div>
                                   <div className="flex flex-row p-4 justify-between items-center">
                                        <p className="text-Cool-gray text-sm font-normal">Total ({secondPageData.selectedPlan === 'monthly' ? 'per month' : 'per year'})</p>
                                        <span className="text-Purplish-blue text-lg font-semibold">{`+${calculateTotalPrice()}${getUnit()}`}</span>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div className="flex justify-between bg-White py-5 w-[90%] mx-auto lg:w-[430px]">
                         <button type="button" onClick={handleGoBack} className="text-Cool-gray hover:text-Marine-blue font-medium px-5 py-2 w-fit font-Ubuntu cursor-pointer">Go Back</button>
                         <button type="button" onClick={handleConfirm} className="bg-Purplish-blue text-White px-5 py-2 rounded-md w-fit font-Ubuntu cursor-pointer"> Confirm</button>
                    </div>
               </form>
          </>
     );
};

export default FourthPage;