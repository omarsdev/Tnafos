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
import { useSize } from "../../../context";

const CustomDrawer = ({ isOpen, onCancelHandler, children }) => {
  const { size } = useSize();

  const [drawerSize, setDrawerSize] = useState(null);

  useEffect(() => {
    if (size === "lg") setDrawerSize("md");
    else if (size === "md") setDrawerSize("lg");
    else if (size === "sm" || size === "xs") setDrawerSize("full");
  }, [size]);

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
