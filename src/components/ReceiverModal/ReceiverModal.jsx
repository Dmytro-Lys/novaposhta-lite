import { useSelector, useDispatch } from 'react-redux';
import { getOpenReceiverModal } from 'redux/modals/selectors';
import { setOpenReceiverModal } from 'redux/modals/modalsSlice';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import { ReceiverForm } from 'components/ReceiverForm/ReceiverForm';


const ReceiverModal = () => {
  const dispatch = useDispatch()  
  
  const handleClose = () => dispatch(setOpenReceiverModal(false));
  const isOpen = useSelector(getOpenReceiverModal) 

  const handleClick = e => e.stopPropagation()

  return (
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        onClick={handleClick}
        open={isOpen}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={isOpen}>
          <Box sx={style}>
             <ReceiverForm/>
          </Box>
        </Fade>
      </Modal>
  );
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default ReceiverModal