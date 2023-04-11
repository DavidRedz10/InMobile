import { useState } from "react";
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  IconButton,
} from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaGoogle } from "react-icons/fa";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`Email: ${email}`);
    console.log(`Password: ${password}`);
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={"white"}
    >
      <Box
        rounded={"lg"}
        bg={"gray.50"}
        boxShadow={"lg"}
        p={8}
        maxW={"md"}
        w={"full"}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Sign in to your account</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
  to enjoy all of our cool <Link color={"blue.400"}>features</Link>{" "}
  {'\u270C'} 
</Text>
          </Stack>
          <form onSubmit={handleSubmit}>
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  value={email}
                  onChange={(event) => setEmail(event.target.value)}
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  type="password"
                  value={password}
                  onChange={(event) => setPassword(event.target.value)}
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link color={"blue.400"}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                  type="submit"
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </form>
          <Text fontSize={"sm"} align={"center"} color={"gray.500"}>
            Or continue with these social profile
          </Text>
          <Stack spacing={6} direction={"row"} justify={"center"}>
            <IconButton
              colorScheme={"facebook"}
              aria-label={"Login with Facebook"}
              icon={<FaFacebook />}
            />
            <IconButton
              colorScheme={"twitter"}
              aria-label={"Login with Twitter"}
              icon={<FaTwitter />}
            />
            <IconButton
              colorScheme={"red"}
              aria-label={"Login with Google"}
              icon={<FaGoogle />}
            />
          </Stack>
          <Text fontSize={"sm"} align={"center"} color={"gray.500"}>
            Do not have an account?        
          </Text>
          <Link  href="/profile" align={"center"} color={"blue.400"}> Sign up</Link>
        </Stack>
      </Box>
    </Flex>
  );
}