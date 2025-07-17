const AiChat = () => {
  return (
    <section className="relative w-full flex flex-col items-center justify-center h-[404px] md:h-[319px] mb-[60px]">
      <div
        className="md:hidden absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
      image-set(
        url('/image-agent-mobile.jpg') 1x,
        url('/image-agent-mobile-2x.jpg') 2x
      )
    `,
        }}
      ></div>

      <div
        className="hidden md:block absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `
      image-set(
        url('/image-agent.jpg') 1x,
        url('/image-agent-x2.jpg') 2x
      )
    `,
        }}
      ></div>

      <div className="absolute inset-0  bg-black/70 z-0"></div>

      <h2 className="font-anglecia relative z-10 font-normal text-[32px] md:text-[40px] text-white md:text-9 mb-[5px]">
        AI агент
      </h2>
      <p className="font-inter relative text-center z-10 font-normal text-white text-[16px] md:text-[20px] mb-[60px]">
        Швидко, точно та без нав’язливих порад.
        <br className="block md:hidden" /> Просто запитайте.
      </p>

      <button
        className=" font-inter relative z-10 rounded-[5px] bg-white font-normal text-black text-[20px] w-[348px] md:mb-[10px] h-[72px] md:w-[440px]"
        type="button"
      >
        Перейти в чат
      </button>
    </section>
  );
};

export default AiChat;
