import { ReadonlyURLSearchParams } from "next/navigation";

interface ISearchParams {
  searchParams: ReadonlyURLSearchParams;
  category: string;
}

const AllProductsPage = async ({
  searchParams,
}: {
  searchParams: ISearchParams;
}) => {
  console.log(searchParams);

  let products = [];

  if (searchParams.category) {
    const res = await fetch(
      `https://baby-care-server.vercel.app/category-product?category=${searchParams.category}`
    );

    products = await res.json();
    console.log(products);
  } else {
    const res = await fetch("https://baby-care-server.vercel.app/products");

    products = await res.json();
    console.log(products);
  }

  return (
    <div>
      <h1>Dynamic Page {searchParams.category} </h1>
    </div>
  );
};

export default AllProductsPage;
