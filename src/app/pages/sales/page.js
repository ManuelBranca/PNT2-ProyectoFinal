"use client";

import SalesList from "./SalesList";
import { useState, useEffect } from "react";

const SalesPage = () => {
    const [sales, setSales] = useState([]);
    const [page, setPage] = useState(1);
    const [pageSize] = useState(30);

    useEffect(() => {
        const fetchSales = async () => {
            try {
                const response = await fetch(`http://localhost:3000/api/sales/getSales`);
                const data = await response.json();
                setSales(data);
            } catch (error) {
                console.error("Error fetching sales data:", error);
            }
        };

        fetchSales();
    }, [page, pageSize]);

    return (
        <div>
            <div>
                <SalesList sales={sales} />
            </div>
            <div style={{ marginTop: "20px", textAlign: "center" }}>
                <button
                    onClick={() => setPage((prevPage) => prevPage - 1)}
                    disabled={page === 1}
                    style={{ color: "red", fontWeight: "bold", marginRight: "10px" }}
                >
                    Anterior
                </button>
                <button
                    onClick={() => setPage((prevPage) => prevPage + 1)}
                    style={{ color: "yellow", fontWeight: "bold" }}
                >
                    Siguiente
                </button>
            </div>
        </div>
    );
};

export default SalesPage;
