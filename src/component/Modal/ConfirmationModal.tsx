import { useState, useEffect, FC, Fragment } from 'react';
import { Modal } from '.';
import { Button } from '../UI/Button';

interface ConfirmationModalProps {
  onConfirm: () => void;
}

export const ConfirmationModal: FC<ConfirmationModalProps> = ({
  onConfirm,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState(5);
  const [actionConfirmed, setActionConfirmed] = useState(false);

  useEffect(() => {
    let timeoutId: number | null = null;

    if (isOpen && timeLeft > 0) {
      timeoutId = setTimeout(() => {
        setTimeLeft((prevTimeLeft) => prevTimeLeft - 1);
      }, 1000);
    } else if (!isOpen || timeLeft === 0) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, [isOpen, timeLeft]);

  const handleOpen = () => {
    if (!actionConfirmed) {
      setTimeLeft(5);
      setIsOpen(true);
    } else {
      onConfirm();
    }
  };

  const handleClose = () => {
    setTimeLeft(5);
    setIsOpen(false);
    setActionConfirmed(false);
  };

  const handleConfirm = () => {
    setIsOpen(false);
    setActionConfirmed(true);
    onConfirm();
  };

  return (
    <Fragment>
      <Button onClick={handleOpen}>Выполнить действие</Button>
      <Modal
        handleConfirm={handleConfirm}
        timeLeft={timeLeft}
        isOpen={isOpen}
        onClose={handleClose}></Modal>
    </Fragment>
  );
};
