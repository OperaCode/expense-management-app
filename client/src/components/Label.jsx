import React from "react";

const labelObject = [
  {
    type: "Savings",
    color: "#ffcd56",
    percent: "45%",
  },
  {
    type: "Investment",
    color: "#36a2eb",
    percent: "20%",
  },
  {
    type: "Expense",
    color: "#ff6384",
    percent: "10%",
  },
];

const Label = () => {
  return (
    <>
      <div className=" labels">
        {labelObject.map((item, index) => (
         
            <div className="flex justify-between">
            <div
              className="flex gap-2"
              key={index}
            >
              <div
                className="w-2 h-2 rounded py-3"
                style={{ background: item.color ?? "#f9c74f" }}
              ></div>
              <h3 className="text-md">{item.type ?? ""}</h3>
            </div>

            <div>
              <h3 className="font-bold">{item.percent ?? 0}</h3>
            </div>

            </div>
            
    
        ))}
      </div>
    </>
  );
};

export default Label;
