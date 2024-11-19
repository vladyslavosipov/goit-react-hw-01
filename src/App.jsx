// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import 'modern-normalize/modern-normalize.css';
import Profile from './components/Profile/Profile'
import userData from '../src/userData.json'
import './App.css'
import friends from './friends.json'
import FriendList from './components/FriendList/FriendList';
import { transactions } from './transactions.json'
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

const App = () => {
  return (
    <>
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
};

export default App