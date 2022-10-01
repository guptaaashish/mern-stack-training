import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="container text-center home-page">
      <div className="fs-3 fw-bold">Welcome to the Quiz challenge!</div>
      <div className="fs-4">
        You will be presented with 10 true or false questions.
      </div>
      <div className="fs-4">Can you score 100%?</div>
      <div className="text-uppercase">
        <Link to="/quiz-screen" className="fs-4 fw-bold text-decoration-none">
          Begin
        </Link>
      </div>
    </div>
  );
};
export default Home;