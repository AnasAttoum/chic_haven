"use client";

import { satisfy } from "@/utils/fonts";
import { links } from "@/constants/data";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Box, Drawer, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import DeleteDialog from "./DeleteDialog";
import { useState } from "react";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector } from "react-redux";
import { RootState } from "@/lib/store";

const StyledBadge = styled(Badge)<BadgeProps>(() => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: "2px solid var(--hover)",
    color: "var(--hover)",
    padding: "0 4px",
  },
}));

export default function Header() {
  const { data: auth, status } = useSession();
  const pathname = usePathname();
  const cart = useSelector((state:RootState) => state.cart)

  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const [openLogOutModal, setOpenLogOutModal] = useState(false);
  const handleOpenLogOutModal = () => {
    setOpenLogOutModal(true);
  };
  const handleCloseLogOutModal = () => setOpenLogOutModal(false);
  const handleLogOut = async () => {
    await signOut()
    handleCloseLogOutModal();
  };

  return (
    <>
      <div className="flex justify-between max-sm:px-5 items-center gap-10 px-10 md:px-16 py-5">
        <Link
          href={"/"}
          className={`${satisfy.className} antialiased text-2xl`}
        >
          Chic Haven
        </Link>

        <div style={status === "loading" ? { visibility: "hidden" } : {}}>
          {auth && (
            <>
              <div className="flex justify-center items-center gap-5 max-sm:hidden">
                {links.map(({ name, url }) => {
                  return (
                    <Link
                      href={url}
                      key={url}
                      className={url === pathname ? "text-[--primary]" : ""}
                    >
                      {name}
                    </Link>
                  );
                })}
              </div>
            </>
          )}
        </div>
        <div style={status === "loading" ? { visibility: "hidden" } : {}}>
          {auth && (
            <div className="flex justify-center items-center gap-5 max-sm:hidden">
              <Link href={"/cart"}>
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={cart.length}>
                    <ShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </Link>
              <div onClick={handleOpenLogOutModal} className="btn">
                Log Out
              </div>
            </div>
          )}
        </div>
      <svg
        className="inline-block sm:hidden cursor-pointer"
        onClick={toggleDrawer(true)}
        xmlns="http://www.w3.org/2000/svg"
        width="2em"
        height="2em"
        viewBox="0 0 32 32"
      >
        <path
          fill="none"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M5 8h22M5 16h22M5 24h22"
        ></path>
      </svg>
      </div>

      <Drawer anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        <Box role="presentation" onClick={toggleDrawer(false)}>
          <div className="flex gap-3 justify-center items-center m-5 px-10">
            <div className="text-2xl font-bold">
              <div
                onClick={async () => {
                  await signOut();
                }}
                className={`${satisfy.className} antialiased text-2xl`}
              >
                Chic Haven
              </div>
            </div>
          </div>

          <List>
            {links.map(({ name, url }, index) => (
              <Link href={url} key={index}>
                <ListItem key={name} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1.5em"
                        height="1.5em"
                        viewBox="0 0 50 50"
                      >
                        <g
                          fill="none"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={4}
                        >
                          <path
                            stroke="#353b55"
                            d="M9.375 40.625a7.375 7.375 0 0 1 0-10.417L14.583 25A7.375 7.375 0 0 1 25 25a7.375 7.375 0 0 1 0 10.417l-5.208 5.208a7.375 7.375 0 0 1-10.417 0m27.083-16.667l5.209-5.208a7.375 7.375 0 0 0 0-10.417v0a7.375 7.375 0 0 0-10.417 0l-5.208 5.209a7.375 7.375 0 0 0 0 10.416v0a7.375 7.375 0 0 0 10.416 0"
                          ></path>
                          <path
                            stroke="#344054"
                            d="m20.833 29.167l8.334-8.334"
                          ></path>
                        </g>
                      </svg>
                    </ListItemIcon>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              </Link>
            ))}
            <ListItem disablePadding onClick={handleOpenLogOutModal}>
              <ListItemButton>
                <ListItemIcon>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="2em"
                    height="2em"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="#f50a10"
                      strokeLinecap="round"
                      strokeWidth={1.5}
                    >
                      <path
                        strokeLinejoin="round"
                        d="M10 12h10m0 0l-3-3m3 3l-3 3"
                      ></path>
                      <path d="M4 12a8 8 0 0 1 8-8m0 16a7.99 7.99 0 0 1-6.245-3"></path>
                    </g>
                  </svg>
                </ListItemIcon>
                <ListItemText primary="Logout" sx={{ color: "#f50a10" }} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>

      <DeleteDialog
        open={openLogOutModal}
        handleClose={handleCloseLogOutModal}
        handleAgree={handleLogOut}
        text="Are you sure that you want to logout?"
      />
    </>
  );
}
