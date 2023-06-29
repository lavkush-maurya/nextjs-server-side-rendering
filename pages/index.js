import { Button, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "rgb(23, 107, 135)",
        textAlign: "center",
      }}
    >
      <div>
        <Text color={"white"} fontSize={"9xl"}>
          HomePage
        </Text>
        <Link href={"/users"}>
          <Button
            color={"white"}
            variant={"outline"}
            fontSize={"4xl"}
            bgColor={"red"}
          >
            UsersList
          </Button>
        </Link>
      </div>
    </div>
  );
}
