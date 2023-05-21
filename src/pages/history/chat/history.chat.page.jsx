import { useEffect, useState } from "react";
import BasicHeaderComponent from "../../../components/headers/basicHeader.component";
import "./history.chat.page.css";
import ChatApi from "../../../services/Chat.api";
import BasicChatHistory from "../../../components/history/chat/BasicChatHistory.component";
import BasicChatComponent from "../../../components/chat/basicChat.component";

export default function ChatHistoryPage() {
  let url = window.location.href;
  let uuid = url.split("/").pop();
  let [chat, setChat] = useState({});

  console.log("uuid", uuid);

  useEffect(() => {
    const fetchData = async (uuid) => {
      const res = await ChatApi.getChatByUuid(uuid);

      console.log("fetch res res", res);
      setChat(res);
    };

    fetchData(uuid);
  }, [uuid]);

  const convertDate = (date) => {
    if (!date) {
      return "";
    }
    const [dateString, timeString] = date.split("T");
    const [year, month, day] = dateString.split("-");
    const [hour, minute] = timeString.split(":");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };


  if (!chat) {
    return <div></div>;
  }
  if (!uuid) {
    return <div></div>;
  }
  return (
    <div>
      <BasicHeaderComponent />
      <div>
        {chat.chatHistory?.map((chat) => (
          <BasicChatHistory chat={chat} />
        ))}
      </div>
      <div>
        <div dangerouslySetInnerHTML={{ __html: chat.content }}></div>
        <div>
          <span>Le: </span>
          {convertDate(chat.updatedAt)}
        </div>
      </div>
    </div>
  );
}
