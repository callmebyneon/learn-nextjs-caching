"use server";

import { revalidatePath, revalidateTag } from "next/cache";

export async function revPath() {
  revalidatePath("/");
}

export async function revTag() {
  revalidateTag("todos");
}
