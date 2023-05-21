import { useState } from "react";
import "./preview.component.css";
import ReportForumApi from "../../services/ReportForum.api";
import Swal from "sweetalert2";
import Storage from "../../services/Storage";

export default function ForumPreviewComponent(props) {
  let [clicked, setClicked] = useState(false);
  let token = Storage.getLoginToken();
  let user = Storage.getUserInfo();

  const onClick = () => {
    setClicked(!clicked);
  };

  const onClickReport = async () => {
    Swal.fire({
      title: "Report this forum",
      input: "text",
      inputLabel: "Reason",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Send",
      showLoaderOnConfirm: true,
      preConfirm: async (reason) => {
        const res = await ReportForumApi.create(
          user.uuid,
          props.forum.uuid,
          reason
        );

        if (!res) {
          Swal.showValidationMessage(
            "Something went wrong, please try again later."
          );
          return;
        }
        Swal.showValidationMessage(`Forum reported: for reason: ${reason}`);
      },
    });
  };

  return (
    <div className="box_forum_parent">
      <div className="box_forum">
        <div className="forum_left">
          <div>Creator: {props.forum.creator.name}</div>
        </div>
        <div className="forum_main">
          <div className="forum_name">
            <a href={`/forum/${props.forum.uuid}`}>{props.forum.name}</a>
          </div>
          <div className="forum_description">{props.forum.description}</div>
        </div>
        <div className="forum_right">
          <i onClick={onClick} class="fa-2xl fa-solid fa-bars"></i>
        </div>
      </div>
      {clicked ? (
        <div className="forum_options">
          <button onClick={onClickReport} className="btn btn-danger">
            Report
          </button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
