export function Score(props) {
  return (
    <div className="flex	md:flex-col w-24 md:w-10 md:h-[100px] items-center bg-lightGray p-3 rounded-[10px] gap-3 order-3">
      <img src={process.env.PUBLIC_URL + "./images/icon-plus.svg"} />
      <span className="font-medium text-moderateBlue">
        {props.comments.score}
      </span>
      <img src={process.env.PUBLIC_URL + "./images/icon-minus.svg"} />
    </div>
  );
}
