import { revTag } from "@/app/libs/action";
import Button from "./elements/Button";

export default function RevalidateTag() {
  return (
    <>
      <form action={revTag}>
        <Button type="submit">Revalidate Tag : "todos"</Button>
      </form>
    </>
  );
}
