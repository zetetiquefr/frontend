import "./home.page.css";
import React from "react";
import Storage from "../../services/Storage";
import AuthApi from "../../services/Auth.api";
import ForumApi from "../../services/Forum.api";
import BasicHeaderComponent from "../../components/headers/basicHeader.component";
import ForumPreviewComponent from "../../components/forum/preview.component";

export default class HomeForumComponent extends React.Component {
  constructor(props) {
    super(props);

    this.forums = [];
    let token = Storage.getLoginToken();

    if (!token) {
      this.isLogged = false;
    }
    AuthApi.validUserToken(token)
      .then((res) => (this.isLogged = res))
      .catch((err) => (this.isLogged = false))
      .finally(() => this.forceUpdate());

    ForumApi.getForum(1, 5)
      .then((res) => (this.forums = res))
      .catch((err) => (this.forums = []))
      .finally(() => this.forceUpdate());
  }

  render = () => {
    if (this.isLogged === false) {
      window.location.href = "/user/disconnected";
      return <div></div>;
    }

    return (
      <div>
        <BasicHeaderComponent />
        <div className="columns">
          <div className="left_column">
            <a href="/forum/create">
              <button className="btn btn-secondary create_forum_btn">
                Create a forum
              </button>
            </a>
          </div>
          <div className="parent_div">
            <div className="forum_body">
              <h1>Latest Forums</h1>
              <div className="forum_list">
                {this.forums.map((forum) => (
                  <ForumPreviewComponent forum={forum} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}
