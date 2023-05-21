import "./home.page.css";

export default function DataHomePage() {
  return (
    <div className="data_home_page">
      <header>Sites Datas and Statistics</header>
      <div className="columns">
        <div className="main">
          <a href="/data/report">
            <button className="btn btn-primary">Report</button>
          </a>
        </div>
      </div>
    </div>
  );
}
