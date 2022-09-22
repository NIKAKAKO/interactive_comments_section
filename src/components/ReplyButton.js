


export function ReplyButton(props) {
  return (
    <div className=" items-center w-16 gap-2	text-moderateBlue font-medium flex ">
      <img src={process.env.PUBLIC_URL + "./images/icon-reply.svg"} />
      <button onClick={props.show}>Reply</button>
    </div>
  );
}
