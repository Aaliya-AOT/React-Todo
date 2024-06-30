import React from 'react'
import '../deleteModal/DeleteModal.css'
import Button from '../../sharedComponents/Button'
import close from '../../assets/close.svg'

function DeleteModal({onClose,onDelete}) {
  return (
    <div className='delete-modal-container'>
        <div className='delete-modal-close'>
        <Button
          btnId={"close-btn"}
          btnClick={onClose}
          btnText={<img src={close}></img>}
        />
        </div>
        <div className='delete-modal-content'>
        <div className='delete-modal-title'>
            <h3 className='delete-title'>Delete Task?</h3>
        </div>
        <div className='delete-modal-body'>
            <p className='delete-message'>Are you sure you want to delete this task?</p>
        </div>
        <div className='delete-modal-footer'>
        <Button btnId={"delete-modal-cancel"} btnClick={onClose} btnText={"Cancel"} />
        <Button btnId={"delete-modal-confirm"} btnText={"Delete"} btnClick={()=>{onDelete(); onClose();}}/>
        </div>
        </div>
        
    </div>
  )
}

export default DeleteModal