import "./home.page.css";
import authApi from "../../services/Auth.api";
import Storage from "../../services/Storage";
import { useEffect, useState } from "react";

function AdminHomePage() {
  let [access, setAccess] = useState(false);
  const token = Storage.getLoginToken();

  useEffect(() => {
    const fetchData = async (token) => {
      try {
        const res = await authApi.haveAccessToAdminPanel(token);

        setAccess(res);
      } catch (err) {
        console.log(err);
        setAccess(false);
      }
    };
    fetchData(token);
  }, [token]);
  if (!access) {
    return <div></div>;
  }
  return (
    <div className="admin_home_parent">
      <div></div>
      <div className="admin_home_main_div">
        <h1>Admin Home Page</h1>
        <div className="admin_home_selector">
          <ul>
            <li>
              <a href="/admin/user">
                <button className="btn btn-info">User</button>
              </a>
            </li>
            <li>
              <a href="/admin/forum">
                <button className="btn btn-info">Forum</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default AdminHomePage;
