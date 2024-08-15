import { Card, CardHeader, CardBody, CardFooter, Link } from "@chakra-ui/react";
import { Image, Stack, Heading, Text, Divider, ButtonGroup, Button } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box display={"flex"}>
      <Card maxW="sm">
        <CardBody>
          <Stack mt="6" spacing="3">
            <Heading size="md">Title Note</Heading>
            <Text>
              This sofa is perfect for modern tropical spaces, baroque inspired spaces, earthy toned
              spaces and for people who love a chic design with a sprinkle of vintage design.
            </Text>
            <Text color="blue.300" fontSize="13">
              Created at
            </Text>
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
          <ButtonGroup spacing="4">
            <Button variant="solid" colorScheme="blue" >
              <Link style={{ textDecoration: "none" }} href="/detail">See Details</Link>
            </Button>
            <Button variant="ghost" colorScheme="blue">
              Delete
            </Button>
          </ButtonGroup>
        </CardFooter>
      </Card>
    </Box>
  );
}
