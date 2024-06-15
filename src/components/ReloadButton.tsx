"use client";

import Button from "./elements/Button";

export default function ReloadButton() {
  return (
    <>
      <Button
        type="button"
        onClick={() => {
          window.location.reload();
        }}
      >
        페이지 새로고침
      </Button>
    </>
  );
}
