import "./home.page.css";
import beerLogo from "../../res/beer.png";
import LoginComponent from "../../components/user/login/login.component";

function HomePage() {
  return (
    <div className="parent_div">
      <div className=""></div>
      <h1 className="title">
        Zet <span className="blue">F</span>
        <span className="red">R</span>
      </h1>
      <div className="description">
        <p className="white">On est Zététique ici.</p>
      </div>
      <div className="logo_div">
        <img className="beer_logo" src={beerLogo} alt="beer" />
      </div>
      <div className="login_form">
        <LoginComponent />
      </div>
    </div>
  );
}

export default HomePage;
