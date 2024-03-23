/* eslint-disable react/no-unescaped-entities */
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import Image from "next/image";

import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import { Tprodcut } from "../flashSell/FlashSell";

const MostPopular = async () => {
  const res = await fetch(
    "https://baby-care-server.vercel.app/popular-products",
    {
      next: {
        revalidate: 30,
      },
    }
  );
  const flashProducts = await res.json();

  return (
    <Container>
      <div>
        <Stack
          direction="row"
          justifyContent="space-between "
          alignItems="center"
        >
          {/* for title */}
          <Box
            sx={{
              maxWidth: "50%",
            }}
          >
            <Typography variant="h5" component="h1" fontWeight={600}>
              Most Popular Food
            </Typography>
            <Typography component="p" fontWeight={400}>
              From Ancient Eats to Future Feasts: A Culinary Journey of Timeless
              Treasures for Baby's Palate
            </Typography>
          </Box>

          <Button>View All</Button>
        </Stack>

        {/* card here */}
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignContent="center"
          mt={2}
        >
          {flashProducts.slice(0, 6).map((product: Tprodcut) => (
            <Grid item lg={4} key={product._id} >
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
                    <AttachMoneyIcon /> {product.price}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </div>
    </Container>
  );
};

export default MostPopular;
