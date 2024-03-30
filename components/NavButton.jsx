import { Link } from 'react-router-dom';
import '../styles/NavButton.scss';

export const NavButton = ({ url, setNavIsOpen, children }) => {
  return (
    <Link className='NavButtonLink' to={url}>
      <button className='NavButton' onClick={() => { setNavIsOpen(false) }}>{children}</button>

    </Link>
  );
};

