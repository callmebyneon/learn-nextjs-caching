import { Metadata } from "next";

export const metadata: Metadata = {};

export default function LayoutA({ children }: { children: React.ReactNode }) {
  return (
    <>
      <section className="p-4">
        <div className="flex flex-col gap-2 items-start p-6 border border-dashed border-teal-500 rounded-md relative">
          <span className="inline-block absolute -top-4 left-4 px-3 py-1 rounded-full border bg-teal-50 border-teal-500 text-teal-500 text-sm">
            page a
          </span>
          {children}
        </div>
      </section>
    </>
  );
}
