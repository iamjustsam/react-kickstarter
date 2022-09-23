import { Table } from "components";
import { deleteProduct, getProducts, Product } from "products";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function ProductsTable() {
  const navigate = useNavigate();
  const [products, setProducts] = useState<Product[] | undefined>(undefined);

  const retrieveProducts = async () => {
    const result = await getProducts();
    setProducts(result);
  };

  const onDeleteProduct = async (id: string) => {
    if (window.confirm("Are you sure?")) {
      await deleteProduct(id);
      retrieveProducts();
    }
  };

  useEffect(() => {
    retrieveProducts();
  }, []);

  return (
    <Table
      headers={["Id", "Name", "Description", "Product Code"]}
      data={products}
      onEdit={(productId) => navigate(`./${productId}/edit`)}
      onDelete={onDeleteProduct}
    ></Table>
  );
}
