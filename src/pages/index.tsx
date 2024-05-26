import List from "@/components/List";

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center px-[5%]`}>
      <div className="z-10  w-full items-center justify-between text-sm lg:flex">
        <p className="text-[gray] py-5">Home</p>
      </div>
      <List />
    </main>
  );
}
