import React from "react";
import { useState } from "react";
import parse from "html-react-parser";
import Option from "./option.jsx";
import { useNavigate } from "react-router-dom";

const Question = ({ allQuestions, index, setAllQuestions, setIndex }) => {
  let navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const onChanged = (answer) => {
    const _allQuestions = allQuestions;
    _allQuestions[index].correct_result =
      _allQuestions[index].correct_answer === answer ? true : false;
    _allQuestions[index].selected_answer = answer;
    setAllQuestions(_allQuestions);
    if (index >= 9) {
      localStorage.setItem("allQuestions", JSON.stringify(_allQuestions));
      navigate("/result-screen");
    } else {
      setTimeout(() => {
        setIndex(index + 1);
        setSelectedOption("");
      }, 200);
    }
  };

  return (
    <div className="quiz-box">
      <div className="d-flex gap-2">
        <div>{index + 1}.</div>
        <div>{parse(allQuestions[index]?.question || "")}</div>
      </div>
      <div className="quiz-ans">
        {allQuestions[index]?.options?.map((option, index) => (
          <Option
            index={index}
            option={option}
            onChanged={onChanged}
            key={`option-${index}`}
            selectedOption={selectedOption}
            setSelectedOption={setSelectedOption}
          />
        ))}
      </div>
    </div>
  );
};
export default Question;
