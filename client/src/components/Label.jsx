import React from "react";
import { default as api } from '../store/apiSlice';

const Label = () => {
  const { data, isFetching, isSuccess, isError } = api.useGetCategoriesQuery(); 

  let content;

  if (isFetching) {
    content = <div>Fetching...</div>;
  } else if (isError) {
    content = <div>Error loading labels.</div>;
  } else if (isSuccess) {
    content = (
      <div className="labels">
        {data.map((item, index) => (
          <div className="flex justify-between" key={index}>
            <div className="flex gap-2">
              <div
                className="w-2 h-2 rounded py-3"
                style={{ background: item.color ?? "#f9c74f" }}
              ></div>
              <h3 className="text-md">{item.type ?? "Unknown"}</h3>
            </div>
            <div>
              <h3 className="font-bold">{item.percent ?? 0}%</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return <>{content}</>;
};

export default Label;
