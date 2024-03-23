"use client";

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
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

import logo from "@/assest/logo-01.svg";
import Image from "next/image";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

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
            sx={{
              display: { xs: isOpen ? "flex" : "none", md: "flex" },
            }}
          >
            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
              onClick={handleOpen}
            >
              Home
            </Typography>

            <Typography
              component={Link}
              href="/baby-food"
              color="secondary.main"
              fontWeight={600}
              onClick={handleOpen}
            >
              All Products
            </Typography>

            <Typography
              component={Link}
              href="/flash-sale"
              color="secondary.main"
              fontWeight={600}
              onClick={handleOpen}
            >
              Flash Sell
            </Typography>

            <Typography
              component={Link}
              href="/"
              color="secondary.main"
              fontWeight={600}
              onClick={handleOpen}
            >
              Dashboard
            </Typography>
          </Stack>

          <div
            className="md:hidden absolute right-1 top-5"
            onClick={handleOpen}
          >
            {isOpen ? (
              <Box
                sx={{
                  color: "red",
                }}
              >
                <CloseIcon />{" "}
              </Box>
            ) : (
              <MenuIcon />
            )}
          </div>
        </Stack>
      </Container>
    </div>
  );
};

export default Navbar;
