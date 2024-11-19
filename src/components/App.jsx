import Profile from "./Profile/Profile";
import profileData from "./../userData.json";

import FriendList from "./FriendList/FriendList";
import friends from "./../friends.json";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import transactions from "./../transactions.json";
const App = () => {
  return (
    <div>
      <Profile user={profileData}></Profile>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
};
export default App;