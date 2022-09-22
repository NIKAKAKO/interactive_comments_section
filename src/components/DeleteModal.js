import React, { useContext, Component } from "react";
import { commentsContext } from "../index";

export default function DeleteModal(props) {
  const [comments, setComments] = useContext(commentsContext);

  const delComment = () => {
    const dataComs = [...comments];

    if (props.mainCom) {
      const deletedCommentIndex = dataComs.findIndex((e) => {
        return e.id === props.commentId;
      });

      dataComs.splice(deletedCommentIndex, 1);
    } else {
      let deletedCommentIndex;
      dataComs.forEach((e, index) => {
        let filteredReplies = e.replies.filter((element) => {
          return element.id !== props.commentId;
        });

        dataComs[index].replies = filteredReplies;
      });
      console.log(deletedCommentIndex);
    }

    setComments(dataComs);
    props.closeDeleteModal();
  };

  return (
    <div className="w-full h-full flex items-center justify-center bg-[rgba(0,0,0,.3)]  z-10 fixed top-0 left-0 ">
      <div className=" bg-white rounded-lg w-[343px] md:w-[400px]  p-8 text-left flex flex-col gap-5 ">
        <h5 className="text-[#334253] text-xl md:text-2xl font-semibold m-0">
          Delete comment
        </h5>
        <span className="text-[#67727E] text-base text-left ">
          Are you sure you want to delete this comment? This will remove the
          comment and can't be undone.
        </span>
        <div className="flex w-full items-center gap-4">
          <button
            onClick={props.closeDeleteModal}
            className=" w-[162px] item-center text-center  bg-[#67727E] rounded-md"
          >
            <p className="text-[#FFFFFF] text-base md:text-xl font-medium mx-2 my-3 md:mx-4 md:my-4 ">
              NO, CANCEL
            </p>
          </button>
          <button
            onClick={delComment}
            className=" w-[162px] bg-[#ED6368] rounded-md"
          >
            <p className="text-[#FFFFFF] text-base md:text-xl  font-medium mx-2 my-3 md:mx-4 md:my-4">
              YES, DELETE
            </p>
          </button>
        </div>
      </div>
    </div>
  );
}
