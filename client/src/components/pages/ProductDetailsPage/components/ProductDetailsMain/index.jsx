import ProductHeader from './ProductHeader';
import ProductBody from './ProductBody';
import { useParams } from 'react-router-dom';
import { useGetProductById } from '@/hooks/api/useGetProductById';

const ProductDetailsMain = () => {
  const params = useParams();
  const id = params.id;
  const product = useGetProductById(id);

  return (
    <div className='lg:px-4 bg-steamBg pb-14'>
      <main className='text-headerFontColor max-w-[1100px] mx-auto md:pt-6 '>
        <ProductHeader product={product} />
        <ProductBody product={product} />
      </main>
    </div>
  );
};

export default ProductDetailsMain;
