/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import { Confirm, FirstPage, FourthPage, SecondPage, Steps, ThirdPage } from './components';

function App() {
  const [activeStep, setActiveStep] = useState(0);
  const [selectedPlan, setSelectedPlan] = useState('monthly');
  const [showConfirm, setShowConfirm] = useState(false);
  const [secondPageData, setSecondPageData] = useState(null);
  const [thirdPageData, setThirdPageData] = useState(null);

  const handleNextStep = (data) => {
    if (activeStep === 1) {
      setSecondPageData(data);
    } else if (activeStep === 2) {
      setThirdPageData(data);
    }
    setActiveStep((prevStep) => prevStep + 1);
  };

  const handleConfirmClick = () => {
    const mergedData = {
      selectedPlan,
      secondPageData,
      thirdPageData,
    };

    console.log('Confirmed:', mergedData);
    setShowConfirm(true);
  };

  const handleBackToForm = () => {
    setShowConfirm(false);
    setActiveStep(3);
  };

  return (
    <>
      <div className="h-full lg:h-screen w-full flex justify-center items-center bg-none lg:bg-Magnolia scroll-smooth">
        <div className="w-full h-full lg:h-[570px] lg:w-[900px] flex flex-col lg:flex-row p-0 lg:p-4 rounded-none lg:rounded-[20px] bg-White">
          <Steps activeStep={activeStep} />
          <div className="flex flex-col h-full w-full p-0">
            {activeStep === 0 && <FirstPage onNextStep={handleNextStep} activeStep={activeStep} />}
            {activeStep === 1 && (
              <SecondPage onNextStep={handleNextStep} activeStep={activeStep} setActiveStep={setActiveStep} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
            )}
            {activeStep === 2 && (
              <ThirdPage onNextStep={handleNextStep} activeStep={activeStep} setActiveStep={setActiveStep} selectedPlan={selectedPlan} setSelectedPlan={setSelectedPlan} />
            )}
            {activeStep === 3 && !showConfirm && (
              <FourthPage onConfirmClick={handleConfirmClick} setActiveStep={setActiveStep} secondPageData={secondPageData} thirdPageData={thirdPageData} />
            )}
            {showConfirm && <Confirm onBackToForm={handleBackToForm} />}
          </div>
        </div>
      </div>
      <hr className="text-Cool-gray mb-1" />
      {/* Attribution */}
      <div className="attribution text-[11px] text-center flex justify-center"> Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noopener noreferrer" className="text-blueC ml-1">Frontend Mentor </a>. Coded by {' '}
        <a href="https://devemma.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blueC ml-1">Emmanuel Tofunmi </a>.
      </div >
    </>
  );
}

export default App;
