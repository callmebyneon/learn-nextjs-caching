import RevalidateTag from "@/components/RevalidateTag";
import Code from "@/components/elements/Code";

export default async function PageA() {
  const data = await (
    await fetch("http://localhost:4000/todos", {
      next: {
        tags: ["todos"],
      },
    })
  ).json();
  return (
    <>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <Code>{JSON.stringify(data, null, 2)}</Code>
      <RevalidateTag />
    </>
  );
}
