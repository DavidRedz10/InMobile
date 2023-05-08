//import { useState, useEffect } from 'react';
//import { firestore } from '../lib/firebase';
//import Question from '../components/question';
//
//export default function Home() {
//  const [preguntas, setPreguntas] = useState([]);
//  const [currentQuestion, setCurrentQuestion] = useState(0);
//
//  useEffect(() => {
//    const questionsRef = firestore.collection('preguntas');
//
//    questionsRef.get().then((snapshot) => {
//      const preguntasData = snapshot.docs.map((doc) => ({
//        id: doc.id,
//        ...doc.data(),
//      }));
//      setPreguntas(preguntasData);
//    });
//  }, []);
//
//  const handleNextQuestion = () => {
//    setCurrentQuestion(currentQuestion + 1);
//  };
//
//  return (
//    <div>
//      {preguntas.length > 0 && (
//        <Question
//          pregunta={preguntas[currentQuestion].pregunta}
//          opciones={preguntas[currentQuestion].opciones}
//          handleNextQuestion={handleNextQuestion}
//        />
//      )}
//    </div>
//  );
//}

import { useState, useEffect } from 'react';
import { firestore } from '../lib/firebase';
import Question from '../components/question';
import { Card, Center, ChakraBaseProvider } from '@chakra-ui/react';
import { Box, Button, FormControl, FormLabel, Radio, RadioGroup, Stack, Text, ChakraProvider } from '@chakra-ui/react';


export default function Home() {
  const [preguntas, setPreguntas] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  useEffect(() => {
    const questionsRef = firestore.collection('preguntas');

    questionsRef.get().then((snapshot) => {
      const preguntasData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPreguntas(preguntasData);
    });
  }, []);

  const handleNextQuestion = () => {
    setCurrentQuestion(currentQuestion + 1);
  };

  return (

    <ChakraProvider>
      <Box marginBottom={4}>
      {preguntas[currentQuestion] && (
        <Question
          pregunta={preguntas[currentQuestion].pregunta}
          opciones={preguntas[currentQuestion].opciones}
          handleNextQuestion={handleNextQuestion}
        />
      )}
      {!preguntas[currentQuestion] && <Center  justifyContent="center"  alignItems="center" fontSize='3xl' fontWeight='bold' mb='2rem'>Fin de preguntas</Center>}
      </Box>
      <Box
      width={['100%', '80%', '50%']}
      margin='0 auto'
      padding='2rem'
      boxShadow='lg'
      borderRadius='lg'
      backgroundColor='gray.100'
    >
      {/* Título del quiz */}
      <Text fontSize='3xl' fontWeight='bold' mb='2rem' >
        ¿Qué tanto sabes sobre el universo?
      </Text>

      {/* Pregunta */}
      <FormControl>
        <FormLabel fontSize='xl' fontWeight='bold' mb='1rem'>
          ¿Cuál es el planeta más grande del Sistema Solar?
        </FormLabel>
        <RadioGroup>
          <Stack spacing='1rem'>
            <Radio value='a'>Júpiter</Radio>
            <Radio value='b'>Saturno</Radio>
            <Radio value='c'>Urano</Radio>
          </Stack>
        </RadioGroup>
      </FormControl>

      {/* Botón para enviar el quiz */}
      <Button colorScheme='blue' size='lg' mt='2rem'>
        Enviar
      </Button>
    </Box>
    </ChakraProvider>

        

  );
}