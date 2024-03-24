import { Stack } from "@mui/material";

import Link from "next/link";
import { useState } from "react";

const Sidebar = async () => {
  return (
    <div className=" border md:p-8">
      <Stack justifyContent="space-between" gap={2}>
        <p className=" border-s-2 border-black truncate">
          <span className="md:ms-2 text-xs md:text-xl font-semibold ">
            Categories
          </span>
        </p>
        <Link
          href={`/baby-food?category=cereals`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Cereals
        </Link>

        <Link
          href={`/baby-food?category=vegitable`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Vegitable
        </Link>

        <Link
          href={`/baby-food?category=dairy`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Dairy
        </Link>

        <Link
          href={`/baby-food?category=process`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Process
        </Link>
        <Link
          href={`/baby-food?category=pureed`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Pureed
        </Link>
        <Link
          href={`/baby-food?category=healthy`}
          className="truncate text-xs md:text-xl text-slate-700"
        >
          Healthy
        </Link>
      </Stack>
    </div>
  );
};

export default Sidebar;
