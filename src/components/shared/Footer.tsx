import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import logo from "@/assest/logo-01.svg";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#00224D] py-10 mt-10">
      <Container>
        {/* <Image src={logo} alt="Logo" width={120} /> */}
        <Box
          sx={{
            display: { md: "flex" },
          }}
          justifyContent="space-between"
          alignItems="start"
        >
          {/* one div */}
          <Box>
            <Typography
              variant="h4"
              component="p"
              color="white"
              fontWeight={600}
            >
              Baby Luxe
            </Typography>
          </Box>

          {/* 2nd div */}

          <Stack>
            <Typography
              variant="h6"
              component="p"
              fontWeight={500}
              color="#EEEEEE"
            >
              Products
            </Typography>

            {/* producs list */}

            <Typography component={Link} href="/" color="#DDDDDD">
              Most Popular
            </Typography>

            <Typography component={Link} href="/" color="#DDDDDD">
              Categories
            </Typography>
          </Stack>
          {/* 3rd */}
          <Stack>
            <Typography
              variant="h6"
              component="p"
              fontWeight={500}
              color="#EEEEEE"
            >
              Contact
            </Typography>
            <Typography component={Link} href="/" color="#DDDDDD">
              About Us
            </Typography>

            <Typography component={Link} href="/" color="#DDDDDD">
              Contact Us
            </Typography>
            <Typography component={Link} href="/" color="#DDDDDD">
              Customer Care
            </Typography>
          </Stack>
        </Box>
      </Container>
    </div>
  );
};

export default Footer;
