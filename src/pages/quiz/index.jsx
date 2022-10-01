import { useEffect, useState } from "react";
import useApi from "../../custom-hooks/useApi";
import _ from "lodash";
import { CircleLoader } from "react-spinners";
import Question from "../../components/question.jsx";

const Quiz = () => {
  const [allQuestions, setAllQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const { error, loading, data } = useApi(
    "https://opentdb.com/api.php?amount=10&amp;difficulty=hard&amp;type=boolean"
  );
  useEffect(() => {
    const response = data.map((res, index) => {
      let options = [...res.incorrect_answers, res.correct_answer];
      res.options = _.shuffle(options);
      return res;
    });
    setAllQuestions(response);
  }, [data]);

  if (loading)
    return (
      <div className="d-flex loading-block align-items-center justify-content-center">
        <div className="sweet-loading">
          <CircleLoader color={"#000000"} loading={loading} size={100} />
        </div>
      </div>
    );

  if (error)
    return (
      <div className="d-flex loading-block align-items-center justify-content-center text-danger fw-bold fs-2">
        {error}
      </div>
    );

  return (
    <div className="container quiz-screen">
      <div className="fs-3 fw-bold text-center">
        {allQuestions[index]?.category}
      </div>
      <div className="fs-4 w-100 quiz-box-section">
        <Question
          index={index}
          allQuestions={allQuestions}
          setAllQuestions={setAllQuestions}
          setIndex={setIndex}
        />
      </div>
      <div className="text-center">
        {index + 1} of {allQuestions.length}
      </div>
    </div>
  );
};
export default Quiz;
