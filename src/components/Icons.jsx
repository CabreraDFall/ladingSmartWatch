import { FaAward } from "react-icons/fa";
import { BsBoxSeam } from "react-icons/bs";
import { TbTruckReturn } from "react-icons/tb";

function Icons() {
  const iconLists = [
    {
      id: 1,
      icon: <FaAward size={"2rem"} color="#0ea5e9" />,
      num: "220",
      title: "Awards",
      desc: "Lorem Ipsum text non generic",
      color: "bg-sky-500/20",
    },
    {
      id: 2,
      icon: <BsBoxSeam size={"2rem"} color="#fb2f29" />,
      num: "35K",
      title: "Worldwide Shipping",
      desc: "Lorem Ipsum text non generic",
      color: "bg-[#fb2f29]/20",
    },
    {
      id: 3,
      icon: <TbTruckReturn size={"2.5rem"} color="#4c9f00" />,
      num: "35K",
      title: "Free Returns",
      desc: "Lorem Ipsum text non generic",
      color: "bg-[#4c9f00]/20",
    },
  ];

  return (
    <div
      className="icons flex mx-8 gap-2 flex-col md:flex-row
    lg:mx-16 xl:mx-24"
    >
      {iconLists.map((iconList, index) => (
        <div
          key={index}
          className="icon md:flex-1 flex flex-row gap-5 justify-start px-8 py-3 md:justify-center   items-center  my-5 shadow-lg
          md:gap-3 
          
          "
        >
          <div
            key={index}
            className={`iconSvg w-[3rem] h-[3rem] flex justify-center items-center ${iconList.color}`}
          >
            {iconList.icon}
          </div>

          <div className="text ">
            <div className="flex gap-2 items-center">
              <span className="font-bold text-sm">{iconList.num}+</span>
              <span className="font-semibold text-sm">{iconList.title}</span>
            </div>
            <span className="text-[0.75rem] w-5">{iconList.desc}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Icons;
