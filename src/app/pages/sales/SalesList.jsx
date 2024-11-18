"use client";

import Sale from "@/app/pages/sales/Sale";

const SalesList = ({ sales }) => {
    return (
        <ul>
            {sales.map((sale) => (
                <Sale
                    saleId={sale._Id}
                    products={sale.products}
                    customerName={sale.customerName}
                    saleDate={sale.date}
                    totalAmount={sale.total}
                    customerId={sale.userId}
                />
            ))}
        </ul>
    );
}

export default SalesList;
