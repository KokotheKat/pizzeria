import '../styles/NavButton.scss';

export const NavButton = ({ children }) => {
  return (
    <a className='NavButtonLink' href="#">
      <button className='NavButton'>{children}</button>

    </a>
  );
};

