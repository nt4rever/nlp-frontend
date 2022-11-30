import React, { useRef, useState } from "react";
import styles from "./index.module.scss";

interface itemData {
  question: string;
  answer: string;
  score: number;
}

const Item = (item: itemData) => {
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const textRef = useRef<HTMLDivElement>(null);

  const animateItem = () => {
    if (textRef.current && textRef.current.clientHeight) {
      textRef.current.style.height = "0px";
    } else if (textRef.current) {
      const childHeight = textRef.current.children[0].clientHeight;
      textRef.current.style.height = childHeight + "px";
    }
  };

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setIsSelected((x) => !x);
    animateItem();
  };

  return (
    <div
      className={`${styles["item"]} ${
        isSelected ? styles["active"] : undefined
      }`}
    >
      <a href="#" onClick={handleClick}>
        {item.question} ({item.score})
        {isSelected ? (
          <span className="fa-solid fa-minus"></span>
        ) : (
          <span className="fa fa-plus"></span>
        )}
      </a>
      <div className={styles["accordion-content"]} ref={textRef}>
        <p>{item.answer}</p>
      </div>
    </div>
  );
};

export default Item;
