import { ConfirmationModal } from './component/Modal';

function App() {
  const handleConfirm = () => {
    alert('Действие выполнено');
  };

  return (
    <div className='hero'>
      <p className='read-the-docs'>Нажмите на кнопку</p>
      <ConfirmationModal onConfirm={handleConfirm} />
    </div>
  );
}

export default App;
