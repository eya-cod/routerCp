
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const AddMovie = ({handleAdd}) => {
const [NewTitle, setNewTitle] = useState('')
const [Rating, setRating] = useState(1)
const [NewDescription, setNewDescription] = useState('')
const [Poster, setPoster] = useState('')

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  let NewMovie={
     title: NewTitle,
     rate: Rating,
     description: NewDescription,
     posterUrl: Poster,
  }
  const Add=()=>{
    handleAdd(NewMovie);
    toggle()
  }

  return (
    <div>
      <Button color="danger" onClick={toggle}>Add movie</Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <label>movie Title</label><input  type='text' onChange={(e)=>setNewTitle(e.target.value)} /> <br />
        <label>movie Rate</label> <input type='number' onChange={(e)=>setRating(e.target.value)} /><br /> 
        <label>movie descreption</label> <input type='text' onChange={(e)=>setNewDescription(e.target.value)}  /><br />
        <label>poster Url</label> <input type='text' onChange={(e)=>setPoster(e.target.value)} ></input>  </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={Add}>Submit</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default AddMovie;