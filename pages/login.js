import { useState } from "react";
import { Flex, Box, Stack, Heading, Text, Button, useColorModeValue, Icon } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica para iniciar sesión con Google
    setIsLoading(true);
    // Simulación de inicio de sesión
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  };

  const formBackground = useColorModeValue("white", "gray.800");
  const buttonColor = useColorModeValue("white", "gray.800");
  const buttonBg = useColorModeValue("blue.500", "blue.300");
  const buttonHoverBg = useColorModeValue("blue.600", "blue.400");

  return (
    <Flex minH={"100vh"} align={"center"} justify={"center"}>
      <Box
        rounded={"md"}
        boxShadow={"lg"}
        p={5}
        maxW={"md"}
        w={"full"}
        bg={"gray.100"}
      >
        <Stack spacing={6} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} color={"blue.500"} position="relative">
              <Text
                as="span"
                bgGradient="linear(to-r, blue.500, purple.500)"
                bgClip="text"
              >
                S
              </Text>
              <Text
                as="span"
                bgGradient="linear(to-r, green.500, teal.500)"
                bgClip="text"
              >
                i
              </Text>
              <Text
                as="span"
                bgGradient="linear(to-r, yellow.500, orange.500)"
                bgClip="text"
              >
                g
              </Text>
              <Text
                as="span"
                bgGradient="linear(to-r, red.500, pink.500)"
                bgClip="text"
              >
                n
              </Text>{" "}
              in to your account
            </Heading>
          </Stack>
          <Button
            color={buttonColor}
            bg={"red.500"}
            _hover={{ bg: buttonHoverBg }}
            isLoading={isLoading}
            loadingText="Signing in..."
            onClick={handleLogin}
          >
            <Icon as={FaGoogle} boxSize={6} mr={2} />
            Sign in with Google
          </Button>
        </Stack>
      </Box>
    </Flex>
  );
}