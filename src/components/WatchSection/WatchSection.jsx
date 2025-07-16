const WatchSection = () => {
  return (
    <section className="relative flex flex-col justify-between px-5 md:px-[70px] md:py-[14px] mb-[37px] md:mb-[25px]">
      <button type="button" className="flex gap-2 items-center mb-[30px]">
        <img className=" w-[24px] h-[24px] fill-black" src="/fe_arrow-up.svg" />
        <p className="font-inter font-normal text-[#18232d] text-[20px]">
          Назад
        </p>
      </button>

      <div className="flex flex-col md:flex-row md:gap-[15px]">
        <img
          className="w-[352px] rounded-[5px] h-[341px] md:hidden"
          src="/image-mobile.jpg"
          alt="watch"
        />
        <img
          className="hidden rounded-[5px] md:block w-[641px] h-[367px] mb-[20px] md:md-[0px] md:mr-[25px] "
          src="/image.jpg"
          alt="watch"
        />

        <div className=" w-[352px] md:w-[627px]">
          <h2 className="font-anglecia text-[32px] md:text-9 mb-[15px] md:mb-[20px]">
            Rolex Submariner Oyster Perpetual Date 41mm 126610LV-0002
          </h2>

          <ul className="text-[16px] flex flex-col gap-[15px] mb-[30px] md:mb-[64px]">
            <li>Корпус: Нержавіюча сталь Oystersteel (сплав 904L)</li>
            <li>Скло: Сапфірове з циклоп-лінзою над датою</li>
            <li>Категорія: Дайверський годинник</li>
            <li>Діаметр: 41 мм</li>
          </ul>

          <h3 className="text-center font-anglecia text-[32px] mb-[30px] md:text-[40px]">
            19 500 грн
          </h3>

          <button
            className="w-[352px] md:w-[413px] rounded-[5px] text-white font-normal text-[24px] h-[72px] bg-black"
            type="button"
          >
            Купити
          </button>

          <button
            className="absolute md:hidden bottom-[144px] right-0 w-[133px] h-[98px] shadow-[-1px_4px_14px_1px_rgba(255,230,230,0.7)] rounded-[50px_0_0_50px] font-anglecia text-black font-normal text-[20px]"
            type="button"
          >
            AI
            <br /> чат
          </button>
        </div>
      </div>
    </section>
  );
};

export default WatchSection;
