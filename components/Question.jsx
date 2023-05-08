import { useState } from 'react';
import { Box, Button, ChakraProvider, FormControl, FormLabel, Radio, RadioGroup, Stack, Text } from '@chakra-ui/react';

const Question = ({ pregunta, opciones, handleNextQuestion }) => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleOptionChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleNextQuestion();
  };

  return (
     
      <Box
      width={['100%', '80%', '50%']}
      margin='auto'
      padding='2rem'
      boxShadow='lg'
      borderRadius='lg'
      backgroundColor='gray.100'
      >
      
      <Text fontSize='3xl' fontWeight='bold' mb='2rem' >{pregunta}</Text>
        <form onSubmit={handleSubmit}  >
        {opciones.map((opcion, index) => (
          <Box key={index} mb="1rem"  >
            <label>
              <input 
                style={{ marginRight: '0.5rem' }}
                margin={1}
                type="Radio"
                value={opcion}
                checked={selectedOption === opcion}
                onChange={handleOptionChange}
              />              
              {opcion}
            </label>
          </Box>
        ))}
        <Button type="submit" colorScheme='blue' size='lg' mt='2rem'>
        Enviar
        </Button>
     
        </form>
        </Box>
    
  );
};

export default Question;