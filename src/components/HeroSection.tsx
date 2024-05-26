import Link from "next/link";

export default function HeroSection(props: any) {
  const { data } = props;

  return (
    <div className="z-10  w-full sm:items-center justify-between gap-3 text-sm flex">
      <div className="flex gap-3">
        <Link href={`/`} className="hidden sm:flex">
          <button className=" border-2 rounded-lg h-10 w-12 font-sans text-[16px] justify-center items-center">{`<`}</button>
        </Link>
        <div className="w-1/4 flex justify-end">
          <img
            src={data.img}
            alt="go"
            className="rounded-[100%] border-[1px] w-10 h-10"
          />
        </div>
        <div className="w-full">
          <p className="labels">{data.ipoName}</p>
          <p className="grayLabels text-[12px]">{data.fullName}</p>
        </div>
      </div>
      <div className="gap-4 items-center justify-end hidden sm:flex">
        <div className="flex justify-end">
          <img
            src={`/logos/download.png`}
            alt="go"
            className="w-10 h-8 cursor-pointer"
          />
        </div>
        <button className="border-2 rounded-xl px-10 py-3 font-sans text-[16px] text-white bg-blue-950 justify-center items-center flex">
          Apply now
        </button>
      </div>
    </div>
  );
}
