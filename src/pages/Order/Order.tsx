import React, { useEffect } from 'react';
import { useParams } from 'react-router';
import { getOrderDetailsStart } from '../../redux/Orders/orders.action';
import { useDispatch, useSelector } from 'react-redux';

const mapState = ({ ordersData }: any) => ({
  orderDetails: ordersData.orderDetails,
});

const Order = () => {
  const { orderID }: { orderID: string } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, []);

  return (
    <div>
      <h1>Order ID: #{orderID}</h1>

      <h3>Total: {orderTotal}</h3>
    </div>
  );
};

export default Order;
