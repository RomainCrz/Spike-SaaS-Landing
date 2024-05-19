import Image from "next/image";

export const LogoTitle = () => {
  return (
    <div id="logo title" className="flex flex-col items-center justify-center gap-10 py-14">
      <p>Trusted by teams at over 1,000 of the world's leading organizations</p>
      <div id="logos" className="flex items-center justify-center gap-10">
        <Image src="/logo-dell.png" alt="dell" width={62} height={20} />
        <Image src="/logo-zendesk.png" alt="dell" width={87} height={20} />
        <Image src="/logo-rakuten.png" alt="dell" width={67} height={20} />
        <Image src="/logo-pacific-funds.png" alt="dell" width={143} height={20} />
        <Image src="/logo-ncr.png" alt="dell" width={80} height={20} />
        <Image src="/logo-lattice.png" alt="dell" width={120} height={20} />
        <Image src="/logo-ted.png" alt="dell" width={55} height={20} />
      </div>
    </div>
  );
};
