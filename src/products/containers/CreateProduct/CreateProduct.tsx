import { createProduct, Product, ProductForm } from "products";
import React from "react";
import { useNavigate } from "react-router-dom";

export function CreateProduct() {
  const navigate = useNavigate();
  const goBackToProducts = () => navigate("/products");
  const onCreateProduct = async (newProduct: Partial<Product>) => {
    await createProduct(newProduct);
    goBackToProducts();
  };

    return (
        <ProductForm
            onSubmit={onCreateProduct}
            onCancel={goBackToProducts}
        ></ProductForm>
    );
}
