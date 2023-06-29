import Head from "next/head";
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
import Link from "next/link";
export default function Users({ data }) {
  // yaha par render kiya hu props data ko
  // console.log("dataaaa", data);

  return (
    <div style={{ backgroundColor: "rgb(23, 107, 135)" }}>
      <Head>
        <title>Lavkush Next </title>
        <meta
          name="description"
          content="Hey! myself Lavkush Maurya and i'm a professional coder who daily push bugs on github!! hi-hahahaaa "
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <center>
          <Text color="white" fontSize="4xl">
            Server Side Rendering
          </Text>
          <Flex flexWrap="wrap" justifyContent="space-evenly">
            {data?.map((item) => (
              <Card
                maxW="sm"
                key={item.id}
                marginBottom="10"
                backgroundColor="rgb(218, 255, 251)"
              >
                <CardBody>
                  <Image src={item.avatar} alt="" borderRadius="lg" />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.name}</Heading>
                    <Text>{item.description}</Text>
                    <Text color="blue.600" fontSize="2xl">
                      Phone: {item.phone}
                    </Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter background="teal.600">
                  <ButtonGroup spacing="2" color="white">
                    <Link href={"/users/" + item.id}>
                      User page: {item.id}
                      {"<===click"}
                    </Link>
                  </ButtonGroup>
                </CardFooter>
              </Card>
            ))}
          </Flex>
        </center>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch(
    "https://649d130b9bac4a8e669d3404.mockapi.io/api/users"
  );
  const data = await res.json();

  return { props: { data } };
}
