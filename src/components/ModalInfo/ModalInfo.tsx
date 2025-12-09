import type { ModalInfoProps } from "./ModalInfo.types";

import './styles/modalInfo.css';

const ModalInfo = ({ message, isOpen, onClose }: ModalInfoProps) => {
  const onCloseHandler = () => {
    onClose();
  }

  return <div data-testid="modalContainer" className={ `modal ${isOpen ? 'block' : 'hidden'}` }>
    <div className="modal-content rounded-xl">
      <span className="close" onClick={ onCloseHandler } aria-label="Close button">X</span>
      <p>{ message }</p>
    </div>
  </div>
}

export default ModalInfo;