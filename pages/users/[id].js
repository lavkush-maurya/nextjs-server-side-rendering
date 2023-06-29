import BackButton from "@/components/BackButton";
import NextPage from "@/components/NextPage";
import PreviousPage from "@/components/PreviousPage";
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react";

import { useRouter } from "next/router";

const User = ({ data }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
  }

  return (
    <div style={{ backgroundColor: "rgb(23, 107, 135)", height: "100vh" }}>
      <center>
        <Text color="white" fontSize="4xl">
          Single User
        </Text>
        <Text color="orange" fontSize={"2xl"}>
          Detail Page
        </Text>
        <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
          <PreviousPage />

          <Card
            maxW="sm"
            marginBottom="10"
            backgroundColor="rgb(218, 255, 251)"
          >
            <CardBody>
              <Image src={data.avatar} alt="" borderRadius="lg" />
              <Stack mt="6" spacing="3">
                <Heading size="md">{data.name}</Heading>
                <Text>{data.description}</Text>
                <Text color="blue.600" fontSize="2xl">
                  Phone: {data.phone}
                </Text>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter background="teal.600">
              <ButtonGroup spacing="2" color="white">
                User page: {data.id}
              </ButtonGroup>
            </CardFooter>
          </Card>
          <NextPage />
        </Flex>

        <BackButton />
      </center>
    </div>
  );
};

export async function getStaticPaths() {
  const res = await fetch(
    "https://649d130b9bac4a8e669d3404.mockapi.io/api/users"
  );
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const id = context.params.id;
  const res = await fetch(
    `https://649d130b9bac4a8e669d3404.mockapi.io/api/users/${id}`
  );
  const data = await res.json();

  return { props: { data } };
}

export default User;
