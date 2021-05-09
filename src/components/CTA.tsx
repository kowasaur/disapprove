import { Link as ChakraLink, Button } from "@chakra-ui/react";

import { Container } from "./Container";

export const CTA = () => (
  <Container flexDirection="row" position="fixed" bottom="0" width="100%" maxWidth="48rem" py={3}>
    <ChakraLink isExternal href="https://github.com/kowasaur/disapprove" flexGrow={1} mx={2}>
      <Button width="100%" variant="solid" colorScheme="green">
        Github
      </Button>
    </ChakraLink>

    <ChakraLink isExternal href="https://cheemsco.in" flexGrow={3} mx={2}>
      <Button width="100%" variant="solid" colorScheme="orange">
        Check out Cheemscoin
      </Button>
    </ChakraLink>
  </Container>
);
