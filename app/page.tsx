import { Hero } from "@/src/components/Hero";
import { LogoTitle } from "@/src/components/LogoTitle";
import { NavBar } from "@/src/components/NavBar";

export default function Home() {
  return (
    <div className=" w-full bg-[url('/background.png')] bg-cover">
      <NavBar />
      <Hero />
      <LogoTitle />
    </div>
  );
}
