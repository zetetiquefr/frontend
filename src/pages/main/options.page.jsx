import UserDataOption from "../../components/user/data/option.data.component";
import "./options.page.css";
import Storage from "../../services/Storage";
import { useEffect, useState } from "react";

export default function OptionPage() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const userInfo = Storage.getUserInfo();

    if (userInfo) {
      setUser(userInfo);
    } else {
      window.location.href = "/login";
    }
  }, []);

  return (
    <div className="option_parent">
      <header>
        <h1>Option page</h1>
      </header>
      <div className="body">
        <div className="main_column">
          <div className="main_column_title">
            <h2>Global options</h2>
          </div>
          <div className="user_data">
            <UserDataOption uuid={user.uuid} />
          </div>
        </div>
      </div>
    </div>
  );
}
