import { Box, Button, Input, Link, Textarea } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

export default function DetailsPage({ params }: { params: { detail: string } }) {
  return (
    <>
      <Heading as={"h2"} size={"xl"} marginTop={"20px"} textAlign={"center"}>
        Details Note{" "}
      </Heading>
      <Box
        margin={"auto"}
        border={"2px solid black"}
        w={"85%"}
        h={"auto"}
        borderRadius={"20"}
        padding={5}
      >
        <Text color={"skyblue"} fontSize={"sm"}>
          Created at August 15th 2024
        </Text>
        <Textarea marginY={"3"} placeholder="write here..." height={"60%"}></Textarea>
          <Button variant="solid" >
            <Link style={{ textDecoration: "none" }} href="/">
              Back
            </Link>
          </Button>
          <Button variant="solid" colorScheme="blue" marginLeft={'20px'}>
            <Link style={{ textDecoration: "none" }} href="/detail">
              Save
            </Link>
          </Button>
      </Box>
    </>
  );
}
