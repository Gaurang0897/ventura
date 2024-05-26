const MoreDetails = (props: any) => {
  const { data } = props;
  return (
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
  );
};

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

export default MoreDetails;
