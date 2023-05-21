import React, { useState } from "react";
import "./create.page.css";
import ForumApi from "../../services/Forum.api";
import Storage from "../../services/Storage";
import Swal from "sweetalert2";
import BackButton from "../../components/buttons/back.component";

function CreateForumPage() {
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");

  const submitForm = async (e) => {
    e.preventDefault();

    const user = Storage.getUserInfo();
    const res = await ForumApi.createForum(name, description, user.uuid);

    if (!res) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
      return;
    }
    Swal.fire({
      icon: "success",
      title: "Success!",
      text: "Forum created!",
    });
    window.location.href = "/forum";
  };

  return (
    <div className="create_forum_columns">
      <div className="back_button">
        <BackButton to="/forum" />
      </div>
      <div className="create_forum_parent">
        <div className="create_forum_main">
          <h1>Create your forum</h1>
          <form onSubmit={submitForm}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                value={name}
                className="form-control"
                onChange={(e) => {
                  e.preventDefault();
                  setName(e.target.value);
                }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <textarea
                className="form-control"
                rows="3"
                value={description}
                onChange={(e) => {
                  e.preventDefault();
                  setDescription(e.target.value);
                }}
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateForumPage;
