export default function Code({ children }: { children: React.ReactNode }) {
  return (
    <>
      <code className="block rounded-lg mt-2 p-4 bg-zinc-100 border border-zinc-200 text-sm">
        <pre>{children}</pre>
      </code>
    </>
  );
}
