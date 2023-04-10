import { useState } from "react";
import {
  Box,
  VStack,
  Avatar,
  HStack,
  Text,
  Button,
  FormControl,
  FormLabel,
  Input,
  StackDivider,
  Spacer,
} from "@chakra-ui/react";

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <Box
      px={4}
      py={8}
      mx="auto"
      maxW="xl"
      borderWidth={1}
      borderRadius={8}
      boxShadow="lg"
    >
      <HStack>
        <Avatar
          size="2xl"
          name="John Doe"
          src="https://bit.ly/dan-abramov"
        />
        <VStack align="left">
          <Text fontSize="xl" fontWeight="bold">
            John Doe
          </Text>
          <Text color="gray.500">johndoe@example.com</Text>
        </VStack>
        <Spacer />
        {!isEditing && (
          <Button colorScheme="blue" onClick={handleEdit}>
            Editar perfil
          </Button>
        )}
      </HStack>

      <VStack mt={8} divider={<StackDivider />} spacing={4}>
        <FormControl isRequired>
          <FormLabel>Nombre completo</FormLabel>
          <Input type="text" defaultValue="John Doe" isReadOnly={!isEditing} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Dirección de correo electrónico</FormLabel>
          <Input
            type="email"
            defaultValue="johndoe@example.com"
            isReadOnly={!isEditing}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Contraseña</FormLabel>
          <Input type="password" isReadOnly={!isEditing} />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Número de teléfono</FormLabel>
          <Input type="tel" isReadOnly={!isEditing} />
        </FormControl>
      </VStack>

      {isEditing && (
        <HStack justify="center" mt={8}>
          <Button colorScheme="blue" onClick={handleEdit}>
            Guardar cambios
          </Button>
          <Button colorScheme="gray" variant="ghost" onClick={handleEdit}>
            Cancelar
          </Button>
        </HStack>
      )}
    </Box>
  );
};

export default Profile;