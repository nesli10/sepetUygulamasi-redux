import React, { UseEffect, UseState, } from "react";
import { connect } from "react-redux";
import { getCategories } from "../../redux/actions/categoryActions";
import { saveProduct } from "../../redux/actions/productActions";





function AddOrUpdateProduct({
    products,
    categories,
    getProducts,
    getCategories,
    saveProduct,
    history,
    ...props

}) {
    const [product, setProduct] = UseState({ ...props.product });
    UseEffect(() => {
        if (categories.length === 0) {
            getCategories();
        }
        setProduct({ ...props.product })
    }, [props.product]);
    function handleChange(event) {
        const { name, value } = event.target;
        setProduct(previousProduct => ({
            ...previousProduct,
            [name]: name === "categoryId" ? parseInt(value, 10) : value
        }))

        function handleSave(event) {
            event.preventDefault();
            saveProduct().then(() => {
                history.push("/")
            });
        }
        return (
            <productDetail product={product} categories={categories} onChange={handleChange} onSave={handleSave} >

            </productDetail>
        )
    }
}

export function getProductById(products, productId) {
    let product = products.find(product => product.id === productId) || null;
    return product;
}

function mapStateToProps(state) {
    const productId = 1
    
    const product = productId && state.productListReducer.length > 0
        ? getProductById(state.productListReducer, productId)
        : {}
    return {
        product,
        products: state.productListReducer,
        categories: state.categoryListReducer
    }

}

const mapDispatchToProps = {
    getCategories, saveProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(AddOrUpdateProduct)