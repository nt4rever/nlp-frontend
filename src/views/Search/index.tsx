import styles from "./index.module.scss";
import image_bg from "./../../assets/images/subscribe-shape.png";
import Item from "./Item";
import { useState } from "react";
import { querySimilarityQuestion } from "../../services/axiosIntance";

type responseData = {
  QUESTION: string;
  ID: string;
  ANSWER: string;
  SCORE: number;
};

const Search = () => {
  const [questions, setQuestions] = useState<responseData[]>();
  const handleFormSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      question: { value: string };
      num: { value: number };
    };
    const question = target.question.value;
    const num = target.num.value;
    if (question !== "") {
      const data = await querySimilarityQuestion(question, num ? num : 5);
      if (typeof data !== "string") {
        setQuestions(data);
      }
    }
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h2>Search similar Java interview question</h2>
        <form action="#" className={styles["form"]} onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter your question"
          />
          <input
            type="number"
            name="num"
            min={1}
            defaultValue={5}
            className={styles["num"]}
          />
          <button type="submit">Search</button>
        </form>
      </div>
      <div className={styles["result"]}>
        <div className={styles["list"]}>
          {questions?.map((item) => (
            <Item
              key={item.ID}
              question={item.QUESTION}
              answer={item.ANSWER}
              score={item.SCORE}
            />
          ))}
        </div>
      </div>
      <div className={styles["ai-subscribe-shape"]}>
        <img src={image_bg} alt="bg" />
      </div>
    </div>
  );
};

export default Search;
