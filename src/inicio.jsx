import React, { useState } from 'react';
import { todoFacturas } from './data';
import { ListaSeleccionable } from './components/lista';

import { Asignar } from './components/Asignar';

export function Home() {
    const [facturas, setFacturas] = useState([]);
    const [selectedFacturaId, setSelectedFacturaId] = useState(null);
    const [selectedCreditoId, setSelectedCreditoId] = useState(null);

    todoFacturas().then((res) => {
        setFacturas(res.data);
      })
    
    const facturaFiltrada = facturas.filter((factura) => factura.type ==="received");
    const creditoFiltrado = facturas.filter((factura) => factura.type ==="credit_note" && factura.reference===selectedFacturaId);
    return (
        <>
        <div>
        <ListaSeleccionable type="radio" seleccion="factura" facturasFiltradas={facturaFiltrada} selectedId={selectedFacturaId} setSelectedId={setSelectedFacturaId}/>
        </div>
        <div>
        {!(selectedFacturaId==undefined) && <ListaSeleccionable type="radio" seleccion="nota de credito" facturasFiltradas={creditoFiltrado} selectedId={selectedCreditoId} setSelectedId={setSelectedCreditoId}/>}
        </div>
        <div>
        {!(selectedCreditoId==undefined) && <Asignar message="Nota de credito asignada correctamente"></Asignar>}
        </div>
        </>
    )
}