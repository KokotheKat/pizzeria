import { Link } from 'react-router-dom';
import '../styles/NavButton.scss';

export const NavButton = ({ url,children }) => {
  return (
    <Link className='NavButtonLink' to={url}>
      <button className='NavButton'>{children}</button>

    </Link>
  );
};

