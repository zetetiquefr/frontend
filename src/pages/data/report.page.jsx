import ReportForumTableComponent from "../../components/report/forum.table.component";
import ReportChatTableComponent from "../../components/report/chat.table.component";
import "./report.page.css";

export default function DataReport() {
  return (
    <div className="data_report_parent">
      <header>
        <h1>Report</h1>
      </header>
      <div className="columns">
        <div className="forum">
          <h1>Forum report</h1>
          <ReportForumTableComponent />
        </div>
        <div className="chat">
          <h1>Chat report </h1>
          <ReportChatTableComponent />
        </div>
      </div>
    </div>
  );
}
