import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";
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
import { useEffect, useState } from "react";

export default function Users() {
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [userData, setUserData] = useState([]); // Store the fetched data in state

  const fetchMoreData = async () => {
    const PAGE_LIMIT = 8;
    const API_PATH = "https://649d130b9bac4a8e669d3404.mockapi.io/api/users";

    const queryParam = "?page=" + page + "&limit=" + PAGE_LIMIT;
    const res = await fetch(API_PATH + queryParam);
    const newData = await res.json();

    // console.log("looog", newData);
    if (newData.length === 0) {
      setHasMore(false);
    } else {
      setPage(page + 1);
      // Append new data to existing data
      const updatedData = [...userData, ...newData];
      setUserData(updatedData);
    }
  };

  useEffect(() => {
    fetchMoreData();
  }, []);

  return (
    <div style={{ backgroundColor: "rgb(23, 107, 135)" }}>
      <Head>
        <title>Lavkush Next</title>
        <meta
          name="description"
          content="Hey! myself Lavkush Maurya and i'm a professional coder who daily push bugs on github!! hi-hahahaaa"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <center>
          <Text color="white" fontSize="4xl">
            Server Side Rendering
          </Text>
          <InfiniteScroll
            dataLength={userData.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
          >
            <Flex flexWrap="wrap" justifyContent="space-evenly">
              {userData &&
                userData.length > 0 &&
                userData.map((item) => (
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
          </InfiniteScroll>
        </center>
      </main>
    </div>
  );
}

//***OLD CODE ***/

// import BackButton from "@/components/BackButton";
// import NextPage from "@/components/NextPage";
// import PreviousPage from "@/components/PreviousPage";
// import {
//   ButtonGroup,
//   Card,
//   CardBody,
//   CardFooter,
//   Divider,
//   Flex,
//   Heading,
//   Image,
//   Stack,
//   Text,
// } from "@chakra-ui/react";

// import { useRouter } from "next/router";

// const User = ({ data }) => {
//   const router = useRouter();

//   if (router.isFallback) {
//     return <div>Loading...</div>;
//   }

//   return (
//     <div style={{ backgroundColor: "rgb(23, 107, 135)", height: "100vh" }}>
//       <center>
//         <Text color="white" fontSize="4xl">
//           Single User
//         </Text>
//         <Text color="orange" fontSize={"2xl"}>
//           Detail Page
//         </Text>
//         <Flex flexWrap={"wrap"} justifyContent={"center"} alignItems={"center"}>
//           <PreviousPage />

//           <Card
//             maxW="sm"
//             marginBottom="10"
//             backgroundColor="rgb(218, 255, 251)"
//           >
//             <CardBody>
//               <Image src={data.avatar} alt="" borderRadius="lg" />
//               <Stack mt="6" spacing="3">
//                 <Heading size="md">{data.name}</Heading>
//                 <Text>{data.description}</Text>
//                 <Text color="blue.600" fontSize="2xl">
//                   Phone: {data.phone}
//                 </Text>
//               </Stack>
//             </CardBody>
//             <Divider />
//             <CardFooter background="teal.600">
//               <ButtonGroup spacing="2" color="white">
//                 User page: {data.id}
//               </ButtonGroup>
//             </CardFooter>
//           </Card>
//           <NextPage />
//         </Flex>

//         <BackButton />
//       </center>
//     </div>
//   );
// };

// export async function getStaticPaths() {
//   const res = await fetch(
//     "https://649d130b9bac4a8e669d3404.mockapi.io/api/users"
//   );
//   const data = await res.json();

//   const paths = data.map((item) => {
//     return {
//       params: { id: item.id.toString() },
//     };
//   });

//   return {
//     paths,
//     fallback: true,
//   };
// }

// export async function getStaticProps(context) {
//   const id = context.params.id;
//   const res = await fetch(
//     `https://649d130b9bac4a8e669d3404.mockapi.io/api/users/${id}`
//   );
//   const data = await res.json();

//   return { props: { data } };
// }

// export default User;

//***OLD CODE ***/
