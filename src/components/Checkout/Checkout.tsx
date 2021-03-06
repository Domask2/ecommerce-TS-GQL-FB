import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { selectCartItems, selectCartTotal } from '../../redux/Cart/cart.selectors';
import { createStructuredSelector } from 'reselect';
import { Wrapper } from './Checkout.style';
import { IProduct } from '../../redux/Products/products.types';
import Button from '../forms/Button/Button';
import Item from './Item/Item';

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

const Checkout = () => {
  const history = useHistory();
  const { cartItems, total }: { cartItems: IProduct[]; total: number } = useSelector(mapState);

  const errMsg = 'You have no items im your cart.';
  return (
    <Wrapper>
      <h1>Checkout</h1>

      <div className="cart">
        {cartItems.length > 0 ? (
          <table style={{ border: 0 }} cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <table
                  className="checkoutHeader"
                  style={{ border: 0 }}
                  cellPadding="10"
                  cellSpacing="0">
                  <tbody>
                    <tr>
                      <th>Product</th>
                      <th>Description</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Remove</th>
                    </tr>
                  </tbody>
                </table>
              </tr>

              <tr>
                <table style={{ border: 0 }} cellPadding="0" cellSpacing="0">
                  <tbody>
                    {cartItems.map((item: IProduct, pos: number) => {
                      return (
                        <tr key={pos}>
                          <td>
                            <Item {...item} />
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </tr>

              <tr>
                <table style={{ border: 0 }} cellPadding="0" cellSpacing="10">
                  <tr>
                    <td>
                      <h3>Total: {total}</h3>
                    </td>
                  </tr>
                  <tr>
                    <table style={{ border: 0 }} cellPadding="10" cellSpacing="0">
                      <tbody>
                        <tr>
                          <td>
                            <Button pd="8px" wd="100%" onClick={() => history.goBack()}>
                              Continue Shopping
                            </Button>
                          </td>
                          <td>
                            <Button onClick={() => history.push('/payment')} pd="8px" wd="100%">
                              Checkout
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </tr>
                </table>
              </tr>
            </tbody>
          </table>
        ) : (
          <p>{errMsg}</p>
        )}
      </div>
    </Wrapper>
  );
};

export default Checkout;
