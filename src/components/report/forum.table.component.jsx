import "./forum.table.component.css";
import ReportForumApi from "../../services/ReportForum.api";
import { useEffect, useState } from "react";

export default function ReportForumTableComponent() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setReports(await ReportForumApi.getAllReports());
    };

    fetchData();
  }, []);

  const convertDate = (date) => {
    const [dateString, timeString] = date.split("T");
    const [year, month, day] = dateString.split("-");
    const [hour, minute,] = timeString.split(":");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <div className="report_forum_table_parent">
      <table>
        <thead>
          <td>UUID</td>
          <td>Reported by</td>
          <td>Forum name</td>
          <td>Reported at</td>
          <td>Status</td>
        </thead>
        <tbody>
          {reports?.map((report) => (
            <tr>
              <td>{report.uuid}</td>
              <td>{report.creator.name}</td>
              <td>{report.forum.name}</td>
              <td>{convertDate(report.createdAt)}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
