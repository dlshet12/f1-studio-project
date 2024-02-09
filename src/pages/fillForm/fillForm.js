import React, { useState } from 'react';
import Header from '../../components/header/header';
import arrowNext from '../../asset/arrowNext.png';
import questionTag from '../../asset/question.png';
import { useNavigate } from 'react-router-dom';
import ButtonSection from '../../components/button/button';
import './fillstyle.css';
export default function FillForm() {
  let navigate = useNavigate();
  const handleConfigure = () => {
    navigate('/placeOrder');
  };
  const Dropdown = ({ label, showQuestionTag, options, updateProgress }) => {
    const [isOptionsVisible, setOptionsVisible] = useState(false);
    const [selectedOption, setSelectedOption] = useState(
      options[0] || 'Select an option'
    );

    const toggleOptions = () => {
      setOptionsVisible(!isOptionsVisible);
    };

    const selectOption = (option) => {
      console.log('Selected option:', option);
      setSelectedOption(option);
      setOptionsVisible(false);
      updateProgress(); // Call the updateProgress function passed as a prop
    };

    return (
      <div className='dropdown-container'>
        <div className='label-container'>
          <div className='label'>{label}</div>
          {showQuestionTag && (
            <img
              className='question-tag'
              src={questionTag}
              alt='question-tag'
            />
          )}
        </div>
        <div className='dropdown'>
          <div className='selected-option' onClick={toggleOptions}>
            {selectedOption}
          </div>
          {isOptionsVisible && (
            <div className='dropdown-options'>
              {options.map((option, index) => (
                <div
                  className='dropdown-option'
                  key={index}
                  onClick={() => selectOption(option)}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
          <img
            className='arrow-down'
            src={arrowNext}
            alt='arrow-down'
            onClick={toggleOptions}
          />
        </div>
      </div>
    );
  };

  const [progress, setProgress] = useState(0);

  const updateProgress = () => {
    // Increment the progress by 25% for each section completion
    setProgress((prevProgress) => prevProgress + 25);
  };
  const [checkboxes, setCheckboxes] = useState({
    'Extra Strut': false,
    'Spade Strap Hinge': false,
    '14 GA Quiet Hinge': false,
    'Light Seal Kit': false,
    'Less Bottom Astragal': false,
    'Medallion Hardware': false,
    'Light Seal Kit': false,
    '2 Spear Lift Handles': false,
    checkbox9: false,
    // Add more checkboxes as needed
  });

  const handleCheckboxChange = (checkboxName) => {
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [checkboxName]: !prevCheckboxes[checkboxName],
    }));
  };

  const checkboxStyle = {
    margin: '5px',
  };
  return (
    <div>
      <Header
        isFirstPage={false}
        title={'Configure a new door'}
        showBackButton={true}
      />
      <div className='container-body'>
        {/* progress bar */}

        <div
          className='progress-bar'
          style={{
            width: '40%',
            display: 'flex',
            marginLeft: '30%',
            flexDirection: 'column',
            marginTop: '30px',
            marginBottom: '15px',
          }}
        >
          <div
            style={{
              height: '6px',
              width: `${progress}%`,
              background: 'green',
              transition: 'width 0.5s ease',
            }}
          ></div>
        </div>
        <div
          style={{ width: '100%', justifyContent: 'center', display: 'flex' }}
        >
          <div> {progress}% Completed</div>
        </div>

        <div className='parent-container'>
          <div className='wrap-container'>
            <div className='section-heading'>Layout Options</div>

            <div className='dropdown-section'>
              <Dropdown
                label={'Assembly Type'}
                showQuestionTag={false}
                options={['residential', 'Option 2', 'Option 3']}
              />
              {/* measure section */}
              <div className='measure-section'>
                <div className='label'>
                  Measure Size
                  <img
                    style={{ marginLeft: '10px' }}
                    src={questionTag}
                    alt='question-tag'
                  />
                </div>
                <div className='measure-child'>
                  <div className='measure-width'>
                    <div className='widtharea'>
                      <div style={{}}>Width</div>
                      <div className='measureWidthRow'>
                        <Dropdown
                          label={''}
                          showQuestionTag={false}
                          options={['81 ft', '81 ft']}
                          updateProgress={updateProgress}
                        />
                      </div>
                      <div className='measureWidthRow'>
                        <Dropdown
                          label={''}
                          showQuestionTag={false}
                          options={['2 in', 'o in']}
                          updateProgress={updateProgress}
                        />
                      </div>
                    </div>
                  </div>
                  <div className='measure-width'>
                    <div className='widtharea'>
                      <div>Height</div>
                      <div className='measureWidthRow'>
                        <Dropdown
                          label={''}
                          showQuestionTag={false}
                          options={['2 in', '0 in']}
                        />
                      </div>
                      <div className='measureWidthRow'>
                        <Dropdown
                          label={''}
                          showQuestionTag={false}
                          options={['3 in', '2 in']}
                          updateProgress={updateProgress}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <Dropdown
                label={'Windcode'}
                showQuestionTag={true}
                options={['Residential Door', 'Option 2', 'Option 3']}
                updateProgress={updateProgress}
              />
              <Dropdown
                label={'Design'}
                showQuestionTag={true}
                options={['Residential Door', 'Option 2', 'Option 3']}
                updateProgress={updateProgress}
              />
              <Dropdown
                label={'color'}
                showQuestionTag={true}
                options={['Residential Door', 'Option 2', 'Option 3']}
                updateProgress={updateProgress}
              />
            </div>
          </div>
        </div>
        <div className='parent-container'>
          <div className='wrap-container'>
            <div className='section-heading'>Window Options</div>
            <div className='dropdown-section'>
              <Dropdown
                label={'Select Category '}
                showQuestionTag={false}
                options={['Residential Door']}
              />
              <Dropdown
                label={'Select Series'}
                showQuestionTag={true}
                options={['Canyon Ridge®️ Collection']}
              />
              <Dropdown
                label={'DoorType'}
                showQuestionTag={true}
                options={['CAN212']}
                updateProgress={updateProgress}
              />
            </div>
          </div>
        </div>

        <div className='parent-container'>
          <div className='wrap-container'>
            <div className='section-heading'>Track Options</div>
            <div className='dropdown-section'>
              <Dropdown
                label={'Select Category '}
                showQuestionTag={false}
                options={['Residential Door']}
              />
              <Dropdown
                label={'Select Series'}
                showQuestionTag={true}
                options={['Residential Door']}
              />
              <Dropdown
                label={'DoorType'}
                showQuestionTag={true}
                options={['Residential Door']}
              />
              <Dropdown
                label={'DoorType'}
                showQuestionTag={true}
                options={['Residential Door']}
              />
              <Dropdown
                label={'DoorType'}
                showQuestionTag={true}
                options={['Residential Door']}
                updateProgress={updateProgress}
              />
            </div>
          </div>
        </div>

        <div className='parent-container'>
          <div className='wrap-container' style={{}}>
            <div className='section-heading'>Other Options</div>
            <div className='dropdown-section'>
              <Dropdown
                label={'Select Category '}
                showQuestionTag={false}
                options={['Residential Door']}
              />
              <Dropdown
                label={'Select Series'}
                showQuestionTag={true}
                options={['Residential Door']}
              />
              <Dropdown
                label={'DoorType'}
                showQuestionTag={true}
                options={['Residential Door']}
                updateProgress={updateProgress}
              />
              {/* checkbox section */}
              <div className='checkbox-section'>
                <div className='checkbox-area'>Additional Options</div>
                <div className='checkbox'>
                  <div className='checkbox-row'>
                    <div className='checlist'>
                      {Object.entries(checkboxes).map(([name, isChecked]) => (
                        <label
                          key={name}
                          style={{
                            ...checkboxStyle,
                          }}
                        >
                          <input
                            style={{
                              backgroundColor: isChecked
                                ? 'brown'
                                : 'lightcoral',
                            }}
                            type='checkbox'
                            checked={isChecked}
                            onChange={() => handleCheckboxChange(name)}
                          />
                          {name}
                        </label>
                      ))}
                    </div>
                    <div
                      style={{
                        width: '50%',
                      }}
                    >
                      <Dropdown
                        label={''}
                        showQuestionTag={false}
                        options={['Residential Door']}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ButtonSection
          leftText=''
          buttons={[
            {
              label: 'PREVIEW',
              onClick: handleConfigure,
            },
            {
              label: 'CONFIGURE',
              onClick: handleConfigure,
            },
          ]}
        />
      </div>
    </div>
  );
}
