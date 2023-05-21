import { useState } from "react";
import "./line.component.css";
import UserApi from "../../../services/User.api";
import Storage from "../../../services/Storage";
import Swal from "sweetalert2";

export default function UserDataLine(props) {
  const [user, userSet] = useState(props.user ?? {});
  const token = Storage.getLoginToken();

  const deleteUser = async () => {
    console.log("user", user, "token", token);
    const res = await UserApi.deleteUser(user.uuid, token);

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
      title: "Success",
      text: "User archived successfully!",
    });
  };

  return (
    <div className="user_data_line">
      <ul className="line">
        <li>{user.uuid}</li>
        <li>{user.name}</li>
        <li>{user.email}</li>
        <li>{user.password}</li>
        <li>
          <div onClick={deleteUser}>OK</div>
          <i onClick={deleteUser} className="fa-solid fa-trash"></i>
        </li>
      </ul>
    </div>
  );
}
