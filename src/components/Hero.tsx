import Image from 'next/image';

export default function Hero() {
  return (
    <section className="">
      <div className="bg-hero-pattern w-full h-[587px] bg-center">
        <div className="flex flex-col gap-12 min-h-96 items-center justify-center pt-24 max-container">
          <div className="flex flex-col items-center justify-center gap-4">
            <h1 className="text-white-50 font-extrabold text-[47px] leading-[57px]">
              Арабска приказка в Йордания
            </h1>
            <p className="text-white text-xl leading-normal tracking-wider px-10 py-2 border-white border-2">
              11-15 Март
            </p>
          </div>
          <div className="text-white-100 flex flex-col">
            <p className="flex gap-12 items-baseline text-[58px] leading-tighter">
              <span>11</span>
              <span>|</span>
              <span>14</span>
              <span>|</span>
              <span>55</span>
            </p>
            <p className="flex  justify-between items-center">
              <span>дни</span>
              <span>часа</span>
              <span>минути</span>
            </p>
          </div>
          <div className="flex flex-col gap-4 items-center">
            <button className="text-white font-bold bg-red-600 px-10 py-5 rounded-full">
              Резервирайте сега
            </button>
            <p className="text-white-200 text-sm leading-tight">
              от 1 149,00лв.
            </p>
          </div>
          <div className="flex flex-1 gap-2 justify-center">
            <div className=" flex flex-col justify-center items-center bg-red-600 h-[80px] w-[181px] gap-2">
              <Image src="./bed.svg" alt="bed" width={26} height={26} />
              <p className="text-xs text-white-200 px-18">8 нощувки</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 h-[80px] w-[181px] gap-2">
              <Image src="./plane.svg" alt="bed" width={26} height={26} />
              <p className="text-xs text-white-200">Самолет</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 h-[80px] w-[181px] gap-2">
              <Image src="./location.svg" alt="bed" width={26} height={26} />
              <p className="text-xs text-white-200">Австрия</p>
            </div>
            <div className="flex flex-col justify-center items-center bg-red-600 h-[80px] w-[181px] gap-2">
              <Image src="./calendar.svg" alt="bed" width={26} height={26} />
              <p className="text-xs text-white-200">11 - 15 Март</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
