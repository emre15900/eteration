import dynamic from "next/dynamic";

const NoSSRHeader = dynamic(() => import("@/components/header"), {
  ssr: false,
});

const AppHeader = () => {
  return <NoSSRHeader />;
};

export default AppHeader;
