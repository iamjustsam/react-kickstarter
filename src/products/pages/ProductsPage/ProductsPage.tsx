import { Page } from "components";
import { Dialog } from 'components/Dialog/Dialog';
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
        <Route path='/create' element={<Dialog show={true} title={'Create product'}
        onClose={() => navigate('./')}><CreateProduct></CreateProduct></Dialog>} />
        <Route path='/:productId/edit' element={<Dialog show={true} title={'Edit product'}
        onClose={() => navigate('./')}><EditProduct></EditProduct></Dialog>} />
      </Routes>
  );
}
