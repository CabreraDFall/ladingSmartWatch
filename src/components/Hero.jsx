import Star from "../assets/Star";

function Hero() {
  return (
    <div
      className="hero flex flex-col md:flex-row-reverse pt-[3.5rem] px-10 
    sm:pb-[2.5rem] sm:justify-center sm:items-center sm:pt-[1.5rem] 
    md:pt-[1.5rem] md:gap-6 md:pt-20 md:my-5
   "
    >
      <div
        className=" imagen flex justify-center items-center relative before:content-[''] 
                    before:border-4 before:absolute before:border-sky-500 before:w-[65%] before:h-[65%] before:top-[-2rem] before:left-[-1rem] before:z-[2] before:rounded-[1rem]
                    after:absolute after:bg-[#dc6640] after:w-[65%] after:h-[65%] after:bottom-[-2rem] after:right-[-1rem] after:z-[2] after:rounded-[1rem]
                    sm:h-[80%] 
                    md:w-[40%]
                    lg:before:w-[45%] lg:before:left-[1rem] lg:after:right-[1rem] lg:after:w-[45%]
                    xl:before:w-[35%] xl:after:w-[35%] xl:before:left-[6rem] xl:after:right-[6rem]
                    
                    "
      >
        <img
          src={require("../img/apple_watch_hero.png")}
          alt=""
          srcSet=""
          className="bg-[#ffd76d] w-[100%]  rounded-[1rem] h-[25rem] object-cover z-[4]
                    xl:w-1/2"
        />
        <div
          className="awards flex justify-center gap-3 items-center absolute z-[5] bottom-[-1.5rem] left-[-1.5rem] bg-white rounded-[0.5rem] px-4 py-3 text-[0.75rem] font-semibold drop-shadow-lg
        xl:left-[4rem]
        
        "
        >
          <div className="icon flex justify-center items-center">
            <img
              src={require("../img/reward.png")}
              alt=""
              srcSet=""
              className="flex "
            />
          </div>
          <div className="text ">
            <span>20+ Win</span> <br />
            <span>Top Awards</span>
          </div>
        </div>
        <div
          className="awards flex justify-center gap-4 items-center absolute z-[5] top-[-1.5rem] right-0 bg-white rounded-[0.5rem] px-6 py-3 text-[0.75rem] font-semibold drop-shadow-lg
        xl:right-[3rem]
        
        "
        >
          <div className="icon flex justify-center items-center">
            <img
              src={require("../img/girl.jpg")}
              alt=""
              srcSet=""
              className="w-[2.5rem] h-[2.5rem] object-cover rounded-[1.5rem]"
            />
          </div>
          <div className="text">
            <span>Maria Bose</span> <br />
            <span>Top Awards</span>
            <Star />
          </div>
        </div>
      </div>

      <div className=" md:flex-1 pt-[3rem] m-4 sm:pt-[0.1rem] md:m-6">
        <h2
          className="text-[2rem] text-zinc-800 font-semibold pb-4
        sm:text-[10px]       
        md:text-[2rem]
        xl:text-[4rem]"
        >
          <span className="font-bold">The Perfect moment</span> Between past and
          Future
        </h2>
        <p className="pb-[2rem] text-justify">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          delectus pariatur eos asperiores. Odit, ullam. Delectus pariatur eos
          asperiores. Odit, ullam Lorem ipsum dolor sit.
        </p>
        <div className="buttons flex gap-5 pb-[0.5rem] justify-center md:justify-start">
          <button
            className="bg-[#fb2f29]    px-[0.75rem] py-2 text-white font-semibold text-sm
            md:px-[1rem] md:py-3"
            href="/#"
          >
            Order Now
          </button>
          <button
            className="border-2 px-[0.5rem] py-2 border-black  font-semibold text-sm
            md:px-[1rem] md:py-3
            "
            href="/#"
          >
            Explore more
          </button>
        </div>

        <span
          className="text-[0.85rem]  text-zinc-800 font-semibold  flex justify-center  flex-col items-center pt-2
          sm:flex-row        
          md:justify-start md:gap-1"
        >
          Already a member of our company?
          {/* <a href="/#" className="text-[#fb2f29] font-semibold text-[0.85rem] ">
            Sign in
          </a> */}
        </span>
      </div>
    </div>
  );
}

export default Hero;
