import Header from '../../components/header/header';
import React, { useState } from 'react';
import serachIcon from '../../asset/searchIcon.png';
import filterIcon from '../../asset/filterIcon.png';
import addButton from '../../asset/addButton.png';
import arrowdown from '../../asset/arrowdown.png';
import './style.css';
import { useNavigate } from 'react-router-dom';
function ExpiryLabel({ expiry }) {
  const daysLeft = parseInt(expiry.match(/\d+/)[0]);
  let labelStyle = {};

  if (daysLeft < 10) {
    labelStyle = { color: '#e67e22' };
  } else {
    labelStyle = { color: 'green', backgroundColor: 'lightgreen' };
  }
  return (
    <div
      style={{
        color: daysLeft < 10 ? '#e67e22' : 'inherit',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '50%',
        marginLeft: '40%',
      }}
    >
      {expiry}
      <div
        style={{
          color: '#17a85f',
          borderRadius: '15px',
          backgroundColor: '#c8e6d8',
        }}
      >
        {daysLeft > 10 ? 'new' : ''}
      </div>
    </div>
  );
}
export default function CreateOrder() {
  const initialData = [
    {
      productInfo: '2 Classic Collection Garage Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 6 days',
    },
    {
      productInfo: 'Canyon Ridge® Collection ',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 6 days',
    },
    {
      productInfo: 'Hardware Special - Stock.',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 90 days',
    },
    {
      productInfo: 'Ultra-Grain® Series with Intellicore®',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 90 days',
    },
    {
      productInfo: 'W4.HB.8.0.7.0.None.Sol - WH.9.G.2J.B..S',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 5 days',
    },
    {
      productInfo: 'Hardware Special - Stock.',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 6 days',
    },
    {
      productInfo: 'Hardware Special - Stock.',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 90 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 90 days',
    },
    {
      productInfo: 'W4.HB.8.0.7.0.None.Sol',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 5 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 6 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 3 days',
    },
    {
      productInfo: 'Series with Intellicore®',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 9 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 91 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 100 days',
    },
    {
      productInfo: 'Ultra-Grain® Series with Intellicore®',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Manoj',
      expiry: 'Expires in 33 days',
    },
    {
      productInfo: 'Series with Intellicore®',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Monika',
      expiry: 'Expires in 16 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Tej',
      expiry: 'Expires in 26 days',
    },
    {
      productInfo: '2 Entry Door',
      cartName: 'carter_classic',
      shippingPoint: 'Russia Port',
      createdBy: 'Shail',
      expiry: 'Expires in 36 days',
    },
  ];
  const [data, setData] = useState(initialData);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query);
    const filteredData = initialData.filter((row) =>
      Object.values(row).some((value) =>
        value.toLowerCase().includes(query.toLowerCase())
      )
    );
    setData(filteredData);
  };

  let navigate = useNavigate();
  const handleButtonClick = () => {
    // Navigate to the next page
    navigate('selectCategory'); // Replace '/next-page' with the path of your next page
  };

  return (
    <div style={{ backgroundColor: '#f6f8fa' }}>
      <Header
        isFirstPage={true}
        showBackButton={false}
        className='header-style'
      />
      <div className='buttons-bar'>
        <div className='left-button'>
          <div className='buttons' onClick={() => {}}>
            Active Carts
          </div>
          <div className='buttons' onClick={() => {}}>
            Archived Carts
          </div>
        </div>
        <div className='search-bar'>
          <div className='search-box'>
            <input
              className='search-input'
              type='text'
              placeholder='Search...'
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
            />
            <img src={serachIcon} alt='search-icon' className='search-icon' />
          </div>
          <div
            className='filter-button'
            onClick={() => {
              console.log('clicked');
            }}
          >
            <img
              src={filterIcon} // Replace with the actual filter icon image
              alt='filter-icon'
              className='filter-icon'
            />
            Filter
          </div>
        </div>
      </div>
      <div className='table-line'>
        <div className='line'></div>
      </div>
      <div className='table-container'>
        <div className='table-header'>
          <div style={{ textAlign: 'left' }}>
            Product Information <img src={arrowdown} alt='arrow-down' />
          </div>
          <div>Cart Name</div>
          <div>Shipping Point</div>
          <div>Created by</div>
          <div>Expiry</div>
        </div>
        <div className='table-body'>
          {data.map((row, index) => (
            <div
              key={index}
              className={
                index % 2 === 0 ? 'table-row even-row' : 'table-row odd-row'
              }
            >
              <div style={{ textAlign: 'left' }}>{row.productInfo}</div>
              <div>{row.cartName}</div>
              <div>{row.shippingPoint}</div>
              <div>{row.createdBy}</div>
              <div>
                <ExpiryLabel expiry={row.expiry} />
              </div>
            </div>
          ))}
        </div>
        <div className='bottom-right-image'>
          <img
            className='add-button'
            src={addButton} // Replace with the actual image source
            alt='bottom-right'
            onClick={handleButtonClick}
          />
        </div>
      </div>
    </div>
  );
}
