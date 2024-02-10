import dynamic from "next/dynamic";

const NoSSRCart = dynamic(() => import("@/components/checkout"), {
  ssr: false,
});

const AppCheckout = () => {
  return <NoSSRCart />;
};

export default AppCheckout;
