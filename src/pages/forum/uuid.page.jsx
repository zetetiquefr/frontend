import BasicHeaderComponent from "../../components/headers/basicHeader.component";
import "./uuid.page.css";
import React from "react";
import ForumApi from "../../services/Forum.api";
import BasicChatComponent from "../../components/chat/basicChat.component";
import RichChatEditor from "../../components/chat/richChatEditor.component";
import ChatApi from "../../services/Chat.api";
import Storage from "../../services/Storage";
import AuthApi from "../../services/Auth.api";
import UserApi from "../../services/User.api";
import Swal from "sweetalert2";
import BackButton from "../../components/buttons/back.component";
import ArchivedChatComponent from "../../components/chat/archivedChat.component"

export default class ForumByUuidPage extends React.Component {
  constructor(props) {
    super(props);

    this.forum = {};
    const url = window.location.href;
    const uuid = url.split("/").pop();
    const token = Storage.getLoginToken();

    AuthApi.validUserToken(token)
      .then((res) => {
        this.isLogged = res;
        const user = Storage.getUserInfo();

        UserApi.getByEmail(user.email, token)
          .then((user) => (this.loggedUser = user))
          .catch(() => (this.loggedUser = {}))
          .finally(() => this.forceUpdate());
      })
      .catch(() => (this.isLogged = false))
      .finally(() => this.forceUpdate());

    ForumApi.getByUuid(uuid)
      .then((forum) => (this.forum = forum))
      .catch((err) => (this.forum = {}))
      .finally(() => this.forceUpdate());
  }

  submitChat = async (value) => {
    const res = await ChatApi.createChat(
      value,
      this.forum.uuid,
      this.loggedUser.uuid
    );

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

  render() {
    if (!this.forum) {
      return <div className="full_size">Loading...</div>;
    }
    return (
      <div className="full_size parent_div">
        <BasicHeaderComponent />
        <div className="forum_box">
          <BackButton to="/forum" />
          <div className="forum_header">
            <div className="forum_title">{this.forum.name}</div>
            <div className="forum_description">{this.forum.description}</div>
            <div className="forum_creator">
              créer par {this.forum.creator?.name ?? "Unknown"}
            </div>
          </div>
          <div className="chat_box">
            {this.forum.chats?.map((chat) =>
              chat.archived ? (
                <ArchivedChatComponent uuid={chat.uuid} />
              ) : (
                <BasicChatComponent uuid={chat.uuid} />
              )
            )}
            <div className="question_creation">
              <h4>Tu veux participer à la discussion ?</h4>
            </div>
            <RichChatEditor onSubmit={this.submitChat} />
          </div>
        </div>
      </div>
    );
  }
}
