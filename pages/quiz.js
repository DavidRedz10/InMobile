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

import { useState, useEffect } from "react";
import { firestore } from "../lib/firebase";
import Question from "../components/Question";
import {
  Box,
  Button,
  Text,
  ChakraProvider,
  Flex,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Link
} from "@chakra-ui/react";
import Property from "../components/Property";
import { MdStar } from "react-icons/md";
import { useRouter } from 'next/router';

export default function Home() {
  const [preguntas, setPreguntas] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [calificacion, setCalificacion] = useState(3);
  const [calificacion2, setCalificacion2] = useState(3);
  const [calificacion3, setCalificacion3] = useState(3); // nueva variable de estado
  const [datos, estableceDatos] = useState("");

  const hijoAPadre = (datoshijo) => {
    estableceDatos(datoshijo);
    let valores = [];
    for (let propiedad in datos) {
      valores.push(datos[propiedad]);
    }
    console.log(valores);
  };

  const nuevoObjeto = {
    rating1: datos.calificacion,
    rating2: datos.calificacion2,
    rating3: datos.calificacion3,
    salary: datos[0],
    vehicle: datos[4],
    disability: datos[2],
    peopleNumber: datos[5],
    occupation: datos[3],
    type: datos[1]
  };

  useEffect(() => {
    const questionsRef = firestore.collection("preguntas");

    questionsRef.get().then((snapshot) => {
      const preguntasData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPreguntas(preguntasData);
    });
  }, []);

  const ejemploPropiedad = {
    coverPhoto: {
      id: 182679014,
      externalID: "117526079",
      title: null,
      url: "https://www.upsocl.com/wp-content/uploads/2020/03/0000-131.jpg",
      orderIndex: 0,
      nimaScore: 8.368842123425566,
      main: true,
    },
    price: 6999,
    rentFrequency: "monthly",
    rooms: 4,
    title: "Ejemplo de propiedad",
    baths: 1,
    area: 67.8192192,
    agency: { logo: { url: "https://ejemplo.com/logo.jpg" } },
    isVerified: true,
    externalID: 5647678,
  };

  const handleNextQuestion = (respuesta) => {
    setCurrentQuestion(currentQuestion + 1);
  };

  const enviar = (calificacion) => {
    const newData = {
      ...datos,
      calificacion: calificacion,
    };
    estableceDatos(newData);
  };

  const enviar2 = (calificacion2) => {
    const newData2 = {
      ...datos,
      calificacion2: calificacion2,
    };
    estableceDatos(newData2);
  };

  const enviar3 = (calificacion3) => {
    const newData3 = {
      ...datos,
      calificacion3: calificacion3,
    };
    estableceDatos(newData3);
  };

  const finalizar = () => {
    console.log(datos);
    console.log(typeof datos);
  };

  const handleSliderChange = (value) => {
    setCalificacion(value);
  }; // controlador de eventos para actualizar la calificación del usuario

  const handleSliderChange2 = (value) => {
    setCalificacion2(value);
  };

  const handleSliderChange3 = (value) => {
    setCalificacion3(value);
  };

  return (
    <ChakraProvider>
      <Box marginBottom={4}>
        {preguntas[currentQuestion] && (
          <Question
            pregunta={preguntas[currentQuestion].pregunta}
            opciones={preguntas[currentQuestion].opciones}
            handleNextQuestion={handleNextQuestion}
            hijoAPadre={hijoAPadre}
          />
        )}
      </Box>

      {datos.length == 6 && (
        <Box
          width={["100%", "80%", "50%"]}
          margin="0 auto"
          padding="2rem"
          boxShadow="lg"
          borderRadius="lg"
          backgroundColor="gray.100"
        >
          {/* Título del quiz */}
          <Text fontSize="3xl" fontWeight="bold" mb="2rem">
            ¿Qué calificacion le darias a esta casa?
          </Text>

          {/* Pregunta */}
          <Box>
            <Flex>
              <Property property={ejemploPropiedad} />
            </Flex>
            <Text fontWeight="bold" mb="1rem">
              Calificación:
            </Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={handleSliderChange}
              colorScheme="blue"
              trackBorderColor="gray.200"
              trackBorderWidth="1px"
              trackHeight="8px"
              thumbBoxSize={7}
              thumbBorderColor="blue.500"
              thumbColor="white"
              thumbShadow="lg"
              thumbTransform="translate(-50%, -50%)"
              _focusThumb={{
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
              }}
              _activeThumb={{
                boxShadow: "none",
              }}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={7}>
                <Box color="blue.500" as={MdStar} />
              </SliderThumb>
            </Slider>
            <Text fontWeight="bold" mt="1rem">
              {calificacion}
            </Text>
          </Box>
          {/* Botón para enviar el quiz */}
          <Button
            colorScheme="blue"
            size="lg"
            mt="2rem"
            onClick={() => enviar(calificacion)}
          >
            Enviar
          </Button>
        </Box>
      )}

      {datos.hasOwnProperty("calificacion") && !datos.hasOwnProperty("calificacion2") && (
        <Box
          width={["100%", "80%", "50%"]}
          margin="0 auto"
          padding="2rem"
          boxShadow="lg"
          borderRadius="lg"
          backgroundColor="gray.100"
        >
          {/* Título del quiz */}
          <Text fontSize="3xl" fontWeight="bold" mb="2rem">
            ¿Qué calificacion le darias a esta casa?
          </Text>

          {/* Pregunta */}
          <Box>
            <Flex>
              <Property property={ejemploPropiedad} />
            </Flex>
            <Text fontWeight="bold" mb="1rem">
              Calificación:
            </Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={handleSliderChange2}
              colorScheme="blue"
              trackBorderColor="gray.200"
              trackBorderWidth="1px"
              trackHeight="8px"
              thumbBoxSize={7}
              thumbBorderColor="blue.500"
              thumbColor="white"
              thumbShadow="lg"
              thumbTransform="translate(-50%, -50%)"
              _focusThumb={{
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
              }}
              _activeThumb={{
                boxShadow: "none",
              }}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={7}>
                <Box color="blue.500" as={MdStar} />
              </SliderThumb>
            </Slider>
            <Text fontWeight="bold" mt="1rem">
              {calificacion2}
            </Text>
          </Box>
          {/* Botón para enviar el quiz */}
          <Button
            colorScheme="blue"
            size="lg"
            mt="2rem"
            onClick={() => enviar2(calificacion2)}
          >
            Enviar
          </Button>
        </Box>
      )}

      {datos.hasOwnProperty("calificacion2") && !datos.hasOwnProperty("calificacion3") && (
        <Box
          width={["100%", "80%", "50%"]}
          margin="0 auto"
          padding="2rem"
          boxShadow="lg"
          borderRadius="lg"
          backgroundColor="gray.100"
        >
          {/* Título del quiz */}
          <Text fontSize="3xl" fontWeight="bold" mb="2rem">
            ¿Qué calificacion le darias a esta casa?
          </Text>

          {/* Pregunta */}
          <Box>
            <Flex>
              <Property property={ejemploPropiedad} />
            </Flex>
            <Text fontWeight="bold" mb="1rem">
              Calificación:
            </Text>
            <Slider
              aria-label="slider-ex-1"
              defaultValue={3}
              min={1}
              max={5}
              step={1}
              onChange={handleSliderChange3}
              colorScheme="blue"
              trackBorderColor="gray.200"
              trackBorderWidth="1px"
              trackHeight="8px"
              thumbBoxSize={7}
              thumbBorderColor="blue.500"
              thumbColor="white"
              thumbShadow="lg"
              thumbTransform="translate(-50%, -50%)"
              _focusThumb={{
                boxShadow: "0 0 0 3px rgba(66, 153, 225, 0.6)",
              }}
              _activeThumb={{
                boxShadow: "none",
              }}
            >
              <SliderTrack bg="gray.200">
                <SliderFilledTrack bg="blue.500" />
              </SliderTrack>
              <SliderThumb boxSize={7}>
                <Box color="blue.500" as={MdStar} />
              </SliderThumb>
            </Slider>
            <Text fontWeight="bold" mt="1rem">
              {calificacion3}
            </Text>
          </Box>
          {/* Botón para enviar el quiz */} 
          <Button
            colorScheme="blue"
            size="lg"
            mt="2rem"
            onClick={() => enviar3(calificacion3)}
          >
            Enviar
          </Button>

          
        </Box>
      )}

      
      <Link href="/results">
      <Button
        colorScheme="red"
        size="lg"
        mt="2rem"
        
      >
        Seguir a resultados
      </Button>
      </Link>
      {datos.hasOwnProperty("calificacion3") && (
      <Button
        colorScheme="red"
        size="lg"
        mt="2rem"
        onClick={() => console.log(nuevoObjeto)}
      >
        Mostrar Arreglo consola
      </Button>
      )}
    </ChakraProvider>
  );
}