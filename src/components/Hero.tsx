import Image from "next/image";

export const Hero = () => {
  return (
    <div id="small container" className="flex flex-col items-center justify-center gap-5 mt-24">
      <div id="title section" className="flex flex-col items-center justify-center gap-5">
        <div id="pill" className="flex justify-center items-center ">
          <p className="border-solid border border-[rgba(255,255,255,0.3)] px-5 py-2 rounded-full text-primary">We just raised $20M in Series B. Learn more</p>
        </div>
        <div id="content" className="flex flex-col items-center justify-center gap-5">
          <h1 className="text-6xl font-medium max-w-2xl text-center text-white">
            Modern analytics <br /> for the modern world
          </h1>
          <div id="paragraph">
            <p className="text-sm max-w-[500px] text-center text-primary opacity-65">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Non exercitationem quod nostrum blanditiis quo maxime.
            </p>
          </div>
        </div>
        <div id="actions" className="flex items-center justify-center gap-5">
          <button className="bg-primary text-black rounded-full px-5 py-2">Download the app</button>
          <button className="border border-solid border-primary text-primary rounded-full px-5 py-2">Talk to an expert</button>
        </div>
      </div>
      <div id="image wrapper">
        <Image src={"/dashboard.png"} alt="dashboard" width={960} height={472} />
      </div>
    </div>
  );
};
