import Menu from "./Menu";

function Header() {
  return (
    <div className="header sticky top-0 z-10 flex justify-center">
      <div className="z-[20] w-full h-[5rem] top-0 left-0 bg-white/20  backdrop-blur-lg xl:w-[1440px] ">
        <div className="flex-1 font-bold text-[2rem] py-[1.5rem] mx-4 md:mx-6">
          LENTUS
        </div>
        <Menu />
      </div>
    </div>
  );
}

export default Header;
