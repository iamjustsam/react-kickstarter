import { Page } from "components";
import { ProductsTable } from "products";
import { CreateProduct, EditProduct } from "products/containers";
import React from "react";
import {
  Route, Routes, useNavigate
} from "react-router-dom";

export function ProductsPage() {
  const navigate = useNavigate();

  const goToCreateProduct = () => navigate('./create');

  return (
      <Routes>
        <Route path="/" element={<Page title="Products" onCreateButtonClick={goToCreateProduct}>
            <ProductsTable></ProductsTable>
          </Page>} />
        <Route path='/create' element={<Page title="Create product">
            <CreateProduct></CreateProduct>
          </Page>} />
        <Route path='/:productId/edit' element={<Page title="Edit product">
            <EditProduct></EditProduct>
          </Page>} />
      </Routes>
  );
}
