import icons, { Logo, MoreProfile } from "../../icons/icons";
import "./sidebar.scss";
import pp from "../../images/pp.jpg";

function Sidebar() {
  return (
    <header id="sidebar">
      <Logo />
      <section className="nav-items">
        <ul>
          {icons.map((icon) => (
            <li key={icon.id}>
              {icon.element}
              <span className=".segoe-base rgl-19">{icon.title}</span>
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
          <p>Davide Biscuso</p>
          <p>@biscuttu</p>
        </div>
        <div className="f-right">
          <MoreProfile />
        </div>
      </footer>
    </header>
  );
}

export default Sidebar;
