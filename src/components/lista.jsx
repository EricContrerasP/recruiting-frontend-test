import React from 'react';
import { Seleccionable } from './seleccionable';
import styled from 'styled-components';

const Table = styled.table`
  width: 50%;
  margin: 0 auto;
  border-collapse: collapse;
  margin-top: 50px;
`;

const StyledBoldText = styled.p`
  font-size: 18px;
  color: #333; 
  font-weight: bold; 
  text-align: center;
  margin-top: 50px;
`;

export function ListaSeleccionable({seleccion, facturasFiltradas, selectedId, setSelectedId, type}){
    const facturas = facturasFiltradas


    const handleSelection = (facturaId) => {
        setSelectedId(facturaId);
    };
    return (
        <div>
          <StyledBoldText> Selecciona una {seleccion}</StyledBoldText>
          <div>
            <Table>
              <tbody>
                {facturas.map((factura) => (
                  <Seleccionable  type={type} factura={factura} clase={seleccion} handleFacturaSelection={handleSelection} idSelected={selectedId}/>
                ))} 
              </tbody>
            </Table>
          </div>
        </div>
      );
  
} 

