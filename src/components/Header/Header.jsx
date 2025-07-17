const Header = () => {
  return (
    <header className="bg-black flex justify-between items-center p-5 md:px-[70px] md:py-[14px] mb-[30px] md:mb-[45px]">
      <a
        href="/"
        className="font-anglecia text-[20px] md:text-[24px] text-white"
      >
        WatchGenius
      </a>

      <nav className="font-inter text-[20px] text-white md:flex hidden">
        <ul className="flex gap-[50px]">
          <li>
            <a className="">Про нас</a>
          </li>
          <li>
            <a className="">Каталог</a>
          </li>
          <li>
            <a className="">Контакти</a>
          </li>
        </ul>
      </nav>

      <button type="button" className="flex items-center ">
        <img
          className="hidden w-[31px] h-[31x] md:flex"
          src="/iconoir_language.svg"
          alt="language"
        />
        <img
          className="md:hidden w-[32px] h-[14x]"
          src="/Group 2.svg"
          alt="menu"
        />
      </button>
    </header>
  );
};

export default Header;
