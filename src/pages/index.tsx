import Link from "next/link";
import { headers, ipoData } from "../constant";
export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center px-[5%]`}>
      <div className="z-10  w-full items-center justify-between text-sm lg:flex">
        <p className="text-[gray] py-5">Home</p>
      </div>
      <div className="flex  w-full bg-[#f5f3f3] text-[gray] p-2 rounded-t-md border-2">
        {headers.map((header) => {
          return (
            <span key={header} className="w-1/4 text-center">
              {header}
            </span>
          );
        })}
      </div>
      {ipoData.map((data) => {
        return (
          <Link
            key={data.id}
            href={`/details?id=${data.id}`}
            className=" w-full"
          >
            <div className="flex  w-full p-2 border-b-[1px] border-r-2 border-l-2">
              <div className="w-1/4 justify-center flex items-center gap-2">
                <div className="w-1/4 flex justify-end">
                  <img
                    src={data.img}
                    alt="go"
                    width={30}
                    height={30}
                    className="rounded-[100%] border-[1px]"
                  />
                </div>
                <div className="w-3/4">
                  <p>{data.ipoName}</p>
                  <p className="text-[gray] text-[12px]">{data.date}</p>
                </div>
              </div>
              <div className="w-1/4 justify-center flex items-center">
                {data.size}
              </div>
              <div className="w-1/4 justify-center flex items-center">
                {data.range}
              </div>
              <div className="w-1/4 text-center">
                <p>{data.minInvest}</p>
                <p className="text-[gray] text-[12px]">{data.lotSize}</p>
              </div>
            </div>
          </Link>
        );
      })}
    </main>
  );
}
