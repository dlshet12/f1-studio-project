import './style.css';
import backArrow from '../../asset/backArrow.png';
import menuIcon from '../../asset/menuIcon.png';
import { useNavigate } from 'react-router-dom';
export default function Header({ isFirstPage, title, showBackButton }) {
  const navigate = useNavigate();
  const navigateToCarts = () => {
    navigate('/nocarts');
  };
  return (
    <div className={`header ${isFirstPage ? 'firstPage' : 'otherPage'}`}>
      {isFirstPage ? (
        <div className='centeredDivs'>
          <div onClick={navigateToCarts}>CARTS</div>
          <div onClick={navigateToCarts}>FAVORITES</div>
        </div>
      ) : null}
      <div className='justify-space'>
        <div className='alignStart'>
          {showBackButton && (
            <div onClick={() => window.history.back()}>
              <img className='gobackButton' src={backArrow} alt='back arrow' />
            </div>
          )}
          <div>{title}</div>
        </div>
        <div style={{ paddingRight: '15px' }}>
          <img src={menuIcon} alt='menu' />
        </div>
      </div>
    </div>
  );
}
