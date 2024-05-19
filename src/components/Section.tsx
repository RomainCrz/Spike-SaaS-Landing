import Image from "next/image";
import "./style.css";

export const Section = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-20">
      <div id="section title" className="py-6 flex justify-center items-center flex-col gap-6">
        <div id="title wrapper" className="text-center max-w-96">
          <p className="text-5xl font-medium leading-[1.2]">Features that work for your future.</p>
        </div>
        <p className="text-center text-lg text-primary max-w-[500px]">Check out our amazing features and experience the power of Vaultflow for yourself.</p>
      </div>
      <div id="container" className="flex flex-col gap-20">
        <div id="double cards" className="flex container-shadow gap-6">
          <div className="container-shadow">
            <div id="card 1" className="flex flex-col p-14 max-w-[600px] gap-4 shadow-custom rounded-[20px]">
              <Image src={"/analytics-icon.png"} alt="Analytics Icon" width={50} height={50} />
              <div id="card 1 content" className="flex flex-col gap-[10px]">
                <p className="text-3xl">Analytics Dashboard</p>
                <p className="text-sm text-primary leading-[1.5] text-justify">
                  Our Analytics Dashboard provides a clear and intuitive interface for you to easily analyze your data. From customizable graphs to real-time data updates, our dashboard offers
                  everything you need to gain valuable insights.
                  <div className="pt-4 font-medium text-base underline">
                    <p>View dashboard</p>
                  </div>
                </p>
              </div>
            </div>
          </div>
          <div id="card 2" className="flex flex-col p-14 max-w-[600px] gap-4 shadow-custom rounded-[20px]">
            <Image src={"/token-icon.png"} alt="Analytics Icon" width={50} height={50} />
            <div id="card 1 content" className="flex flex-col gap-[10px]">
              <p className="text-3xl">Digital Credit Tokens</p>
              <p className="text-sm text-primary leading-[1.5] text-justify">
                Reward your customers and incentivize engagement with our innovative digital credit tokens. Our tokens can be customized to match your branding, and are a flexible and scalable way to
                drive customer loyalty and encourage repeat business.
                <div className="pt-4 font-medium text-base underline">
                  <p>View tokens</p>
                </div>
              </p>
            </div>
          </div>
        </div>
        <div id="code collab" className="flex items-center gap-4 p-14 shadow-custom rounded-[20px]">
          <div id="card 2" className="flex flex-col max-w-[460px] gap-4">
            <Image src={"/code-icon.png"} alt="Analytics Icon" width={50} height={50} />
            <div id="card 1 content" className="flex flex-col gap-[10px]">
              <p className="text-3xl">Code collaboration</p>
              <p className="text-sm text-primary leading-[1.5] text-justify">
                Our advanced code synchronization technology ensures that your data is always up-to-date and accurate, no matter where it's coming from. Whether you're integrating data from multiple
                sources or working with a team of developers, our synchronization technology makes it easy to collaborate and ensure that your data is consistent and reliable.
                <div className="pt-4 font-medium text-base underline">
                  <p>View code collaboration</p>
                </div>
              </p>
            </div>
          </div>
          <div id="image wrapper" className="flex items-center justify-end w-full">
            <Image src={"/code-preview.png"} alt="Code Preview" width={467} height={300} className="shadow-custom rounded-[20px]" />
          </div>
        </div>
      </div>
    </div>
  );
};
