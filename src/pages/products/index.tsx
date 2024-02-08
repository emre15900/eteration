import React, { useEffect } from "react";
import { useRouter } from "next/router";

function Products() {
  const router = useRouter();

  useEffect(() => {
    router.push("/");
  }, []);

  return <div>Products</div>;
}

export default Products;
