import ProdDetailBody from './components/ProdDetailBody';
import ProdDetailHeader from './components/ProdDetailHeader';
import { useNavigate, useParams } from 'react-router-dom';
import Header from '../../elements/Header/Header';
import CartAndNavbar from '../../elements/CartAndNavbar/CartAndNavbar';
import Footer from '../../elements/Footer/Footer';
import { useState, useEffect } from 'react';
import axios from 'axios';

const ProductDetailsPage = () => {
  const [product, setProduct] = useState({});
  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

  const fetchProduct = async () => {
    try {
      const productResponse = await axios.get('http://localhost:3001/api/products/' + id);
      setProduct(productResponse.data.data);
    } catch (error) {
      navigate('/');
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className='bg-steamBg'>
      <Header />
      <CartAndNavbar />
      <div className='px-4'>
        <main className='bg-steamBg text-headerFontColor max-w-[1100px] mx-auto mb-16 mt-5'>
          <ProdDetailHeader product={product} />
          <ProdDetailBody product={product} />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetailsPage;
