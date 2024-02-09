import Header from '../../components/header/header';
import './selectstyle.css';
import arrowNext from '../../asset/arrowNext.png';
import { useNavigate } from 'react-router-dom';
export default function SelectCategory() {
  const Box = ({ title, subTitle }) => (
    <div className='box-container'>
      <div className='text-box'>
        <div className='title'>{title}</div>
        <div className='subTitle'>{subTitle}</div>
      </div>
      <div className='arrow-box'>
        <img src={arrowNext} alt='arrowNext' />
      </div>
    </div>
  );
  let navigate = useNavigate();
  const handleNext = () => {
    navigate('/configureDoor');
  };
  return (
    <div>
      <Header
        isFirstPage={false}
        title={'Create a new order'}
        showBackButton={true}
      />
      <div className='container'>
        <div className='onclick-box' onClick={handleNext}>
          <Box
            title='Configure your door from scratch'
            subTitle='Residential,Commerical,Entry doors'
          />
        </div>
        <Box title='Parts/Openers' subTitle='Order Parts and Openers' />
        <Box
          title='Direct Item Entry'
          subTitle='Order Parts/Openers using a Products ID'
        />
        <Box
          title='Choose from favourites'
          subTitle='Re-order door from your favourites'
        />
      </div>
    </div>
  );
}
