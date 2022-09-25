import data from "../data.json";
import { ReplyButton } from "./ReplyButton";
import { Score } from "./Score";
import { useState, useContext } from "react";
import AddComment from "./AddComments";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import DeleteModal from "./DeleteModal";
import { commentsContext } from "../index";
import Update from "./Update";

export default function Reply(props) {
  const [check, setCheck] = useState(false);
  const showReply = () => {
    setCheck(!check);
  };

  const [del, setDel] = useState(false);
  const openDeleteModal = () => {
    setDel(true);
  };

  const closeDeleteModal = () => {
    setDel(false);
  };

  const [update, setUpdate] = useState(false);
  const updateHandler = () => {
    setUpdate(true);
  };

  // const [change, setChange] = useState("");

  const changeHandler = (e) => {
    const changedValue = e.target.value;
    console.log(changedValue);
    // setChange(changedValue);
    // console.log(change);
  };

  return (
    <div>
      <div className="w-full lg:w-[95%] mt-6 md:gap-6 mb-6 bg-white p-4 md:p-6 lg:p-4 rounded-lg relative md:flex md:flex-row-reverse">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 order-1">
              <img
                className=" w-8"
                src={process.env.PUBLIC_URL + props.reply.user.image.png}
              />
              <p className=" text-darkBlue font-medium	">
                {props.reply.user.username}
              </p>
              {data.currentUser.username === props.reply.user.username ? (
                <div className=" flex items-center justify-center rounded w-9 h-5  bg-blue-900 text-white">
                  you{" "}
                </div>
              ) : (
                ""
              )}
              <span className="text-[#334253]">{props.reply.createdAt}</span>
            </div>

            <div className="order-4  absolute top-[calc(100%-50px)] right-5 md:static">
              {data.currentUser.username === props.reply.user.username ? (
                <div className="flex justify-between gap-4">
                  <DeleteButton deleteMod={openDeleteModal} />
                  <EditButton
                    editCom={updateHandler}
                    commentId={props.reply.id}
                  />
                </div>
              ) : (
                <ReplyButton show={showReply} />
              )}
            </div>
          </div>
          {update ? (
            <textarea
              // value={change}
              onChange={changeHandler}
              className="break-words w-full max-w-[618px] text-[#67727E] block mt-4 mb-4 mr-0 text-left text-base order-2	"
            >
              {props.reply.content}
            </textarea>
          ) : (
            <span className="break-words w-full max-w-[618px] text-[#67727E] block mt-4 mb-4 mr-0 text-left text-base order-2	">
              {props.reply.content}
            </span>
          )}

          {data.currentUser.username === props.reply.user.username
            ? update && (
                <Update
                  changedText={changeHandler}
                  setUpdate={setUpdate}
                  commentId={props.reply.id}
                  mainCom={false}
                />
              )
            : ""}
        </div>

        <Score comments={props.reply} />
      </div>

      {check && (
        <AddComment
          setCheck={setCheck}
          commentId={props.commentId}
          replyingTo={props.reply.user.username}
          id={props.reply.id}
          reply
        />
      )}
      {del && (
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          commentId={props.reply.id}
          mainCom={false}
        />
      )}
    </div>
  );
}
