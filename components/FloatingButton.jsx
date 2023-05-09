import { Flex } from "@chakra-ui/react";

const FloatingButton = ({ children, ...rest}) => {
    return (
      <Flex
        position="fixed"
        bottom={4}
        right={4}
        zIndex="docked"
        justifyContent="center"
        alignItems="center"
        width="4rem"
        height="4rem"
        borderRadius="full"
        boxShadow="lg"
        bg="teal.200"
        color="white"
        _hover={{ bg: "teal.600", cursor: "pointer" }}
        {...rest}
      >
        {children}
      </Flex>
    );
  };

  export default FloatingButton;