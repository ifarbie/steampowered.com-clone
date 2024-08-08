import Header from '../../elements/Header/Header';
import CartAndNavbar from '../../elements/CartAndNavbar/CartAndNavbar';
import Footer from '../../elements/Footer/Footer';
import ProductDetailsMain from './components/ProductDetailsMain';

const ProductDetailsPage = () => {
  return (
    <>
      <Header />
      <CartAndNavbar />
      <ProductDetailsMain />
      <Footer />
    </>
  );
};

export default ProductDetailsPage;
