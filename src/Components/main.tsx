import React from 'react';
import MainHOC from './HOC/main';
import StockList from './HOC/StockList';
import UserList from './HOC/UsersList';
import UseEffect from './hooks/UseEfffect';

const StocksData = [
  {
      id: 1,
      name: 'TCS'
  },
  {
      id: 2,
      name: 'Infosys'
  },
  {
      id: 3,
      name: 'Reliance'
  }
];
const UsersData = [
  {
      id: 1,
      name: 'Krunal'
        
  },
  {
      id: 2,
      name: 'Ankit'
  },
  {
      id: 3,
      name: 'Rushabh'
  }
];

const Stocks = MainHOC(
  StockList,
  StocksData
);

const Users = MainHOC(
  UserList,
  UsersData
);

function Main() {
    return (
      <>
        <div>Main</div>
        <Users />
        <UseEffect />
      </>
  )
}

export default Main;