import Header from '../../components/header/header';
import arrowNext from '../../asset/arrowNext.png';
import questionTag from '../../asset/question.png';
import './configurestyle.css';
import { useNavigate } from 'react-router-dom';
import ButtonSection from '../../components/button/button';
export default function ConfigureDoor() {
  let navigate = useNavigate();
  const handleConfigure = () => {
    navigate('/fillform');
  };
  const Dropdown = ({ label, inputs, showQuestionTag }) => (
    <div className='dropdownSection'>
      <div className='labelarea'>
        <div className='label-name'>{label}</div>
        {showQuestionTag && (
          <img className='question' las src={questionTag} alt='question-tag' />
        )}
      </div>
      <div className='dropdownInput' style={{ backgroundColor: '#ffffff' }}>
        <div>{inputs}</div>
        <img className='arrowdown' src={arrowNext} alt='arrow-down' />
      </div>
    </div>
  );
  return (
    <div>
      <Header
        isFirstPage={false}
        title={'Configure a new door'}
        showBackButton={true}
      />
      <div className='parentContainer'>
        <div className='wrapContainer'>
          <div className='dropdown-sectionarea'>
            <Dropdown
              label={'Select Category '}
              showQuestionTag={false}
              inputs={'Residential Door'}
            />
            <Dropdown
              label={'Select Series'}
              showQuestionTag={true}
              inputs={'Canyon Ridge®️ Collection'}
            />
            <Dropdown
              label={'DoorType'}
              showQuestionTag={true}
              inputs={'CAN212'}
            />
          </div>
        </div>
      </div>
      <ButtonSection
        leftText=''
        buttons={[{ label: 'CONFIGURE', onClick: handleConfigure }]}
      />
    </div>
  );
}
