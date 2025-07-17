import { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import { dataYear, data3m, pieData, COLORS } from "../../data/dataGraphic";

const GraphicPrice = () => {
  const [period, setPeriod] = useState("year");
  const currentData = period === "year" ? dataYear : data3m;

  return (
    <section className="flex flex-col px-5 md:px-[70px] mb-[60px] md:mb-[50px]">
      <h2 className="font-anglecia text-center md:text-left text-[32px] md:text-[40px] mb-[25px] md:mb-[30px]">
        Графік цін
      </h2>

      <div className="flex flex-col items-center md:flex-row md:relative md:mb-[14px]">
        <div className="md:absolute md:top-4 md:left-[28px] flex justify-center gap-[15px] mb-[25px] md:mb-0">
          <button
            onClick={() => setPeriod("year")}
            className={`w-[94px] h-[36px] text-[20px] rounded-[5px] border ${
              period === "year"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black"
            }`}
          >
            1 рік
          </button>
          <button
            onClick={() => setPeriod("3m")}
            className={`w-[94px] h-[36px] text-[20px] rounded-[5px] border ${
              period === "3m"
                ? "bg-black text-white border-black"
                : "bg-white text-black border-black"
            }`}
          >
            3 м
          </button>
        </div>

        <div className="w-[352px] md:mr-[104px] md:w-[837px] md:h-[398px] h-[368px] mb-[50px] md:mb-0 border-4 border-black rounded-md p-1 md:p-3 md:pt-16">
          <ResponsiveContainer>
            <AreaChart data={currentData}>
              <defs>
                <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#000" stopOpacity={0.4} />
                  <stop offset="95%" stopColor="#000" stopOpacity={0.1} />
                </linearGradient>
              </defs>
              <XAxis dataKey="date" hide />
              <YAxis
                domain={[0, 4000]}
                ticks={[1000, 2000, 3000, 4000]}
                tick={{ fontSize: 16 }}
                width={50}
              />
              <Tooltip
                formatter={(val) => [`${val} грн`, "Ціна"]}
                labelFormatter={(label) => `Дата: ${label}`}
              />
              <Area
                type="linear"
                dataKey="value"
                stroke="#000000"
                fillOpacity={1}
                fill="url(#colorValue)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div>
          <h2 className="font-anglecia text-center text-[32px] md:text-[24px] md:mb-0 mb-[23px]">
            Продуктивність
            <br className="block md:hidden" /> моделі: 80%
          </h2>

          <div className="w-[352px] h-[352px]">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={pieData}
                  cx="50%"
                  cy="50%"
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  outerRadius={160}
                  stroke="#000000"
                  strokeWidth={1}
                  labelLine={false}
                  label={({
                    cx,
                    cy,
                    midAngle,
                    innerRadius,
                    outerRadius,
                    percent,
                    index,
                  }) => {
                    const RADIAN = Math.PI / 180;
                    const radius =
                      innerRadius + (outerRadius - innerRadius) / 2;
                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                    const y = cy + radius * Math.sin(-midAngle * RADIAN);

                    const textColor = index === 0 ? "#000000" : "#ffffff";

                    return (
                      <text
                        x={x}
                        y={y}
                        fill={textColor}
                        textAnchor="middle"
                        dominantBaseline="central"
                        fontSize={18}
                        fontWeight="bold"
                      >
                        {`${Math.round(percent * 100)}%`}
                      </text>
                    );
                  }}
                >
                  <Cell fill={COLORS[0]} />
                  <Cell fill={COLORS[1]} />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <a
        href="/"
        className="hidden md:flex underline font-inter font-normal text-[20px]"
      >
        Завантажити PDF-гайд
      </a>
    </section>
  );
};

export default GraphicPrice;
