import { useEffect, useState } from "react";
import "./forum.page.css";
import authApi from "../../services/Auth.api";
import Storage from "../../services/Storage";

function AdminForumPage() {
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

  if (!access) {
    return <div></div>;
  }
  return (
    <div>
      <h1>Admin Forum Page</h1>
    </div>
  );
}

export default AdminForumPage;
