import { Link, BrowserRouter as Router } from "react-router-dom";
import icons, { Logo, MoreProfile } from "../../icons/icons";
import "./sidebar.scss";
import pp from "../../images/pp.jpg";

const Sidebar: React.FC = () => {
  return (
    <header id="sidebar">
      <main>
        <Router>
          <Link to="/">
            <Logo />
          </Link>
        </Router>
        <section className="nav-items">
          <ul>
            {icons.map((icon) => (
              <li key={icon.id}>
                <Router>
                  <Link to={icon.path}>
                    {icon.element}
                    <span className="segoe-base rgl-19">{icon.title}</span>
                  </Link>
                </Router>
              </li>
            ))}
            <li className="btn-tweet">
              <button className="rgl-15">Tweet</button>
            </li>
          </ul>
        </section>
        <footer>
          <div className="f-left">
            <img src={pp} alt="pp" />
          </div>
          <div className="f-mid">
            <p className="segoe-base rgl-14">Muhammed Akbulut</p>
            <p className="rgl-14">@muhammedakb</p>
          </div>
          <div className="f-right">
            <MoreProfile />
          </div>
        </footer>
      </main>
    </header>
  );
};

export default Sidebar;
