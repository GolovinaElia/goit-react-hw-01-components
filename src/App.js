import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/Friend/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory';
import statisticalData from './statistical-data.json';
import user from './user.json';
import friends from './friends.json';
import transactions from './transactions.json';

const App = () => {
  return (
      <>
      <Profile
  avatar={user.avatar}
  name={user.name}
  tag={user.tag}
  location={user.location}
  stats={user.stats}
      />
      <Statistics title="Upload stats" stats={statisticalData} />;
      <Statistics stats={statisticalData}
      />
      <FriendList friends={friends}
      />
      <TransactionHistory items={transactions} />;
      </>
    )
}

export default App;