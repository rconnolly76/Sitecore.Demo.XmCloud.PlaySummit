import Head from 'next/head';
import { ReactElement } from 'react';
import { ShopLayout } from '../../../components/Products/Shop';
import ProductDetails from '../../../components/Products/ProductDetails';

const ProductPage = (): JSX.Element => {
  return (
    <>
      <ProductDetails />
    </>
  );
};

ProductPage.getLayout = function getLayout(page: ReactElement) {
  return (
    <ShopLayout>
      <Head>
        <title>PLAY! SHOP - Product</title>
      </Head>

      {page}
    </ShopLayout>
  );
};

export default ProductPage;
