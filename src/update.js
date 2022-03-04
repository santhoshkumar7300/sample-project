import { height } from "@mui/system";
import { useState } from "react";
import { ref } from "yup";

export default function Update() {
  const myStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "6px",
    padding: "0 50px",
    margin: "10px 0 0 10px",
  };

  const [data, setData] = useState([
    { id: 1, qty: 3 },
    { id: 2, qty: 2 },
    { id: 3, qty: 4 },
    { id: 4, qty: 2 },
  ]);

  const updateHandle = () => {
    let refdata = [...data];
    let findData = refdata.findIndex((e) => e.id === 4);
    console.log(findData);
    refdata[findData].qty = 7;
    setData(refdata);
    console.log(data);
  };

  const IncreseHandle = (data12, index) => {
    let change = (data12.qty += 1);
    console.log(change);
    let refdata = [...data];
    refdata[index].qty = change;
    setData(refdata);
    console.log(data);

    // console.log((refdata[index].qty = data.qty + 1));
  };

  return (
    <div>
      {data.map((e, index) => (
        <button style={myStyle} onClick={() => IncreseHandle(e, index)}>
          {e.qty}
        </button>
      ))}
    </div>
  );
}
