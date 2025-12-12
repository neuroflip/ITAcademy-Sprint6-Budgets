import type { ModalInfoProps } from "./ModalInfo.types";

import './styles/modalInfo.css';

const ModalInfo = ({ message, isOpen, onClose }: ModalInfoProps) => {
  const onCloseHandler = () => {
    onClose();
  }

  return <dialog data-testid="modalContainer" className={ `modal ${isOpen ? 'block' : 'hidden'}` }>
    <div className="modalContent">
      <p>{ message }</p>
      <span className="close" onClick={ onCloseHandler } aria-label="Close button">X</span>
    </div>
  </dialog>
}

export default ModalInfo;