import { Wrapper } from './Modal.style';

interface Props {
  children: JSX.Element;
  hideModal: any,
  toggleModal: any,
} 

const Modal: React.FC<Props> = ({ hideModal, toggleModal, children }) => {
  if (hideModal) return null;
  
  return (
    <Wrapper>
    <div className="modalOverlay" onClick={() => toggleModal()} />
      <div className="modalWrap">
        <div className="modal">
          {children}
        </div>
    </div>
    </Wrapper>
  );
};

export default Modal;