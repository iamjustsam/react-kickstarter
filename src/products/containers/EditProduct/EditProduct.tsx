import { editProduct, getProduct, Product, ProductForm } from "products";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export function EditProduct() {
    const { productId } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState<Product | undefined>(undefined);
    const goBackToProducts = () => navigate("/products");
    const onEditProduct = async (productFields: Partial<Product>) => {
        await editProduct({...product!, ...productFields});
        goBackToProducts();
    };
    const retrieveProduct = async () => {
        const result = await getProduct(productId ?? '');
        setProduct(result);
    };

    useEffect(() => {
        retrieveProduct();
        // eslint-disable-next-line
    }, []);

    return product ? (
        <ProductForm
            product={product}
            onSubmit={onEditProduct}
            onCancel={goBackToProducts}
        ></ProductForm>
    ) : null;
}
