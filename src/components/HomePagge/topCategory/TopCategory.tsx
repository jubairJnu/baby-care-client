import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import category1 from "@/assest/cereals/cereals-1.jpg";
import healthImg from "@/assest/healthy.jpg";
import pureedImg from "@/assest/pureed/pureed-2.jpg";
import processImg from "@/assest/process/process-2.jpg";
import vegitableImg from "@/assest/vegitables/vegitable-4.png";
import cerealsImg from "@/assest/cereals.jpg";
import dairyImg from "@/assest/dairy/dairy-4.jpg";
import Link from "next/link";
import { useRouter } from "next/router";

const TopCategory = () => {
  return (
    <div className="my-48">
      <Container
        sx={{
          mt: "70px",
          mb: "20px",
        }}
      >
        <div>
          {/* title */}
          <Box
            sx={{
              textAlign: "center",
            }}
          >
            <Typography variant="h5" component="h1" fontWeight={600}>
              Top Category
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={400}
              color="gray"
              mt={2}
            >
              Pick Top Pure Delights Category
            </Typography>
            <Typography
              variant="h6"
              component="h1"
              fontWeight={400}
              color="gray"
            >
              For Your Baby Food
            </Typography>
          </Box>
          {/* category grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 my-10">
            {/* 1st========= */}
            <div className="grid grid-cols-1 row-span-2 relative border ">
              <Link href={`/baby-food?category=cereals`}>
                <Image src={cerealsImg} alt="category1" />
                <Typography
                  variant="h5"
                  component="p"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                  }}
                >
                  Cereals
                </Typography>
              </Link>
            </div>

            <div className=" relative">
              <Link href={`/baby-food?category=pureed`}>
                <Image src={pureedImg} alt="pureed" />
                <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                  }}
                >
                  Pureed
                </Typography>
              </Link>
            </div>

            <div className="relative">
              <Link href={`/baby-food?category=dairy`}>
                <Image src={dairyImg} alt="dairy" />
                <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                  }}
                >
                  Dairy
                </Typography>
              </Link>
            </div>

            <div className="relative grid-cols-1 row-span-2">
              <Link href={`/baby-food?category=healthy`}>
                <Image src={healthImg} alt="health" />
                <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                    color: "white",
                  }}
                >
                  Healthy
                </Typography>
              </Link>
            </div>
            {/* 5 */}
            <div className="relative">
              <Link href={`/baby-food?category=process`}>
                <Image src={processImg} alt="process" />
                <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                  }}
                >
                  Process
                </Typography>
              </Link>
            </div>
            {/* 6 */}
            <div className="relative">
              <Link href={`/baby-food?category=vegitable`}>
                <Image src={vegitableImg} alt="vegitable" />
                <Typography
                  variant="h5"
                  component={Link}
                  href="/"
                  fontWeight={600}
                  sx={{
                    position: "absolute",
                    bottom: "10px",
                    left: "10px",
                  }}
                >
                  Vegitable
                </Typography>
              </Link>
            </div>
            {/* main close */}
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TopCategory;
