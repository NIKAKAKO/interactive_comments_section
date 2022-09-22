import { useState } from "react";
import data from "../data.json";
import Reply from "./Reply";
import AddComment from "./AddComments";
import { ReplyButton } from "./ReplyButton";
import { Score } from "./Score";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import DeleteModal from "./DeleteModal";

export function Comment(props) {
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

  return (
    <div>
      <div className="w-full lg:w-[95%] mt-6 md:gap-6 mb-6 bg-white p-4 md:p-6 lg:p-4 rounded-lg flex-wrap relative md:flex md:flex-row-reverse">
        <div className="flex flex-col	w-[90%]">
          <div className="flex items-center justify-between">
            <div className="flex gap-4 order-1">
              <img
                className=" w-8"
                src={process.env.PUBLIC_URL + props.dataCom.user.image.png}
              />
              <p className=" text-darkBlue font-medium	">
                {props.dataCom.user.username}
              </p>
              {data.currentUser.username == props.dataCom.user.username ? (
                <div className=" flex items-center justify-center rounded w-9 h-5  bg-blue-900 text-white">
                  you{" "}
                </div>
              ) : (
                ""
              )}
              <span className="text-[#334253]">{props.dataCom.createdAt}</span>
            </div>
            <div className="order-4  absolute top-[calc(100%-50px)] right-5 md:static">
              {data.currentUser.username == props.dataCom.user.username ? (
                <div className="flex justify-between gap-4">
                  <DeleteButton deleteMod={openDeleteModal} />
                  <EditButton />
                </div>
              ) : (
                <ReplyButton show={showReply} />
              )}
            </div>
          </div>
          <span className="break-words w-full max-w-[618px] text-[#67727E] block mt-4 mb-4 mr-0 text-left text-base order-2	">
            {props.dataCom.content}
          </span>
        </div>
        <Score comments={props.dataCom} />
      </div>
      <div className="border-l-2 border-[#E9EBF0] pl-4 md:ml-4">
        {props.dataCom.replies.map((reply) => {
          return (
            <Reply key={reply.id} commentId={props.dataCom.id} reply={reply} />
          );
        })}
      </div>
      {check && (
        <AddComment
          id={props.dataCom.id}
          commentId={props.dataCom.id}
          replyingTo={props.dataCom.user.username}
          setCheck={setCheck}
        />
      )}
      {del && (
        <DeleteModal
          closeDeleteModal={closeDeleteModal}
          commentId={props.dataCom.id}
          mainCom={true}
        />
      )}
    </div>
  );
}
