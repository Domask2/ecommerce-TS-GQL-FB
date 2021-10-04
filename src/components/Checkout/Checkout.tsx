import React from "react";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import { Wrapper } from "./Checkout.style";
import { IProduct } from "../../redux/Products/products.types";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
});

const Checkout = () => {
  const { cartItems }: { cartItems: IProduct[] } = useSelector(mapState);
  return (
    <Wrapper>
      <h1>Checkout</h1>

      <div className="cart">
        <table style={{ border: 0 }} cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <table
                className="checkoutHeader"
                style={{ border: 0 }}
                cellPadding="0"
                cellSpacing="0"
              >
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
                  <tr>
                    <td>
                      {cartItems!.map((item:IProduct,pos:number) => {
                        return (
                          <tr key={pos}>
                            <td>
                              {item.productName}
                            </td>
                          </tr>
                        )
                      })}
                    </td>
                  </tr>
                </tbody>
              </table>
            </tr>
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Checkout;
