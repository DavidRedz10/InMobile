//import { Box, Flex, Avatar, Text, Divider, SimpleGrid } from "@chakra-ui/react";
//
//const userData = {
//  name: "Nico Arrieta",
//  email: "nicoarrieta@gmail.com",
//  phone: "555-555-5555",
//  location: "Ciudad de México",
//  avatar: "https://imagenes.canalrcn.com/lomaslike/nicolas-arrieta-habla-de-funcionario-de-migracion-colombia.webp?VersionId=.QyW93etm_R1taPhd6qAbuxxjlq7PWuY",
//  posts: [
//    {
//      id: 1,
//      title: "Apartamento en arriendo Chapinero",
//      description: "Hermoso apartamento con excelente ubicación en la Condesa",
//      price: "$1.200.000/mes COP",
//      image: "https://metrocuadrado.blob.core.windows.net/inmuebles/175-M3267511/175-M3267511_21_p.jpg",
//    },
//    {
//      id: 2,
//      title: "Casa en venta en Rosales",
//      description: "Espaciosa casa en venta en la exclusiva zona de Polanco",
//      price: "$500.000.000 COP",
//      image: "https://staticw.s3.amazonaws.com/inmuebles/gr_venta_casa_en_rosales_1613090728-1059_8622.jpg",
//    },
//    {
//      id: 3,
//      title: "Casa en venta en Rosales",
//      description: "Espaciosa casa en venta en la exclusiva zona de Polanco",
//      price: "$500.000.000 COP",
//      image: "https://staticw.s3.amazonaws.com/inmuebles/gr_venta_casa_en_rosales_1613090728-1059_8622.jpg",
//    },
//    {
//      id: 2,
//      title: "Casa en venta en Rosales",
//      description: "Espaciosa casa en venta en la exclusiva zona de Polanco",
//      price: "$500.000.000 COP",
//      image: "https://staticw.s3.amazonaws.com/inmuebles/gr_venta_casa_en_rosales_1613090728-1059_8622.jpg",
//    },
//  ],
//};
//
//const ProfilePage = () => {
//  return (
//    <Box>
//      <Flex align="center" justify="center" direction="column" my={8}>
//        <Avatar size="2xl" name={userData.name} src={userData.avatar} />
//        <Text mt={4} fontSize="xl" fontWeight="bold">
//          {userData.name}
//        </Text>
//        <Text mt={2} fontSize="lg" color="gray.500">
//          {userData.email}
//        </Text>
//        <Text mt={1} fontSize="lg" color="gray.500">
//          {userData.phone}
//        </Text>
//        <Text mt={1} fontSize="lg" color="gray.500">
//          {userData.location}
//        </Text>
//      </Flex>
//      <Divider />
//      <Box>
//        <Text fontSize="2xl" my={4}>
//          Publicaciones
//        </Text>
//        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} gap={6}>
//          {userData.posts.map((post) => (
//            <Box key={post.id}>
//              <Box w="full" h="200px" bg="gray.200" borderRadius="md" overflow="hidden">
//                <img src={post.image} alt={post.title} width="100%" height="100%" objectFit="cover" />
//              </Box>
//              <Text mt={2} fontSize="lg" fontWeight="bold">
//                {post.title}
//              </Text>
//              <Text mt={1} fontSize="lg" color="gray.500">
//                {post.description}
//              </Text>
//              <Text mt={1} fontSize="lg" color="gray.500">
//                {post.price}
//              </Text>
//            </Box>
//          ))}
//        </SimpleGrid>
//      </Box>
//    </Box>
//  );
//};
//
//export default ProfilePage;

import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, Divider } from '@chakra-ui/react';
import {
  Avatar,
  SimpleGrid,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";
import Property from '../components/Property';

const ejemploPropiedad = {
  coverPhoto: {
    id:182679014,
    externalID:"117526079",
    title:null,
    url:"https://bayut-production.s3.eu-central-1.amazonaws.com/image/182679014/41846f1803ea438cb79aef5a6ad1ff91",
    orderIndex:0,
    nimaScore:8.368842123425566,
    main:true},
  price: 6999,
  rentFrequency: 'monthly',
  rooms: 4,
  title: 'Ejemplo de propiedad',
  baths: 1,
  area: 67.8192192,
  agency: { logo: { url: 'https://ejemplo.com/logo.jpg' } },
  isVerified: true,
  externalID: 5647678,
};


const userData = {
  name: "Nico Arrieta",
  email: "nicoarrieta@gmail.com",
  phone: "555-555-5555",
  location: "Ciudad de México",
  avatar: "https://imagenes.canalrcn.com/lomaslike/nicolas-arrieta-habla-de-funcionario-de-migracion-colombia.webp?VersionId=.QyW93etm_R1taPhd6qAbuxxjlq7PWuY",
  posts: [
    {
      id: 7,
      title: 'Apartamento en El Poblado',
      description: 'Apartamento con excelente ubicación en El Poblado, cuenta con 3 habitaciones, 2 baños, sala, comedor y cocina integral.',
      price: '$350.000.000 COP',
      image: 'https://i.ytimg.com/vi/Oc1lqGImim0/maxresdefault.jpg',
    },
    {
      id: 8,
      title: 'Casa en Envigado',
      description: 'Amplia casa en Envigado, cuenta con 4 habitaciones, 3 baños, sala, comedor, cocina integral y parqueadero para dos carros.',
      price: '$450.000.000 COP',
      image: 'https://i.ibb.co/pWtWdDk/property8.jpg',
    },
    {
      id: 9,
      title: 'Apartamento en Laureles',
      description: 'Moderno apartamento en Laureles, cuenta con 2 habitaciones, 2 baños, sala, comedor, cocina integral y balcón con vista a la ciudad.',
      price: '$300.000.000 COP',
      image: 'https://i.ibb.co/84PFF07/property9.jpg',
    },
    {
      id: 10,
      title: 'Casa en Sabaneta',
      description: 'Hermosa casa campestre en Sabaneta, cuenta con 4 habitaciones, 4 baños, sala, comedor, cocina integral, piscina y amplios jardines.',
      price: '$1.500.000.000 COP',
      image: 'https://i.ibb.co/mz44sB8/property10.jpg',
    },
    {
      id: 11,
      title: 'Apartamento en El Poblado',
      description: 'Moderno apartamento en El Poblado, cuenta con 1 habitación, 1 baño, sala, comedor, cocina integral y balcón con vista a la ciudad.',
      price: '$250.000.000 COP',
      image: 'https://i.ibb.co/vLktW5x/property11.jpg',
    },
    {
      id: 12,
      title: 'Casa en Rionegro',
      description: 'Acogedora casa en Rionegro, cuenta con 3 habitaciones, 2 baños, sala, comedor, cocina integral, zona de ropas y patio trasero.',
      price: '$280.000.000 COP',
      image: 'https://i.ibb.co/BB8WpYM/property12.jpg',
    },
  ],
};


const ProfilePage = () => {
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [phone, setPhone] = useState(userData.phone);
  const [location, setLocation] = useState(userData.location);
  const [isEditing, setIsEditing] = useState(false);

  const handleSaveChanges = () => {
    // Simulación de actualización de datos
    userData.name = name;
    userData.email = email;
    userData.phone = phone;
    userData.location = location;
    setIsEditing(false);
  };

  return (
    <Box>
      <Flex align="center" justify="center" direction="column" my={8}>
        <Avatar size="2xl" name={name} src={userData.avatar} />
        {isEditing ? (
          <Box mt={4}>
            <FormControl id="name" isRequired>
              <FormLabel>Nombre completo</FormLabel>
              <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
            </FormControl>
            <FormControl id="email" isRequired mt={4}>
              <FormLabel>Correo electrónico</FormLabel>
              <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </FormControl>
            <FormControl id="phone" isRequired mt={4}>
              <FormLabel>Teléfono</FormLabel>
              <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </FormControl>
            <FormControl id="location" isRequired mt={4}>
              <FormLabel>Ubicación</FormLabel>
              <Input type="text" value={location} onChange={(e) => setLocation(e.target.value)} />
            </FormControl>
            <Button mt={4} onClick={handleSaveChanges}>
              Guardar cambios
            </Button>
          </Box>
        ) : (
          <>
            <Text mt={4} fontSize="xl" fontWeight="bold">
              {name}
            </Text>
            <Text mt={2} fontSize="lg" color="gray.500">
              {email}
            </Text>
            <Text mt={1} fontSize="lg" color="gray.500">
              {phone}
            </Text>
            <Text mt={1} fontSize="lg" color="gray.500">
              {location}
            </Text>
            <Button mt={4} onClick={() => setIsEditing(true)}>
              Editar perfil
            </Button>
          </>
        )}
      </Flex>
      <Divider my={8} />
      <Flex>
      <Property property={ejemploPropiedad} />
      <Property property={ejemploPropiedad} />
      <Property property={ejemploPropiedad} />
      </Flex>
    </Box>
  );

};

export default ProfilePage;
