import Icons from "../components/Icons";

function Page_4() {
  return (
    <div className=" w-full h-[60%]  max-sm:h-[50%]">
      <div className="max-sm:mt-14">
        <h1 className="text-4xl font-medium capitalize text-center text-white max-sm:pt-5">
          Socials
        </h1>
      </div>
      <div className=" w-[100%] h-[100%]  flex justify-center mt-2 max-sm:mt-0">
        <div className=" w-[60%] h-[200px] flex gap-10 flex-wrap justify-center items-center max-sm:mt-10 max-sm:w-[100%] max-sm:gap-y-5 max-sm:px-5 max-sm:gap-x-7">
          <Icons
            border={"b"}
            src={"https://www.linkedin.com/in/srikanth-bollu-8b2549253/"}
          >
            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
            <rect width="4" height="12" x="2" y="9"></rect>
            <circle cx="4" cy="4" r="2"></circle>
          </Icons>
          <Icons border={"v"} src={"https://github.com/Srikanth-Bollu"}>
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
            <path d="M9 18c-4.51 2-5-2-7-2"></path>
          </Icons>
          <Icons border={"b"} src={"mailto:srikanthbollu90@gmail"}>
            <rect width="24" height="16" x="0" y="4" rx="2" ry="2" fill="#3498db"></rect>
            <path d="M2,6 L12,12 L22,6" stroke="#fff" stroke-width="2" fill="none"></path>
            <path d="M2,6 L2,18 L22,18 L22,6 L12,12 Z" fill="none" stroke="#fff" stroke-width="2"></path>
          </Icons>
        </div>
      </div>
    </div>
  );
}

export default Page_4;
