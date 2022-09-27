import { useState } from "react";

export function Score(props) {
  const [comScore, setcomScore] = useState(props.comments.score);
  const [increased, setIncreased] = useState(false);
  const [decreased, setDecreased] = useState(false);

  const increase = () => {
    if (!props.current) {
      if (!increased) {
        setcomScore((comScore) => comScore + 1);
        if (decreased) {
          setIncreased(false);
        } else {
          setIncreased(true);
        }
        setDecreased(false);
      }
    }
  };

  const decrease = () => {
    if (!props.current) {
      if (!decreased) {
        setcomScore((comScore) => comScore - 1);
        if (increased) {
          setDecreased(false);
        } else {
          setDecreased(true);
        }
        setIncreased(false);
      }
    }
  };

  return (
    <div className="flex	md:flex-col w-24 md:w-10 md:h-[100px] items-center bg-lightGray p-3 rounded-[10px] gap-3 order-3">
      <button onClick={increase}>
        <img
          alt="plus"
          src={process.env.PUBLIC_URL + "/images/icon-plus.svg"}
        />
      </button>
      <span className="font-medium text-moderateBlue">{comScore}</span>
      <button onClick={decrease}>
        <img
          alt="minus"
          src={process.env.PUBLIC_URL + "/images/icon-minus.svg"}
        />
      </button>
    </div>
  );
}
