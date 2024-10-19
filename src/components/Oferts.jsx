function Oferts() {
  return (
    <div className="flex flex-col-reverse h-[20rem] bg-[#fcedc6] relative my-[8rem] rounded-lg  items-center lg:items-start md:py-[-5rem]">
      <div className="left flex flex-col md:flex-1 justify-center px-[2rem] items-center md:items-left py-2 ">
        <p className="title text-[1.5rem] md:text-[2.5rem] font-bold">
          Sale Up to 50% offer
        </p>
        <p className="desc font-semibold py-[1.5rem] md:text-[1.2rem]">
          Apple Watch Series 4
        </p>
        <button className="w-[10rem] h-[2.5rem] bg-[#fb2f29]  text-white  cursor-pointer">
          Buy Now
        </button>
      </div>
      <div className=" right md:flex-1 lg:absolute md:bottom-1  md:right-0 md:w-[50%] ">
        <img
          src={require("../img/banner.png")}
          alt=""
          className="md:w-[80%] w-[60%] mx-auto lg:w-[50%]"
        />
      </div>
    </div>
  );
}

export default Oferts;
