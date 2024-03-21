import {
  AppBar,
  Box,
  Container,
  Grid,
  IconButton,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";

import logo from "@/assest/logo-01.svg";
import Image from "next/image";

const Navbar = () => {
  return (
    <div>
      <Container>
        <Stack
          direction={{ xs: "column", md: "row" }}
          justifyContent="space-between"
          alignItems={{ xs: "start", md: "center" }}
        >
          <Image src={logo} alt="logo" width={100} />
          {/* stack2 */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            gap={3}
          >
            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
            >
              Home
            </Typography>

            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
            >
              All Products
            </Typography>

            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
            >
              Flash Sell
            </Typography>

            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
            >
              Dashboard
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
