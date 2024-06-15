export const generateMetadata = async () => {
  const data = await (await fetch("http://localhost:4000/todos")).json();
  return {
    title: data.length > 0 ? data.at(2).text : "할 일을 추가하세요.",
  };
};

export default function LayoutB({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="p-4">
        <div className="flex flex-col gap-4 items-start p-6 border border-dashed border-teal-500 rounded-md relative">
          <span className="inline-block absolute -top-4 left-4 px-3 py-1 rounded-full border bg-teal-50 border-teal-500 text-teal-500 text-sm">
            page b
          </span>
          {children}
        </div>
      </section>
    </>
  );
}
