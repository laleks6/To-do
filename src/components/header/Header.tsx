import { Link } from "react-router-dom";
import style from "./header.module.scss";
import icon from "../../assets/diary.png";

function Header() {
  return (
    <header className={style.header}>
      <Link to="/simple">Todo</Link>
      <Link to="/">
        <h1>
          <span>Todo</span>
          <img src={icon} alt="icon-home-page" />
        </h1>
      </Link>
      <Link to="/complex">Kanban</Link>
    </header>
  );
}

export default Header;
