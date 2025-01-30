"use client";

import { useState, useEffect } from "react";
import Sale from "../Sale"; // Asegúrate de que el componente Sale esté en la misma ruta o ajusta el import

export default function DetalleVenta({ params }) {
  const { saleId } = params; // Obtenemos el parámetro de la URL
  const [sale, setSale] = useState({}); // Estado para almacenar la venta

  useEffect(() => {
    // Fetch para obtener los detalles de la venta
    fetch(`/api/sales/${saleId}`)
      .then((response) => response.json()) // Procesamos la respuesta en JSON
      .then((data) => {
        setSale(data); // Guardamos la venta en el estado
      })
      .catch((error) => console.error("Error fetching sale details:", error)); // Capturamos errores
  }, [saleId]);

 

  return (
    <>
      <Sale
        SaleId={sale.saleId}
        ProductName={sale.productName}
        CustomerName={sale.customerName}
        SaleDate={sale.saleDate}
        TotalAmount={sale.totalAmount}
      />
    </>
  );
}
