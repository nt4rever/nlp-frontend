import styles from "./index.module.scss";
import free_trial from "./../../assets/images/free-trial-img-2-1-1.png";
import React, { useState } from "react";
import { calcSimilarityTwoSentence } from "../../services/axiosIntance";

const CalcSimilar = () => {
  const [score, setScore] = useState<number | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      sentence_1: { value: string };
      sentence_2: { value: string };
    };

    const values = {
      ques_1: target.sentence_1.value,
      ques_2: target.sentence_2.value,
    };

    if (values.ques_1 === "" || values.ques_2 === "") return;

    const data = await calcSimilarityTwoSentence(values);
    if (data) setScore(data.score);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["content"]}>
        <h3>Calculate similar score between two sentence</h3>
        <div className={styles["form"]}>
          <form action="#" onSubmit={handleSubmit}>
            <input type="text" name="sentence_1" placeholder="Sentence 1..." />
            <input type="text" name="sentence_2" placeholder="Sentence 2..." />
            <div className={styles["group"]}>
              <button className="btn btn-primary">Calculate</button>
              {score ? (
                <div
                  className="btn btn-primary"
                  style={{ background: "#61ce70" }}
                >
                  Score: {score}
                </div>
              ) : undefined}
            </div>
          </form>
        </div>
      </div>
      <div className={styles["image"]}>
        <img src={free_trial} alt="free" />
      </div>
    </div>
  );
};

export default CalcSimilar;
