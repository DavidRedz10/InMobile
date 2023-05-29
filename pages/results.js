import { useState } from "react";
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Heading, Card, Text} from '@chakra-ui/react';
import Property from '../components/Property';

const ejemploPropiedad = {
  coverPhoto: {
    id:182679014,
    externalID:"117526079",
    title:null,
    url:"https://www.upsocl.com/wp-content/uploads/2020/03/0000-131.jpg",
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

const ProfilePage = () => {

  return (
<Card>
  <Box p={4}>
    <Heading as="h1" textAlign="center" mb={4}>
      Estos son los resultados que te damos acorde a tus selecciones
    </Heading>
    <Text textAlign="center" mb={2}>
    Aquí tienes una increíble selección de propiedades impresionantes que hemos elegido cuidadosamente con nuestra avanzada tecnología de inteligencia artificial. Estamos emocionados de mostrarte estas opciones asombrosas que seguramente te dejarán sin aliento.
    </Text>
    <Flex justifyContent="center" alignItems="center">
      <Property property={ejemploPropiedad} />
      <Property property={ejemploPropiedad} />
      <Property property={ejemploPropiedad} />
    </Flex>
  </Box>
</Card>
  );

};

export default ProfilePage;