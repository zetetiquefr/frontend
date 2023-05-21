import React, { useEffect, useState } from "react";
import ChatApi from "../../services/Chat.api";
import "./basicChat.component.css";
import Swal from "sweetalert2";
import reportChatApi from "../../services/ReportChat.api";
import Storage from "../../services/Storage";
import RichChatEditor from "./richChatEditor.component";

export default function BasicChatComponent(props) {
  let [chat, setChat] = useState({});
  let [isClicked, setIsClicked] = useState(false);
  let [isEditing, setIsEditing] = useState(false);
  let user = Storage.getUserInfo();
  let token = Storage.getLoginToken();

  console.log("chat", chat, "user", user);

  if (!props.uuid) {
    throw new Error("uuid is required");
  }

  useEffect(() => {
    const fetchData = async (uuid) => {
      setChat(await ChatApi.getChatByUuid(uuid));
    };

    fetchData(props.uuid);
  }, [props.uuid]);

  const onClickReport = async () => {
    Swal.fire({
      title: "Report this chat",
      input: "text",
      inputLabel: "Reason",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: async (reason) => {
        const res = await reportChatApi.create(user.uuid, props.uuid, reason);

        if (!res) {
          Swal.showValidationMessage(
            "Something went wrong, please try again later."
          );
          return;
        }
        Swal.showValidationMessage(`Chat reported: for reason: ${reason}`);
      },
    });
  };

  const submitChat = async (value) => {
    const res = await ChatApi.editChat(chat.uuid, value, token);

    if (!res) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    window.location.reload();
  };

  const convertDate = (date) => {
    if (!date) {
      return "";
    }
    const [dateString, timeString] = date.split("T");
    const [year, month, day] = dateString.split("-");
    const [hour, minute] = timeString.split(":");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  const deleteChat = async () => {
    const res = await ChatApi.deleteChat(chat.uuid, token);

    if (!res) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    window.location.reload();
  };

  if (!chat) {
    return <div>Chat not found</div>;
  }
  return (
    <div className="chat_content_parent">
      {isEditing ? (
        <div className="chat_editing">
          <div className="prompt">Edit your chat</div>
          <div className="body">
            <RichChatEditor value={chat.content} onSubmit={submitChat} />
          </div>
          <div className="cancel_div">
            <button
              onClick={() => setIsEditing(false)}
              className="btn btn-primary"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : null}
      <div className="chat_content_box">
        <div className="chat_content_top">
          <div className="chat_content_top_header">
            <p>{chat.creator?.name}:</p>
            {chat.chatHistory?.length > 0 ? <p>Edited</p> : <div></div>}
          </div>
          <i
            onClick={() => setIsClicked(!isClicked)}
            class="fa-solid fa-bars"
          ></i>
        </div>
        <div className="chat_content_bottom">
          <p dangerouslySetInnerHTML={{ __html: chat.content }}></p>
        </div>
        <div>
          <span>Créer Le: </span>
          {convertDate(chat.createdAt)}
        </div>
        {chat.chatHistory?.length > 0 ? (
          <div>
            <span>Modifié le: </span>
            {convertDate(chat.updatedAt)}
          </div>
        ) : null}
      </div>
      {isClicked ? (
        <div className="options">
          <i onClick={onClickReport} class="report_flag fa-solid fa-flag"></i>
          {chat.creator.uuid === user.uuid ? (
            <i
              onClick={() => setIsEditing(true)}
              class="fa-solid fa-pen-to-square"
            ></i>
          ) : null}
          <i
            onClick={() =>
              (window.location.href = `/history/chat/${chat.uuid}`)
            }
            class="fa-solid fa-list"
          ></i>
          {chat.creator.uuid === user.uuid ? (
            <i onClick={deleteChat} class="fa-solid fa-trash"></i>
          ) : null}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
