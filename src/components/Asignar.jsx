import React, {useState} from 'react';
import styled from 'styled-components';

const PopupOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
`;

const PopupContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
`;


const PopupButton = styled.button`
margin: 20px;
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
background-color: #007bff;
color: white;
border: none;
border-radius: 4px;
`;

export function Asignar({message}){
    const [popupOpen, setPopupOpen] = useState(false);

  const togglePopup = () => {
    setPopupOpen(!popupOpen);
  };
    return (
        <div>
        <PopupButton onClick={togglePopup}>Asignar</PopupButton>
        <PopupOverlay open={popupOpen}>
          <PopupContent>
            <h2>{message}</h2>
            <PopupButton onClick={togglePopup}>Seguir asignando</PopupButton>
          </PopupContent>
        </PopupOverlay>
      </div>
    )
}