import React, { useEffect, useState } from "react";

import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useMediaQuery,
} from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, children }) => {
  const [isLargerThanLg] = useMediaQuery("(min-width: 960px)");
  const [isLargerThanMd] = useMediaQuery("(min-width: 768px)");
  const [isLargerThanSm] = useMediaQuery("(min-width: 320px)");

  const [drawerSize, setDrawerSize] = useState("md");

  useEffect(() => {
    if (isLargerThanLg) setDrawerSize("md");
    else if (isLargerThanMd) setDrawerSize("lg");
    else if (isLargerThanSm) setDrawerSize("full");
  }, [isLargerThanLg, isLargerThanMd, isLargerThanSm]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={drawerSize}>
      <ModalOverlay />

      <ModalContent>
        <ModalHeader
          fontWeight="medium"
          fontSize={{ base: "small", sm: "md", md: "large", lg: "xl" }}
          fontFamily="inhirit"
          textColor="#F8B916"
        >
          Update your company info
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
