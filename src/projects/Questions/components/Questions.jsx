import questions from "../../../utils/questions";
import SingleQuestion from "./SingleQuestion";

export default function Questions() {
  return (
    <section className="question-container">
      <h1 className="question-title">Questions</h1>
      {questions.map(question => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </section>
  );
}
