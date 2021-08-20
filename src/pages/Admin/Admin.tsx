import { useState } from 'react';

import { Wrapper } from './Admin.style';

import Modal from './../../components/Modal/Modal';
import FormInput from './../../components/forms/FormInput/FormInput';
import FormSelect from './../../components/forms/FormSelect/FormSelect';
import Button from './../../components/forms/Button/Button';

const Admin: React.FC = () => {
  const  [ hideModal, setHideModal ] = useState<boolean>(true);
  const  [ productCategory, setProductCategory ] = useState<string>('');
  const  [ productName, setProductName ] = useState<string>('');
  const  [ productThumbnail, setProductThumbnail ] = useState<string>('');
  const  [ productPrice, setProductPrice ] = useState<string>('');
  const  [ productDesc, setProductDesc ] = useState<string>('');

  const handleSubmit = () => {

  }

  const handleLoadMore = () => {

  }

  const toggleModal = () => setHideModal(!hideModal);

  const configModal = {
    hideModal,
    toggleModal
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
            <Button onClick={() => toggleModal()}>
              Add new product
            </Button>
          </li>
        </ul>
      </div>

      <Modal {...configModal}>
        <div className="addNewProductForm">
          <form onSubmit={handleSubmit}>

            <h2>
              Add new product
            </h2>

            <FormSelect
              label="Category"
              options={[{
                value: "mens",
                name: "Mens"
              }, {
                value: "womens",
                name: "Womens"
              }]}
              handleChange={e => setProductCategory(e.target.value)}
            />

            <FormInput
              label="Name"
              type="text"
              value={productName}
              handleChange={e => setProductName(e.target.value)}
            />

            <FormInput
              label="Main image URL"
              type="url"
              value={productThumbnail}
              handleChange={e => setProductThumbnail(e.target.value)}
            />

            <FormInput
              label="Price"
              type="number"
              min="0.00"
              max="10000.00"
              step="0.01"
              value={productPrice}
              handleChange={e => setProductPrice(e.target.value)}
            />

            {/* <CKEditor
              onChange={evt => setProductDesc(evt.editor.getData())}
            /> */}

            <br />

            <Button type="submit">
              Add product
            </Button>

          </form>
        </div>
      </Modal>

      <div className="manageProducts">

        {/* <table border="0" cellPadding="0" cellSpacing="0">
          <tbody>
            <tr>
              <th>
                <h1>
                  Manage Products
                </h1>
              </th>
            </tr>
            <tr>
              <td>
                <table className="results" border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    {(Array.isArray(data) && data.length > 0) && data.map((product, index) => {
                      const {
                        productName,
                        productThumbnail,
                        productPrice,
                        documentID
                      } = product;

                      return (
                        <tr key={index}>
                          <td>
                            <img className="thumb" src={productThumbnail} />
                          </td>
                          <td>
                            {productName}
                          </td>
                          <td>
                            £{productPrice}
                          </td>
                          <td>
                            <Button onClick={() => dispatch(deleteProductStart(documentID))}>
                              Delete
                            </Button>
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </td>
            </tr>
            <tr>
              <td>

              </td>
            </tr>
            <tr>
              <td>
                <table border="0" cellPadding="10" cellSpacing="0">
                  <tbody>
                    <tr>
                      <td>
                        {!isLastPage && (
                          <LoadMore {...configLoadMore} />
                        )}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </td>
            </tr>
          </tbody>
        </table> */}

      </div>

    </div>
    </Wrapper>
  );
};

export default Admin;