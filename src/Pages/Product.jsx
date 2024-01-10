import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../Utils/ShopContextProvider'
import { useParams } from 'react-router-dom';
import BreadCrumbs from '../Components/BreadCrumbs';
import ProductDisplay from '../Components/ProductDisplay';
import Descriptionbox from '../Components/Descriptionbox';
import RelatedProduct from '../Components/RelatedProduct';

function Product() {
  const { all_product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);
  return (
    <div>
      <BreadCrumbs product={product}/>
      <ProductDisplay product={product}/>
      <Descriptionbox />
      <RelatedProduct />
    </div>
  )
}

export default Product