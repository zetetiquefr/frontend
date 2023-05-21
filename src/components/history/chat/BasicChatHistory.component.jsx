import "./BasicChatHistory.component.css";

export default function BasicChatHistory(props) {
  console.log("props.chat", props.chat);
  let chat = props.chat;

  const convertDate = (date) => {
    const [dateString, timeString] = date.split("T");
    const [year, month, day] = dateString.split("-");
    const [hour, minute] = timeString.split(":");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <div>
      <div dangerouslySetInnerHTML={{__html: chat.content}}></div>
      <div>
        <span>Le: </span>
        {convertDate(chat.createdAt)}
      </div>
    </div>
  );
}
