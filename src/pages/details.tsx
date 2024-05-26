import { ipoData } from "@/constant";

export default function Details() {
  let data = ipoData[0];
  return (
    <main className={`flex min-h-screen flex-col items-center px-[5%] pt-3`}>
      <div className="z-10  w-full items-center justify-start gap-3 text-sm hidden sm:flex">
        <p className="grayLabels py-5">Home</p>
        <p className="grayLabels py-5">{`>`}</p>
        <p className="grayLabels py-5">Market watch</p>
      </div>
      <div className="z-10  w-full items-center justify-between gap-3 text-sm flex">
        <div className="flex gap-4">
          <button className=" border-2 rounded-lg h-10 w-12 font-sans text-[16px] justify-center items-center hidden sm:flex">{`<`}</button>
          <div className="w-1/4 flex justify-end">
            <img
              src={data.img}
              alt="go"
              className="rounded-[100%] border-[1px] w-10 h-10"
            />
          </div>
          <div className="w-3/4">
            <p className="labels">{data.ipoName}</p>
            <p className="grayLabels text-[12px]">{data.fullName}</p>
          </div>
        </div>
        <div className="gap-4 items-center justify-end hidden sm:flex">
          <div className="flex justify-end">
            <img src={`/logos/download.png`} alt="go" className="w-10 h-8" />
          </div>
          <button className="border-2 rounded-xl px-10 py-3 font-sans text-[16px] text-white bg-blue-950 justify-center items-center flex">
            Apply now
          </button>
        </div>
      </div>
      <div className="w-full items-center justify-start gap-3 text-sm sm:border-2 rounded-xl sm:p-3 mt-4">
        <p className="py-1 labels">IPO details</p>
        <div className="w-full items-center justify-start gap-3 text-sm grid sm:grid-cols-4 sm:grid-rows-2 grid-cols-2 grid-rows-4 border-2 rounded-xl p-3">
          <LabelValuePair label="Issue size" value={data.size} />
          <LabelValuePair label="Price range" value={data.range} />
          <LabelValuePair label="Minimun amount" value={data.minInvest} />
          <LabelValuePair label="Lot size" value={data.lotSize} />
          <LabelValuePair label="Issue dates" value={data.date} />
          <LabelValuePair label="Listed on" value={data.listOn} />
          <LabelValuePair label="Listed price" value={data.listPrice} />
          <LabelValuePair
            label="Listed gains"
            gains={data.listingGain}
            value={data.listingGain.value}
          />
        </div>
      </div>
    </main>
  );
}

type cardProps = {
  label: string;
  value: string;
  gains?: {
    profit: string | null;
    loss: string | null;
  };
};
function LabelValuePair(props: cardProps) {
  const { label, value, gains } = props;
  return (
    <div className="grow">
      <p className="py-1 grayLabels">{label}</p>
      <p className="py-1 labels">
        {value}
        {gains && (
          <>
            (
            <span className={`${gains.profit ? "text-[green]" : "text-[red]"}`}>
              {gains.profit || gains.loss}
            </span>
            )
          </>
        )}
      </p>
    </div>
  );
}
