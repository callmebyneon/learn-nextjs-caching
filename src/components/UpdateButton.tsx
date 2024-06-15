"use client";
import Button from "./elements/Button";

const updateTodos = () => {
  fetch("http://localhost:4000/todos", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id: 2 }),
  });
};
export default function UpdateButton() {
  return (
    <>
      <form action={updateTodos}>
        <Button variant="outline">"todos/2" completed toggle</Button>
      </form>
    </>
  );
}
