"use client";

import { useState, useEffect } from "react";
import User from "../User"; // Asegúrate de que el componente User esté en la ruta correcta

export default function DetalleCliente({ params }) {
  const { clientId } = params; // Obtenemos el parámetro de la URL
  const [client, setClient] = useState({}); // Estado para almacenar el cliente

  useEffect(() => {
    // Fetch para obtener los detalles del cliente
    fetch(`/api/users/${clientId}`)
      .then((response) => response.json()) // Procesamos la respuesta en JSON
      .then((data) => {
        setClient(data); // Guardamos el cliente en el estado
      })
      .catch((error) => console.error("Error fetching client details:", error)); // Capturamos errores
  }, [clientId]);

 

  return (
    <>
      <User
        Id={client.id}
        UserName={client.username}
        Name={client.name}
        LastName={client.lastname}
        Email={client.email}
      />
    </>
  );
}
