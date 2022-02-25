import { useState } from "react";

export default function Check() {
  let a = 10;

  const [loader, setLoader] = useState(false);
  const [data, setData] = useState(0);
  const handlechange = () => {
    a = 13;
  };
  const handleloader = () => {
    setLoader(!loader);
    setData((a += 1));
  };

  console.log(data);
  console.log(a);

  //   let spred = { name: "santhosh" };
  //   let withoutSpread = spred;
  //   let withSpread = { ...spred };
  //   console.log(withoutSpread);
  //   console.log(withSpread);
  return (
    <div>
      <button
        onClick={() => {
          handlechange();
          handleloader();
        }}
      >
        Click me
      </button>
    </div>
  );
}
