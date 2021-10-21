import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from '../../redux/Orders/orders.action';

import { Wrapper } from './Dashboard.style';

const mapState = ({ user }: any) => ({
  currentUser: user.currentUser,
});

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector(mapState);

  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id));
  }, []);

  return (
    <div>
      <h1>Order History</h1>
    </div>
  );
};

export default Dashboard;
