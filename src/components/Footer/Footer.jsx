const Footer = () => {
  return (
    <footer className="bg-black flex flex-col md:flex-row gap-[60px] items-center justify-center md:justify-between py-[67px] md:px-[75px] md:py-[39px]">
      <a
        href="/"
        className="font-anglecia text-[32px] md:text-[24px] text-white"
      >
        WatchGenius
      </a>

      <address className="text-white text-[20px] items-center flex-col md:flex-row justify-center flex">
        <p className="md:mr-[60px] font-inter not-italic md:mb-[0px] mb-[60px]">
          Політика конфедеційності
        </p>

        <a className="not-italic font-inter" href="tel:+380956156714">
          +380 95 615 6714
        </a>
      </address>

      <a className="flex text-white text-[20px] items-center">
        <p className="mr-[10px] font-inter">Support the project</p>
        <img
          className="w-[39px] h-[39x]"
          src="/ci_coffe-to-go.svg"
          alt="coffe"
        ></img>
      </a>
    </footer>
  );
};

export default Footer;
