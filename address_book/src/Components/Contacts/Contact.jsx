import { faEdit, faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import AddContactForm from '../AddContactForm';

const Contact = ({ addContact, contact, update }) => {
  const [toggleExpand, setToggleExpand] = useState(false);
  const [toggleEdit, setToggleEdit] = useState(false);

  const handleExpand = (e) => {
    const target = e.target.className;
    if (target?.constructor?.name === "String") {
      setToggleExpand(!toggleExpand);
    }
  }

  const handleContactFavorites = (e) => {
    update.favorites(contact.id, contact.favorite);
  }

  const handleDeleteContact = (e) => {
    update.delete(contact.id, contact.favorite);
  }

  const renderEdit = () => {
    return (
      <div className="Contact-short" onClick={handleExpand}>
        <AddContactForm addContact={addContact} contact={contact} toggleEdit={setToggleEdit} />
              
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleContactFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit"><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash" onClick={handleDeleteContact} ><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  const renderExpanded = () => {
    return (
      <div className="Contact-short" onClick={handleExpand}>
        <div className="Contact-info">
          {contact.name} <br /> 
          {contact.addressOne} <br /> 
          {contact.addressTwo} <br /> 
          {contact.city}, {contact.state} {contact.zip} <br /> 
          {contact.email} <br /> 
          {contact.phone}  
        </div>
      
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleContactFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit" onClick={e => setToggleEdit(!toggleEdit)} ><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash" onClick={handleDeleteContact} ><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  const renderShort = () => {
    return (
      <div className="Contact-short" onClick={handleExpand} >
        <div className="Contact-info">{contact.name} <br /> <span className="font-italic text-xs">-{contact.city} {contact.state}</span></div>
      
        <div className="address-icons">
          <span className={(!contact.favorite) ? "icon-heart" : "icon-heart-white"} onClick={handleContactFavorites} >
            <FontAwesomeIcon icon={faHeart} /></span> &nbsp;
          <span className="icon-edit" onClick={e => setToggleEdit(!toggleEdit)} ><FontAwesomeIcon icon={faEdit} /></span> &nbsp;
          <span className="icon-trash" onClick={handleDeleteContact} ><FontAwesomeIcon icon={faTrash} /></span>
        </div>
      </div>
    );
  }

  return (
    <div className="Contact p-2">
      {(!toggleEdit) ? ((!toggleExpand) ? renderShort() : renderExpanded()) : renderEdit()}
    </div>
  )
}

export default Contact;
