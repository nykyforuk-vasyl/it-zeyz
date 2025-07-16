const Footer = () => {
  return (
    <footer className="bg-black flex flex-col md:flex-row gap-[60px] items-center justify-center md:justify-between px-[72px] py-[67px] md:px-[75px] md:py-[39px] mt-[60px]">
      <a
        href="/"
        className="font-anglecia font-normal text-[32px] md:text-[24px] text-white"
      >
        WatchGenius
      </a>

      <address className="text-white text-[20px] font-normal items-center flex-col md:flex-row justify-center flex">
        <p className="md:mr-[60px] not-italic md:mb-[0px] mb-[60px]">
          Політика конфедеційності
        </p>
        <a className="" href="tel:+380956156714">
          +380 95 615 6714
        </a>
      </address>

      <a className="flex text-white text-[20px] items-center">
        <p className="mr-[10px]">Support the project</p>
        <img className="w-[39px] h-[39x]" src="/ci_coffe-to-go.svg"></img>
      </a>
    </footer>
  );
};

export default Footer;
