import Button from '../../sharedComponents/Button';
import './Header.css';

function Header({ toggleModal }) {
  return (
    <div className="header-container">
      <h6 className='header-title'>My Tasks</h6>
      <Button btnClick={toggleModal} btnId={'add-btn'} btnText={'Add New Task'} />
    </div>
  );
}

export default Header;
