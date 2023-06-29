import React from "react";
import { ChevronLeftIcon } from "@chakra-ui/icons";
import { useRouter } from "next/router";
import { IconButton } from "@chakra-ui/react";

const PreviousPage = () => {
  const router = useRouter();

  const handleGoBack = async () => {
    const currentUserId = await router.query.id; // Get the current user ID from the router query
    const nextUserId = parseInt(currentUserId, 10) - 1; // Increment the user ID by 1

    // Generate the new route with the updated user ID
    const newRoute = `/users/${nextUserId}`;

    router.push(newRoute); // Navigate to the new route
  };

  return (
    <>
      <IconButton
        aria-label="Go back"
        icon={<ChevronLeftIcon />}
        onClick={handleGoBack}
        margin={"45"}
      ></IconButton>
    </>
  );
};

export default PreviousPage;
