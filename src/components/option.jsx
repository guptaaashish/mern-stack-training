import React from "react";
import parse from "html-react-parser";

const Option = ({
  option,
  index,
  onChanged = () => {},
  setSelectedOption,
  selectedOption,
}) => {
  return (
    <div className="d-flex gap-2">
      <input
        id={`quiz-ans-${index}`}
        type="radio"
        name={`quiz-ans-${index}`}
        checked={option === selectedOption}
        onChange={() => {
          setSelectedOption(option);
          onChanged(option);
        }}
      />
      <label htmlFor={`quiz-ans-${index}`} className="fs-6">
        {parse(option || "")}
      </label>
    </div>
  );
};
export default Option;
