import React from "react";
import { ArrowBackIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { IconButton } from "@chakra-ui/react";

const BackButton = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.push("/users");
  };

  return (
    <>
      <IconButton
        aria-label="Go back"
        icon={<ArrowBackIcon />}
        onClick={handleGoBack}
      ></IconButton>
    </>
  );
};

export default BackButton;
