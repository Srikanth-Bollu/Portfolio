import Card from "../components/Card";

function Page_3() {
  return (
    <div className=" w-full h-full  text-white  max-sm:h-[170%]">
      <div className="max-sm:mt-20">
        <h1 className="text-4xl font-medium capitalize text-center mt-5 ">
          Projects
        </h1>
      </div>
      <div className=" flex w-full h-full gap-6 mt-28 flex-wrap justify-center  px-8 max-sm:mt-10 max-sm:gap-0 max-sm:px-4">
        <Card
          name={"job portal aplication"}
          imge={
            "https://thumbs.dreamstime.com/z/job-portal-lettering-logo-design-template-concept-professional-employee-recruitment-agency-logo-vector-job-portal-lettering-220648781.jpg"
          }
          src={"https://github.com/Srikanth-Bollu/Job-Portal-Application-Backend1"}
        />
        <Card
          name={"paytm_clone"}
          imge={
            "https://pwebassets.paytm.com/commonwebassets/ir/images/press-kit/brand.png"
          }
          src={"https://paytm-frontend-steel.vercel.app/"}
        />
        <Card
          name={"Vide Steganography"}
          imge={
            "https://www.sdsolutionsllc.com/wp-content/uploads/2015/12/Steganography.png"
          }
          src={"https://github.com/Srikanth-Bollu/Video-Steganography"}
        />
        <Card
          name={"Password Generator"}
          imge={
            "https://play-lh.googleusercontent.com/1_Yqavw9mMbBwp42yl88chb2pXYa2IM-rzV34yOkP6onPlMTcEJl2Zp-_HNYyxV14A-w"
          }
          src={"https://github.com/Srikanth-Bollu/Password-Generator"}
        />
      </div>
    </div>
  );
}

export default Page_3;
