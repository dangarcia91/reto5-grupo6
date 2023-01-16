import { useRef } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {BsList, BsXCircle} from 'react-icons/bs';

const Header = () => {

  const header = useRef();
  const modal = useRef();

  const showMenu = () => {
    header.current.classList.add('header--menu');
    modal.current.classList.add('modal--show');
  };

  const hideMenu = () => {
    header.current.classList.remove('header--menu');
    modal.current.classList.remove('modal--show');
  };

  return (
    <header
      className="header"
      ref={header}
    >
      <nav className="nav">
        <div className="container f-elements f-elements--header">
          <Link to="/">
            Quizziz
          </Link>
          <div
            className="modal modal--header"
            ref={modal}
            onClick={hideMenu}
          >
            <ul className="list list--header"
              onClick={e => e.stopPropagation()}
            >
              <li>
                <NavLink
                  to="/perfil"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Perfil
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/planes"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Planes</NavLink>
              </li>
              <li>
                <NavLink
                  to="/recursos"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Recursos
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/jugar-ahora"
                  className={({ isActive }) => isActive ? "list__link list__link--active" : "list__link"}
                  onClick={hideMenu}
                >
                  Jugar Ahora</NavLink>
              </li>
              <li className='icon icon--close' onClick={hideMenu}>
                <BsXCircle />
              </li>
            </ul>
          </div>
          <div className="f-elements f-elements--center">
            <button
              className='icon icon--menu'
              onClick={showMenu}
            >
              <BsList />
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;