import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserOrderHistory } from '../../redux/Orders/orders.action';
import OrderHistory from '../../components/OrderHistory/OrderHistory';
import { Wrapper } from './Dashboard.style';

const mapState = ({ user, ordersData }: any) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.OrderHistory.data,
});

const Dashboard: React.FC = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);

  useEffect(() => {
    dispatch(getUserOrderHistory(currentUser.id));
  }, []);

  return (
    <div>
      <h1>Order History</h1>

      {/* <OrderHistory orders={orderHistory} /> */}
    </div>
  );
};

export default Dashboard;
