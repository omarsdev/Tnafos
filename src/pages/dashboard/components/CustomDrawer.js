import React, { useEffect, useState } from "react";

import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useMediaQuery,
} from "@chakra-ui/react";

const CustomDrawer = ({ isOpen, onCancelHandler, children }) => {
  const [isLargerThanXl] = useMediaQuery("(min-width: 1200px)");
  const [isLargerThanLg] = useMediaQuery("(min-width: 960px)");
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const [isLargerThanSm] = useMediaQuery("(min-width: 320px)");

  const [drawerSize, setDrawerSize] = useState("md");

  useEffect(() => {
    if (isLargerThanXl) setDrawerSize("sm");
    else if (isLargerThanLg) setDrawerSize("sm");
    else if (isLargerThanMd) return setDrawerSize("lg");
    else if (isLargerThanSm) return setDrawerSize("full");
  }, [isLargerThanXl, isLargerThanLg, isLargerThanMd, isLargerThanSm]);

  return (
    <Drawer
      isOpen={isOpen}
      placement="right"
      onClose={onCancelHandler}
      size={drawerSize}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader borderBottomWidth="1px" color="#F8B916">
          Edit your Info by filling up this form
        </DrawerHeader>

        <DrawerBody>{children}</DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
