import { thank } from "../assets";

const Confirm = () => {
     return (
          <>
               <div className="h-full flex flex-col justify-between">
                    {/* <div className="bg-Magnolia w-full h-screen flex justify-center">
                         <div className="absolute top-[110px] flex flex-col bg-White w-[90%] mx-auto rounded-xl p-6 items-center py-14"> */}
                    <div className="bg-Magnolia lg:bg-White w-full h-[400px] flex justify-center lg:items-center">
                         <div className="absolute top-[110px] lg:relative lg:top-0 flex flex-col bg-White lg:items-center w-[90%] lg:w-[500px] mx-auto rounded-xl p-8">
                              <img src={thank} alt="thanks icons" loading="lazy" className="w-20 h-20" />
                              <h1 className="mt-8 text-3xl text-Marine-blue font-Ubuntu font-bold">Thank you!</h1>
                              <p className="text-center text-sm mt-5 text-Cool-gray">Thanks for confirming your subscription! We hope you have
                                   fun using our platform. If you ever need support, please feel
                                   free to email us at support@loremgaming.com.</p>
                         </div>
                    </div>
               </div>
          </>
     )
}

export default Confirm;