import { useEffect, useState } from "react";
import "./chat.table.component.css";
import ReportChatApi from "../../services/ReportChat.api";

export default function ReportChatTableComponent() {
  const [reports, setReports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await ReportChatApi.getReports();

      console.log(res);
      setReports(res);
    };

    fetchData();
  }, []);

  const convertDate = (date) => {
    const [dateString, timeString] = date.split("T");
    const [year, month, day] = dateString.split("-");
    const [hour, minute] = timeString.split(":");

    return `${day}/${month}/${year} ${hour}:${minute}`;
  };

  return (
    <div className="report_chat_table_parent">
      <table>
        <thead>
          <td>UUID</td>
          <td>Reported by</td>
          <td>chat name</td>
          <td>Reported at</td>
          <td>Status</td>
        </thead>
        <tbody>
          {reports?.map((report) => (
            <tr>
              <td>{report.uuid}</td>
              <td>{report.creator.name}</td>
              <td>{report.chat.uuid}</td>
              <td>{convertDate(report.createdAt)}</td>
              <td>{report.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
