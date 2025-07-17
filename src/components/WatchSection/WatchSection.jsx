const WatchSection = () => {
  return (
    <section className="relative flex items-center md:items-start flex-col px-5 mb-[50px] md:px-[70px] md:mb-[37px]">
      <div className="w-full mb-[30px] md:mb-[25px]">
        <button type="button" className="flex gap-2 items-center">
          <img
            className="w-[24px] h-[24px] fill-black"
            src="/fe_arrow-up.svg"
          />
          <p className="font-inter font-normal text-[#18232d] text-[20px]">
            Назад
          </p>
        </button>
      </div>

      <div className="flex md:flex-wrap xl:flex-nowrap flex-col md:flex-row">
        <img
          className="max-w-[352px] rounded-[5px] mb-[20px] h-[341px] md:hidden"
          src="/image-mobile.jpg"
          srcSet="/image-mobile.jpg 1x, /image-mobile-x2.jpg 2x"
          alt="watch"
        />
        <img
          className="hidden rounded-[5px] md:flex max-w-[632px] h-[367px]  md:mb-0 md:mr-[20px] "
          src="/image.jpg"
          srcSet="/image.jpg 1x, /image-x2.jpg 2x"
          alt="watch"
        />

        <div className="w-[352px] md:mt-[20px] xl:mt-0 md:w-[620px] ">
          <h2 className="font-anglecia text-[32px] leading-none md:text-[36px] mb-[15px] md:mb-[20px]">
            Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002
          </h2>

          <ul className="text-[16px] md:text-[20px] font-inter leading-tight flex flex-col gap-[15px] mb-[30px] md:mb-[58px]">
            <li>Корпус: Нержавіюча сталь Oystersteel (сплав 904L)</li>
            <li>Скло: Сапфірове з циклоп-лінзою над датою</li>
            <li>Категорія: Дайверський годинник</li>
            <li>Діаметр: 41 мм</li>
          </ul>

          <div className="md:flex md:gap-[30px] md:flex-row-reverse">
            <h3 className="text-center md:text-left font-anglecia font-normal text-[32px] mb-[30px] md:mb-0 md:text-[40px]">
              19500 грн
            </h3>

            <button
              className="w-[352px] md:w-[410px] font-inter rounded-[5px] text-white font-normal text-[24px] h-[72px] bg-black"
              type="button"
            >
              Купити
            </button>
          </div>
        </div>

        <button
          className="absolute md:hidden bottom-[144px] right-0 w-[133px] h-[98px] shadow-[-1px_4px_14px_1px_rgba(255,230,230,0.7)] rounded-[50px_0_0_50px] font-anglecia text-black font-normal text-[20px]"
          type="button"
        >
          AI
          <br /> чат
        </button>
      </div>
    </section>
  );
};

export default WatchSection;
