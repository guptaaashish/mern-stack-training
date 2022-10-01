import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import parse from "html-react-parser";

const Result = () => {
  const allQuestions = JSON.parse(localStorage.getItem("allQuestions")) || [];
  const [count, setCount] = useState(0);
  useEffect(() => {
    let _count = 0;
    allQuestions.some((inst, index) => {
      inst.correct_result && _count++;
    });
    setCount(_count);
  }, []);
  return (
    <div className="container result-page">
      <div className="fs-3 fw-bold text-center">
        <div>You scored</div>
        <div>
          {count} / {allQuestions.length}
        </div>
      </div>
      <div className="final-result">
        <Accordion defaultActiveKey="0">
          {allQuestions.map((value, index) => {
            return (
              <Accordion.Item eventKey={index} key={`final-result-${index}`}>
                <Accordion.Header>
                  <div className="d-flex gap-2">
                    <span>
                      {value.correct_result ? (
                        <FontAwesomeIcon icon={faCheck} color="green" />
                      ) : (
                        <FontAwesomeIcon icon={faTimes} color="red" />
                      )}
                    </span>
                    <div>{index + 1}.</div>
                    <div className="screen-question">
                      {parse(value.question || "")}
                    </div>
                  </div>
                </Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {value?.options?.map((option, _index) => {
                      return (
                        <li key={`result-option-${_index}`}>
                          <span>{parse(option || "")}</span>
                          <span className="ps-2">
                            {option === value.selected_answer &&
                              (value.correct_result ? (
                                <FontAwesomeIcon icon={faCheck} color="green" />
                              ) : (
                                <FontAwesomeIcon icon={faTimes} color="red" />
                              ))}
                            {option === value.correct_answer &&
                              option !== value.selected_answer && (
                                <FontAwesomeIcon icon={faCheck} color="green" />
                              )}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            );
          })}
        </Accordion>
      </div>
      <div className="text-uppercase text-center">
        <Link to="/quiz-screen" className="fs-4 fw-bold text-decoration-none">
          Play again?
        </Link>
      </div>
    </div>
  );
};
export default Result;
