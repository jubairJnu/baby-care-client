import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import {
  Box,
  Container,
  Divider,
  Rating,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
type TParams = {
  params: {
    productId: string;
  };
};
// ssg

export const generateStaticParams = async () => {
  const res = await fetch("https://baby-care-server.vercel.app/products");
  const prodcuts = await res.json();
  return prodcuts.slice(0, 10).map((item: Tprodcut) => ({
    productId: item._id,
  }));
};

const SingleProductPage = async ({ params }: TParams) => {
  console.log(params.productId);
  const res = await fetch(
    `https://baby-care-server.vercel.app/products/${params.productId}`,
    {
      cache: "no-store",
    }
  );
  const product = await res.json();

  return (
    <div>
      <Container>
        <div className="mt-20">
          {/* 1st part iamge and title */}
          <div className="grid grid-flow-col md:grid-cols-2  gap-10 items-center ">
            {/* images */}
            <div>
              <Image
                src={product.images}
                alt="product"
                width={500}
                height={100}
              />
            </div>
            {/* infos */}
            <div>
              <Typography variant="h6" component="p" fontWeight={600}>
                {" "}
                {product.title}{" "}
              </Typography>
              <Stack direction="row" alignItems="center">
                <Typography variant="h6" component="p" fontWeight={400}>
                  {" "}
                  {product.price} |
                </Typography>
                <Rating name="read-only" value={product?.rating} readOnly />
                <Box component="span">( {product.rating} rating) </Box>
              </Stack>
              <Divider
                sx={{
                  marginTop: "30px",
                }}
              />
              <Typography variant="h6" component="p" fontWeight={400}>
                {" "}
                Category: {product.category}
              </Typography>
            </div>
          </div>
          {/* 2nd part description */}
        </div>
      </Container>
      <div className="bg-gray-100 p-10 mt-32">
        <Container>{product.description}</Container>
      </div>
    </div>
  );
};

export default SingleProductPage;
