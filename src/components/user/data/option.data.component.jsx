import "./option.data.component.css";
import UserApi from "../../../services/User.api";
import Storage from "../../../services/Storage";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function UserDataOption(props) {
  const [user, setUser] = useState({});
  const token = Storage.getLoginToken();

  useEffect(() => {
    const fetchData = async (token, uuid) => {
      const userInfo = await UserApi.getByUuid(uuid, token);

      setUser(userInfo);
    };

    fetchData(token, props.uuid);
  }, [token, props.uuid]);

  const handleEditName = () => {
    Swal.fire({
      title: "Edit your name",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: async (name) => {
        const res = await UserApi.updateUser(props.uuid, { name: name }, token);

        if (!res) {
          Swal.showValidationMessage(
            "This username is already taken, please choose another one"
          );
          return;
        }
        window.location.reload();
      },
    });
  };

  const handleEditEmail = () => {
    Swal.fire({
      title: "Edit your email",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: async (email) => {
        const res = await UserApi.updateUser(
          props.uuid,
          { email: email },
          token
        );

        if (!res) {
          Swal.showValidationMessage(
            "This email already exist, please choose another one"
          );
          return;
        }
        window.location.reload();
      },
    });
  };

  const handleEditPassword = () => {
    Swal.fire({
      title: "Edit your password",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Save",
      showLoaderOnConfirm: true,
      preConfirm: async (password) => {
        const res = await UserApi.updateUser(
          props.uuid,
          { password: password },
          token
        );

        if (!res) {
          Swal.showValidationMessage(
            "This password already exist, please choose another one"
          );
          return;
        }
        window.location.reload();
      },
    });
  };

  return (
    <div className="user_option_data_parent">
      <h3 className="user_title">User info</h3>
      <ul>
        <li>
          <div className="user_data">
            <span className="user_data_title">Username:</span>
            <span className="user_data_value">{user.name}</span>
          </div>
          <div className="user_action">
            <i onClick={handleEditName} class="fa-solid fa-pen-to-square"></i>
          </div>
        </li>
        <li>
          <div className="user_data">
            <span className="user_data_title">Email:</span>
            <span className="user_data_value">{user.email}</span>
          </div>
          <div className="user_action">
            <i onClick={handleEditEmail} class="fa-solid fa-pen-to-square"></i>
          </div>
        </li>
        <li>
          <div className="user_data">
            <span className="user_data_title">Password:</span>
          </div>
          <div className="user_action">
            <i
              onClick={handleEditPassword}
              class="fa-solid fa-pen-to-square"
            ></i>
          </div>
        </li>
      </ul>
    </div>
  );
}
