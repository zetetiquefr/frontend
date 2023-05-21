import "./table.component.css";
import UserDataLine from "./line.component";

export default function UserDataTable(props) {
  return (
    <div className="user_table_parent">
      <div className="header">
        <ul>
          <li>UUID</li>
          <li>Name</li>
          <li>Email</li>
          <li>Password</li>
          <li>Actions</li>
        </ul>
      </div>
      {props.users.map((user) => (
        <UserDataLine user={user}></UserDataLine>
      ))}
    </div>
  );
}
