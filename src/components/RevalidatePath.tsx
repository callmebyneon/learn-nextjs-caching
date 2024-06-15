import { revPath } from "@/app/libs/action";
import Button from "./elements/Button";

export default function RevalidatePath() {
  return (
    <>
      <form action={revPath}>
        <Button type="submit">revalidatePath("/")</Button>
      </form>
    </>
  );
}
