import ButtonSection from '../../components/button/button';
import Header from '../../components/header/header';
import favorite from '../../asset/favorite.png';
import edit from '../../asset/edit.png';
import copy from '../../asset/copy.png';
import deleteIcon from '../../asset/delete.png';
import calender from '../../asset/calender.png';
import addmore from '../../asset/addmore.png';
import { useNavigate } from 'react-router-dom';
import './placestyle.css';
export default function PlaceOrder() {
  const handleAdd = () => {
    navigate('/selectCategory');
  };

  const handleButton2Click = () => {
    console.log('Button 2 clicked on this screen');
  };
  const navigate = useNavigate();

  return (
    <div>
      <Header
        isFirstPage={false}
        title={'Classic_John45012'}
        showBackButton={true}
      />
      <div className='body-parent'>
        <div className='body-container'>
          <div className='top-container'>
            <div
              style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '5px',
              }}
            >
              10' 0'' X 10' 0.0'' CAN211 CC W1 COMPLETE DOOR INTELLICORE
              OBSCURE, 5TH
              <br /> GENERATION FINISH WALDER DOOR
            </div>
            <div
              style={{ fontSize: '14px', fontWeight: '400', color: '#8894A0' }}
            >
              Job Name: Front door with glass
              <span style={{ color: '#66332B', fontWeight: '700' }}>
                {' '}
                Change
              </span>{' '}
              <br /> Product #CWD • Garage Door <br />
              Availability:
              <span style={{ fontWeight: '600', color: '#17A85F' }}>
                IN STOCK{' '}
              </span>{' '}
              (Available for Pickup)
            </div>
          </div>
          <div className='mid-top'>
            <div>
              <div className='number-button'>
                <div
                  style={{
                    backgroundColor: '#f6f8fa',
                    width: '38px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    border: 'solid 2px #8894a0',
                    borderRadius: '3px',
                  }}
                >
                  -
                </div>
                <div
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    width: '54px',
                    backgroundColor: '#f6f8fa',
                    border: 'solid 2px #8894a0',
                    borderRadius: '3px',
                  }}
                >
                  1
                </div>
                <div
                  style={{
                    backgroundColor: '#f6f8fa',
                    width: '38px',
                    justifyContent: 'center',
                    alignItems: 'center',
                    display: 'flex',
                    border: 'solid 2px #8894a0',
                    fontWeight: 'bolder',
                    borderRadius: '3px',
                  }}
                >
                  +
                </div>
              </div>
            </div>
            <div className='offerContent'>
              <div className='middle-content'>
                <div className='middleContent'>
                  Standard Multipe: .432 <div>Secondary Multipliers</div>
                  <div style={{ color: '#66332B', fontWeight: '500' }}>
                    {' '}
                    Applied 🫥 Apply MPQ
                  </div>
                </div>
              </div>
              <div className='right-content'>
                <div>
                  Net Price:{' '}
                  <span style={{ fontSize: '18px', fontWeight: '700' }}>
                    $2400.00
                  </span>
                  <div style={{ fontWeight: '16px' }}>
                    Unit Price:<span>$1200.00</span>
                  </div>
                </div>
                <div>View Price Details</div>
              </div>
            </div>
          </div>
          <div class='menu-container'>
            <div class='button'>
              <img className='icon' src={favorite} alt='Favorites' /> Favorites
            </div>
            <div class='button' onClick={() => navigate(-1)}>
              <img className='icon' src={edit} alt='edit' />
              Edit
            </div>
            <div class='button'>
              <img className='icon' src={copy} alt='copy' />
              Copy
            </div>
            <div class='button'>
              <img className='icon' src={deleteIcon} alt='Favorites' />
              Delete
            </div>
          </div>
        </div>
        <div className='body-container'>
          <div class='grid-container'>
            <div class='left-grid'>
              <div class='left-box'>
                <div>Change Delivery Date</div>
                <div className='input-calender'>
                  <div style={{ padding: '5px', color: '#e4e4e9' }}>
                    {' '}
                    Example: 31-DEC-1999
                  </div>
                  <div>
                    <img
                      src={calender}
                      alt='calender'
                      style={{ margin: '5px' }}
                    />
                  </div>
                </div>
                <div>Standard Delivery: Tue May 28 - 2019</div>
              </div>
              <div class='left-box'>
                <div>Change Delivery Date</div>
                <div className='input-calender'>
                  <div style={{ padding: '5px', color: '#e4e4e9' }}>
                    {' '}
                    Enter PO Number
                  </div>
                </div>
                <div>Standard Delivery: Tue May 28 - 2019</div>
              </div>
            </div>
            <div class='right-box'>
              <div style={{ marginBottom: '7px', fontSize: '14px' }}>
                Bill Summary
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <div className='right-billing'>
                  <div>Sub Total</div>
                  <div>$4500.00</div>
                </div>
                <div className='right-billing'>
                  <div>Energy Surcharge</div>
                  <div>$4500.00</div>
                </div>
                <div className='right-billing'>
                  <div>Sales Tax</div>
                  <div>$4500.00</div>
                </div>
                <div
                  className='right-billing'
                  style={{ fontSize: '16px', fontWeight: '600' }}
                >
                  <div>Total</div>
                  <div>$4500.00</div>
                </div>
              </div>
              <div className='border-line'></div>
              <div>
                <input type='checkbox' />
                <span style={{ fontSize: '16px', fontWeight: '600' }}>
                  Apply Tax
                </span>{' '}
                <br />
                <div
                  style={{
                    fontSize: '14px',
                    color: '#8894A0',
                    marginTop: '5px',
                  }}
                >
                  (The 1% iStore discount is calculated into the total price for
                  all doors and door parts. Please refer to the quote or order
                  acknowledgment for details.)
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='body-container'>
          <div class='billing-container'>
            <div class='box'>
              <div style={{ fontSize: '14px' }}>Billing TO</div>
              <div className='billing-alignment'>
                <div>
                  <span style={{ fontWeight: '600' }}> Bement Jared</span>{' '}
                  <br />
                  144 Curt Shores, 50, Madison Avenue <br />
                  Hixson - 42040 <br />
                  Contact: (123) 456 7890
                </div>
                <div style={{ color: '#66332B', fontWeight: '600' }}>
                  Change
                </div>
              </div>
            </div>
            {/* <div
              style={{
                height: '100px',
                width: '2px',
                backgroundColor: 'black',
              }}
            ></div> */}
            <div class='box'>
              <div style={{ fontSize: '14px' }}>Shipping TO</div>
              <div className='billing-alignment'>
                <div>
                  <span style={{ fontWeight: '600' }}> Bement Jared</span>{' '}
                  <br />
                  144 Curt Shores, 50, Madison Avenue <br />
                  Hixson - 42040 <br />
                  Contact: (123) 456 7890
                </div>
                <div style={{ color: '#66332B', fontWeight: '600' }}>
                  Change
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ButtonSection
        leftSubText='1 ITEM'
        buttons={[
          {
            label: 'ADD MORE',
            onClick: handleAdd,
          },
          {
            label: 'PLACE ORDER',
            onClick: handleButton2Click,
          },
        ]}
      />
    </div>
  );
}
