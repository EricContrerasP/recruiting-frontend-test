import React from "react";
import styled from 'styled-components';

const StyledRectangle = styled.tr`
background-color: ${({ selected }) => (selected ? 'lightblue' : 'white')};
color: black;
width: 80%;
height: 20%;
border: 1px solid #ccc;
padding: 10px;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: flex-start;
margin: auto;
`;

const StyledPhrase = styled.div`
text-align: left;
margin: 5px 0;
`;


export function Seleccionable({type, clase, factura, handleFacturaSelection, idSelected}) {
    return (
        <StyledRectangle key={factura.id} selected={idSelected=== factura.id}>
                    <StyledPhrase>
                      <input
                        type={type}
                        name={clase}
                        checked={idSelected=== factura.id}
                        onChange={() => handleFacturaSelection(factura.id)}
                      /> 
                      {factura.id} ({factura.organization_id}) </StyledPhrase>
                     {factura.currency==="CLP" ? 
                    <StyledPhrase>${factura.amount} CLP ({factura.amount/800} USD)</StyledPhrase>: 
                    <StyledPhrase>${factura.amount*800} CLP ({factura.amount} USD)</StyledPhrase>} 
                    <StyledPhrase> {factura.type==="received" ? "recibida": factura.reference }</StyledPhrase>
                  </StyledRectangle>
    )
}