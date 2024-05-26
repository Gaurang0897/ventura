import AboutCompany from "@/components/AboutCompany";
import MoreDetails from "@/components/Details";
import HeroSection from "@/components/HeroSection";
import TimeLine from "@/components/TimeLine";
import { ipoData } from "@/constant";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const id = router.query.id;

  const data = ipoData.find((item) => item.id == id);

  if (!data) {
    return;
  }

  return (
    <main className={`flex min-h-screen flex-col items-center px-[5%] py-3`}>
      <div className="z-10  w-full items-center justify-start gap-3 text-sm hidden sm:flex">
        <p className="grayLabels py-5">Home</p>
        <p className="grayLabels py-5">{`>`}</p>
        <p className="grayLabels py-5">Market watch</p>
      </div>
      <HeroSection data={data} />
      <MoreDetails data={data} />
      <TimeLine />
      <AboutCompany />
    </main>
  );
}
