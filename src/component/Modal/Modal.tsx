import { FC, ReactNode } from 'react';
import ReactDOM from 'react-dom';
import { Button } from '../UI/Button';

import './modal.css';

interface ModalProps {
  children?: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  timeLeft: number;
  handleConfirm: () => void;
}

export const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onClose,
  timeLeft,
  handleConfirm,
}) => {
  if (!isOpen) {
    return null;
  }

  return ReactDOM.createPortal(
    <div className='modal'>
      <div
        onClick={onClose}
        className='close'></div>
      <div className='modal__content'>
        <h2>Согласие с правилами</h2>
        <p>
          Для данной функции применяются особые условия и правила пользования,
          их необходимо подтвердить, нажав на кнопку Подтвердить
        </p>
        <div className='modal__containder'>
          <Button onClick={onClose}>Отмена</Button>
          <Button
            disabled={timeLeft > 0}
            onClick={handleConfirm}>
            Подтвердить ({timeLeft})
          </Button>
        </div>
        {children}
      </div>
    </div>,
    document.body
  );
};
