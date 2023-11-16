import axios from "axios";

const todoFacturas = async()=> {
    const facturas = await axios.get("https://recruiting.api.bemmbo.com/invoices/pending");
    return (facturas);
}

export {
    todoFacturas
}