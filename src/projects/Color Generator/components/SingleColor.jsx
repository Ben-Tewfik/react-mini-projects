import { useState } from "react";
export default function SingleColor({ weight, index, hex, toast }) {
  const [alert, setAlert] = useState(false);
  function handleClick() {
    navigator.clipboard.writeText(`#${hex}`);
    setAlert(true);
    toast.success(`#${hex.toUpperCase()} Copied to Clipboard`, {
      position: "top-center",
    });
  }
  return (
    <article
      className={`${index > 7 ? "light-color" : ""} single-color`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={handleClick}
    >
      <p>{weight}%</p>
      <p>#{hex}</p>
    </article>
  );
}
