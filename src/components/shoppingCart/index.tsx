import dynamic from 'next/dynamic';

const NoSSRCart = dynamic(() => import('@/components/cart'), { ssr: false });

const ShoppingCart = () => {
  return <NoSSRCart />;
};

export default ShoppingCart;
