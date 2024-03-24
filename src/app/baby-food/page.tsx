import { Tprodcut } from "@/components/HomePagge/flashSell/FlashSell";
import Sidebar from "@/components/sidebar/Sidebar";
import {
  Box,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
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
    <Container>
      <div>
        <div className="grid grid-cols-5 gap-5 mt-10">
          {/* side bar here */}
          <div className="bg-gray-100">
            <Sidebar />
          </div>
          {/* card or product here */}
          <div className=" grid col-span-4">
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignContent="center"
            >
              {products.map((product: Tprodcut) => (
                <Grid item xs={6} lg={4} key={product._id}>
                  <Link href={`/baby-food/${product._id}`}>
                    <Card sx={{ maxWidth: 345 }}>
                      <Box
                        sx={{
                          position: "relative",
                        }}
                      >
                        <Image
                          src={product.images}
                          alt="product"
                          width={500}
                          height={80}
                        />
                        <Box
                          sx={{
                            bgcolor: "#ff3d00",
                            position: "absolute",
                            top: "10px",
                            left: "10px",
                            padding: "10px 8px",
                            borderRadius: "50%",
                            color: "white",
                          }}
                        >
                          {product.rating}
                        </Box>
                      </Box>

                      <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                          {product.title}
                        </Typography>
                        <Typography
                          variant="h6"
                          fontWeight={500}
                          color="text.secondary"
                          alignItems="start"
                        >
                          ${product.price}
                        </Typography>
                      </CardContent>
                    </Card>
                  </Link>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default AllProductsPage;
