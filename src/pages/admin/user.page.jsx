import "./user.page.css";
import UserApi from "../../services/User.api";
import Storage from "../../services/Storage";
import { useEffect, useState } from "react";
import UserDataTable from "../../components/user/data/table.component";
import authApi from "../../services/Auth.api";

function AdminUserPage() {
  const token = Storage.getLoginToken();
  let [access, setAccess] = useState(false);

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

  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(10);
  let [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async (token, page, limit) => {
      try {
        const res = await UserApi.getUsers(token, page, limit);

        setUsers(res);
      } catch (err) {
        console.log(err);
        setUsers([]);
      }
    };

    fetchData(token, page, limit);
  }, [page, limit, token]);

  if (!access) {
    return <div></div>;
  }

  return (
    <div className="admin_user_page">
      <div className="main">
        <div className="title">
          <h1>Admin User Page</h1>
        </div>
        <div className="table">
          <UserDataTable users={users}></UserDataTable>
        </div>
      </div>
    </div>
  );
}

export default AdminUserPage;
