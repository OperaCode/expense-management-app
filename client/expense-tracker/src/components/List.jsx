import React from "react";
import "boxicons"
import boxicons from "boxicons";

const categories = [
  {
    name: "Savings",
    color: "#ffcd56",
  },
  {
    name: "Investment",
    color: "#36a2eb",
  },
  {
    name: "Expense",
    color: "#ff6384",
  },
];

const List = () => {
  return (
    <div className="flex flex-col py-6 gap-3">
      <h1 className="py-4 font-bold text-xl">History</h1>

      {categories.map((category, index) => (
        <div
        key={index}
        className="item flex justify-center bg-gray-50 py-2 rounded-r"
        style={{ borderRight: `8px solid${category.color ?? "#e5ee5"}` }}
      >
        <button className="px-3"><box-icon name="trash" size="15px" color= "#a13d38"></box-icon></button>
        <span className="block w-full">{category.name?? "Savings"}</span>
      </div>
      
      ))}
    </div>
  );
};

export default List;
