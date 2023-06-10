import { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

const Question = ({ pregunta, opciones, handleNextQuestion, hijoAPadre }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [respuestas, setRespuestas] = useState([]);
  const datos = respuestas;
  const [error, setError] = useState("");

  const handleOptionChange = (e, opcion) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedOption === "") {
      setError("Por favor, selecciona una opción");
      return; // Detener la ejecución si no se selecciona una opción
    }

    const respuesta = selectedOption;
    setRespuestas([...respuestas, respuesta]);
    setSelectedOption("");
    setError(""); // Limpiar el mensaje de error
    handleNextQuestion();
  };

  const mostrar = () => {
    console.log(respuestas);
  };

  return (
    <Box
      width={["100%", "80%", "50%"]}
      margin="auto"
      padding="2rem"
      boxShadow="lg"
      borderRadius="lg"
      backgroundColor="gray.100"
    >
      <Text fontSize="3xl" fontWeight="bold" mb="2rem">
        {pregunta}
      </Text>
      <form onSubmit={handleSubmit}>
        {opciones.map((opcion, index) => (
          <Box key={index} mb="1rem">
            <label>
              <input
                style={{ marginRight: "0.5rem" }}
                margin={1}
                type="radio"
                value={opcion}
                checked={selectedOption === opcion}
                onChange={handleOptionChange}
              />
              {opcion}
            </label>
          </Box>
        ))}

        {error && <Text color="red">{error}</Text>}

        <Button
          type="submit"
          onClick={() => hijoAPadre(datos)}
          colorScheme="blue"
          size="lg"
          mt="2rem"
        >
          Enviar
        </Button>
      </form>
    </Box>
  );
};

export default Question;