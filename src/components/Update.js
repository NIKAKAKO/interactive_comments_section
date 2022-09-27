import { commentsContext } from "../index";
import { useContext } from "react";

const Update = (props) => {
  const [comments, setComments] = useContext(commentsContext);

  const editComment = () => {
    let dataComs = [...comments];

    props.setUpdate(false);

    if (props.mainCom) {
      const newDataComs = dataComs.map((edit) => {
        if (edit.id === props.commentId) {
          edit.content = props.changedText;
          console.log(props.changedText, );
        }
        return edit;
      });
      setComments(newDataComs);
    } else {
      dataComs.forEach((e, index) => {
        e.replies.map((e) => {
          if (e.id === props.commentId) {
            e.content = props.changedText;
          }
          return e;
        });
      });
    }
  };

  return (
    <div className="flex order-3 justify-end">
      <button
        onClick={editComment}
        className="flex w-[6rem]  bg-[#5357B6] py-3 mb-2 text-center justify-center  text-white rounded-lg "
      >
        Update
      </button>
    </div>
  );
};

export default Update;
