import { useState } from "react";
import QrCode from "react-qr-code";

export default function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [input, setInput] = useState("");

  function handleSetInputChange() {
    setValue(input);
  }

  return (
    <div>
      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        name="qr-code"
        placeholder="enter text"
      ></input>
      <button onClick={handleSetInputChange}>Generate QR Code</button>
      {value && <QrCode id="qr-code-generator" value={value} size={400} />}
    </div>
  );
}
