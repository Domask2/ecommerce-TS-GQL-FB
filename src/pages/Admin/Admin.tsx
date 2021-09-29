import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useTypedSelector } from "../../hooks/useTypeSelector";

import {
  addProductStart,
  fetchProductsStart,
  deleteProductStart,
} from "../../redux/Products/products.actions";

import { Wrapper } from "./Admin.style";

import Modal from "./../../components/Modal/Modal";
import FormInput from "./../../components/forms/FormInput/FormInput";
import FormSelect from "./../../components/forms/FormSelect/FormSelect";
import Button from "./../../components/forms/Button/Button";
import LoadMore from "../../components/LoadMore/LoadMore";
import { CKEditor } from "ckeditor4-react";

const Admin: React.FC = () => {
  const dispatch = useDispatch();
  const products: any = useTypedSelector((state) => state.products.products);

  const [hideModal, setHideModal] = useState<boolean>(true);
  const [productCategory, setProductCategory] = useState<string>("classic");
  const [productName, setProductName] = useState<string>("");
  const [productThumbnail, setProductThumbnail] = useState<string>("");
  const [productPrice, setProductPrice] = useState<string>("0");
  const [productDesc, setProductDesc] = useState<string>("");

  const { data, queryDoc, isLastPage }: any = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc
      })
    );

    resetForm();
  };

  const handleLoadMore = () => {
    dispatch(
      fetchProductsStart({ startAfterDocs: queryDoc, persistProducts: data })
    );
  };

  const toggleModal = () => setHideModal(!hideModal);

  const resetForm = () => {
    setHideModal(true);
    setProductCategory("classic");
    setProductName("");
    setProductThumbnail("");
    setProductPrice("0");
    setProductDesc("");
  };

  const configModal = {
    hideModal,
    toggleModal,
  };

  const configLoadMore = {
    onLoadMoreEvt: handleLoadMore,
  };

  return (
    <Wrapper>
      <div className="admin">
        <div className="callToActions">
          <ul>
            <li>
              <Button onClick={() => toggleModal()} pd="16px" wd="auto">
                Add New Product
              </Button>
            </li>
          </ul>
        </div>

        <Modal {...configModal}>
          <div className="addNewProductForm">
            <form onSubmit={handleSubmit}>
              <h2>Add new product</h2>

              <FormSelect
                label="Category"
                options={[
                  {
                    value: "classic",
                    name: "Classic",
                  },
                  {
                    value: "modern",
                    name: "Modern",
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />

              <FormInput
                label="Name"
                type="text"
                value={productName}
                handleChange={(e) => setProductName(e.target.value)}
              />

              <FormInput
                label="Main image URL"
                type="url"
                value={productThumbnail}
                handleChange={(e) => setProductThumbnail(e.target.value)}
              />

              <FormInput
                label="Price"
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                value={productPrice}
                handleChange={(e) => setProductPrice(e.target.value)}
              />

              <CKEditor
                onChange={(evt) => setProductDesc(evt.editor.getData())}
              />

              <br />

              <Button type="submit" pd="16px" wd="100%">
                Add product
              </Button>
            </form>
          </div>
        </Modal>

        <div className="manageProducts">
          <table style={{ border: 0 }} cellPadding="0" cellSpacing="0">
            <tbody>
              <tr>
                <th>
                  <h1>Manage Products</h1>
                </th>
              </tr>
              <tr>
                <td>
                  <table
                    className="results"
                    style={{ border: 0 }}
                    cellPadding="10"
                    cellSpacing="0"
                  >
                    <tbody>
                      {Array.isArray(data) &&
                        data.length > 0 &&
                        data.map((product: any, index: number) => {
                          const {
                            productName,
                            productThumbnail,
                            productPrice,
                            documentID,
                          } = product;

                          return (
                            <tr key={index}>
                              <td>
                                <img
                                  className="thumb"
                                  src={productThumbnail}
                                  alt="img"
                                />
                              </td>
                              <td>{productName}</td>
                              <td>£{productPrice}</td>
                              <td>
                                <Button
                                  pd="16px"
                                  wd="100%"
                                  onClick={() =>
                                    dispatch(deleteProductStart(documentID!))
                                  }
                                >
                                  Delete
                                </Button>
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td></td>
              </tr>
              <tr>
                <td>
                  <table style={{ border: 0 }} cellPadding="10" cellSpacing="0">
                    <tbody>
                      <tr>
                        <td>
                          {!isLastPage && <LoadMore {...configLoadMore} />}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Wrapper>
  );
};

export default Admin;
