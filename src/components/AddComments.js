import PreviousMap from "postcss/lib/previous-map";
import { useContext, useState } from "react";
import data from "../data.json";
import { commentsContext } from "../index";

const AddComments = ({
  addComments,
  replyingTo,
  id,
  setCheck,
  newComments,
  commentId,
  dataCom,
}) => {
  const replyingToUser = replyingTo ? `@${replyingTo}, ` : "";
  const [comments, setComments] = useContext(commentsContext);

  const [comment, setComment] = useState("");

  const clickHandler = () => {
    if (comment === "" || comment === " ") return;

    const newComment = {
      id: Math.floor(Math.random() * 100) + 5,
      content: replyingToUser + comment,
      createdAt: "1 day ago",
      score: 0,
      replyingTo: replyingToUser,
      user: {
        image: {
          png: "./images/avatars/image-juliusomo.png",
          webp: "./images/avatars/image-juliusomo.webp",
        },
        username: "juliusomo",
      },
      replies: [],
    };

    const copiedComments = [...comments];

    if (newComments) {
      copiedComments.push(newComment);
    } else {
      const index = copiedComments.findIndex(
        (comment) => comment.id === commentId
      );
      copiedComments[index].replies.push(newComment);
    }

    if (setCheck) {
      setCheck(false);
    }
    setComments(copiedComments);

    setComment("");
  };

  return (
    <div className="w-full lg:w-[95%]">
      <div className="bg-white p-4 sm:p-6 flex flex-wrap md:flex-nowrap	rounded-lg max-w-3xl sm:justify-center">
        <textarea
          className="w-full border-[#5357B6] focus:outline-none focus:border-[#5357B6] sm:max-w-lg h-24 pt-3 pl-6 pr-6 pb-3 border sm:order-2 rounded-md mb-4"
          placeholder="Add a comment..."
          value={replyingToUser + comment}
          onChange={(e) => {
            setComment(
              e.target.value.replace(replyingTo ? `@${replyingTo}, ` : "", "")
            );
          }}
        />
        <img
          className="h-8 sm:order-1 sm:h-10 sm:mr-4"
          src={process.env.PUBLIC_URL + data.currentUser.image.png}
        />
        <button
          className="bg-blue-700 hover:bg-[#C5C6EF] sm:order-3 text-white font-link w-24 h-12 rounded-lg ml-auto sm:ml-4"
          onClick={clickHandler}
        >
          Reply
        </button>
      </div>
    </div>
  );
};

export default AddComments;
