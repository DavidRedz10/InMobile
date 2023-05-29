import { Box, Flex, Text, Link, IconButton, Icon, Img } from '@chakra-ui/react';
import { FaFacebook, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg="gray.100" py={8} color="black">
      <Flex direction="column" align="center">
        <Text fontSize={{ base: '2xl', md: '3xl' }} fontWeight="bold" mb={4}>
          Proyecto de Tesis
        </Text>
        <Text fontSize={{ base: 'lg', md: 'lg' }} mb={6} textAlign="center">
          Este sitio web es parte de un proyecto de tesis universitaria sobre compra y venta de bienes inmuebles.
        </Text>
        <Flex justify="center" mb={6}>
          <Flex direction="column" align="center" mr={8}>
            <Text fontSize="xl" fontWeight="bold" mb={2}>Kevin Ardila</Text>
            <Flex>
              <IconButton
                as={Link}
                href="https://www.facebook.com/Kyovintt"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                icon={<Icon as={FaFacebook} boxSize={6} />}
                colorScheme="blue"
                mr={2}
              />
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/kyovint/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedin} boxSize={6} />}
                colorScheme="blue"
                mr={2}
              />
              <IconButton
                as={Link}
                href="mailto:kevinardila2001@gmail.com"
                aria-label="Email"
                icon={<Icon as={FaEnvelope} boxSize={6} />}
                colorScheme="blue"
              />
            </Flex>
          </Flex>
          <Flex direction="column" align="center">
            <Text fontSize="xl" fontWeight="bold" mb={2}>David Rojas</Text>
            <Flex>
              <IconButton
                as={Link}
                href="https://www.facebook.com/davidalejandro.rojasespejo"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                icon={<Icon as={FaFacebook} boxSize={6} />}
                colorScheme="blue"
                mr={2}
              />
              <IconButton
                as={Link}
                href="https://www.linkedin.com/in/davidredz10/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                icon={<Icon as={FaLinkedin} boxSize={6} />}
                colorScheme="blue"
                mr={2}
              />
              <IconButton
                as={Link}
                href="mailto:xddavidxd2001@gmail.com"
                aria-label="Email"
                icon={<Icon as={FaEnvelope} boxSize={6} />}
                colorScheme="blue"
              />
            </Flex>
          </Flex>
        </Flex>

        <Text fontSize={{ base: 'sm', md: 'md' }} mr={2} textAlign="center" mb={4}>
          Tecnologías utilizadas:
        </Text>
        <Flex justify="center" alignItems="center">
          <Img src="https://www.svgrepo.com/show/354113/nextjs-icon.svg" alt="Next.js" height={10} width={10} mx={2} />
          <Img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" alt="Python" height={10} width={10} mx={2}  />
          <Img src="https://cdn.jsdelivr.net/gh/vercel/commerce@5e529dca9646b642d7114f3c4bf4a1d8b95e9693/public/icon-512x512.png" alt="Vercel" height={10} width={10} mx={2}  />
          <Img src="https://cdn.icon-icons.com/icons2/3911/PNG/512/chakraui_logo_icon_247377.png" alt="Chakra UI" height={10} width={10} mx={2} style={{ mixBlendMode: 'multiply' }} />
          <Img src="https://logowik.com/content/uploads/images/firebase.jpg" alt="Firebase" height={10} width={10} style={{ mixBlendMode: 'multiply' }} mx={2} />
        </Flex>

        <Text fontSize={{ base: 'sm', md: 'md' }} textAlign="center" mt={6}>
          © {new Date().getFullYear()} Proyecto de Tesis. Todos los derechos reservados.
        </Text>
      </Flex>
    </Box>
  );
};

export default Footer;