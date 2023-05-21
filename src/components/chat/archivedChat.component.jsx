import "./archivedChat.component.css";

export default function archivedChatComponent(props) {
  return (
    <div className="archived_chat_parent">
      <a href={`/history/chat/${props.uuid}`}>This chat has been deleted</a>
    </div>
  );
}
