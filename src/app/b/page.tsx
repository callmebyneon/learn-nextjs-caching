import RevalidatePath from "@/components/RevalidatePath";
import Code from "@/components/elements/Code";

export default async function PageB() {
  const data = await (
    await fetch("http://localhost:4000/todos", {
      next: {
        revalidate: 60, // 60초 마다 재검증
      },
    })
  ).json();
  return (
    <>
      <h2>{new Date().toLocaleTimeString()}</h2>
      <Code>
        (from "/b" page)
        <br />
        {JSON.stringify(data, null, 2)}
      </Code>
      <RevalidatePath />
    </>
  );
}
