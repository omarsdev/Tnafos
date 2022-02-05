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
import { useSize } from "../../../context";

const CustomModal = ({ isOpen, onClose, children }) => {
  const { size } = useSize();
  const [modalSize, setModalSize] = useState(null);

  useEffect(() => {
    if (size === "lg") setModalSize("md");
    else if (size === "md") setModalSize("lg");
    else if (size === "sm" || size === "xs") setModalSize("full");
  }, [size]);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={modalSize}>
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
