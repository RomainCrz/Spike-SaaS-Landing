import Image from "next/image";

export const NavBar = () => {
  return (
    <div className="w-full flex justify-center items-center pt-10">
      <div className="flex justify-between items-center px-10 py-5 bg-red-300 w-5/6 bg-[rgba(11,8,28,0.5)] backdrop-blur-xl rounded-[25px]">
        <div className="flex items-center w-[140px] gap-2">
          <Image src="/Valtflow-icon.png" alt="logo" width={25} height={25} />
          <div className="flex font-bold size-6 text-primary">
            <p>Vaultflow</p>
          </div>
        </div>
        <div className="flex items-center justify-around w-[336px] text-primary">
          <p>Features</p>
          <p>Pricing</p>
          <p>About us</p>
        </div>
        <div>
          <button className="bg-primary text-black px-4 py-2 w-[190px] h-[40px] rounded-[50px]">Download the app</button>
        </div>
      </div>
    </div>
  );
};
