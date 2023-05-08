
import React, { useState } from 'react';
import { Box, FormControl, FormLabel, Input, Textarea, Button, SimpleGrid, Card, Checkbox, Select, Image as ChakraImage } from "@chakra-ui/react";

export default function Publicar() {
  const [titulo, setTitulo] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [precio, setPrecio] = useState('');
  const [direccion, setDireccion] = useState('');
  const [antiguedad, setAntiguedad] = useState('');
  const [area, setArea] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [tieneAscensor, setTieneAscensor] = useState(false);
  const [piso, setPiso] = useState('');
  const [amoblado, setAmoblado] = useState(false);
  const [garaje, setGaraje] = useState(false);
  const [precioAdmin, setPrecioAdmin] = useState('');
  const [barrio, setBarrio] = useState('');
  const [numHabitaciones, setNumHabitaciones] = useState('');
  const [estrato, setEstrato] = useState('');
  const [numBanos, setNumBanos] = useState('');
  const [imagenes, setImagenes] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Aquí puede enviar los datos del formulario a su servidor para guardarlos en su base de datos
    // por ejemplo, usando fetch o axios
  };

  const handleImagenes = (event) => {
    const files = event.target.files;
    const urls = [];
  
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const url = URL.createObjectURL(file);
      urls.push(url);
    }
  
    setImagenes(urls);
  };



  return (
    <Box maxW="md" mx="auto" mt="8">
      <Card p="8">
        <FormControl onSubmit={handleSubmit}>
          <FormLabel>Título</FormLabel>
          <Input type="text" value={titulo} onChange={(event) => setTitulo(event.target.value)} />

          <FormLabel mt="4">Descripción</FormLabel>
          <Textarea value={descripcion} onChange={(event) => setDescripcion(event.target.value)} />

          <FormLabel mt="4">Precio</FormLabel>
          <Input type="number" value={precio} onChange={(event) => setPrecio(event.target.value)} />

          <FormLabel mt="4">Dirección</FormLabel>
          <Input type="text" value={direccion} onChange={(event) => setDireccion(event.target.value)} />

          <FormLabel mt="4">Antigüedad</FormLabel>
          <Input type="number" value={antiguedad} onChange={(event) => setAntiguedad(event.target.value)} />

          <FormLabel mt="4">Área</FormLabel>
          <Input type="number" value={area} onChange={(event) => setArea(event.target.value)} />

          <FormLabel mt="4">Ciudad</FormLabel>
          <Input type="text" value={ciudad} onChange={(event) => setCiudad(event.target.value)} />

          <FormLabel mt="4">Tiene ascensor</FormLabel>
          <Checkbox isChecked={tieneAscensor} onChange={(event) => setTieneAscensor(event.target.checked)}>
            Sí
          </Checkbox>

          <FormLabel mt="4">En qué piso está</FormLabel>
          <Input type="number" value={piso} onChange={(event) => setPiso(event.target.value)} />

          <FormLabel mt="4">¿Está amoblado?</FormLabel>
          <Checkbox isChecked={amoblado} onChange={(event) => setAmoblado(event.target.checked)}>
            Sí
          </Checkbox>

          <FormLabel mt="4">¿Tiene garaje?</FormLabel>
          <Checkbox isChecked={garaje} onChange={(event) => setGaraje(event.target.checked)}>
            Sí
          </Checkbox>

          <FormLabel mt="4">Precio de administración</FormLabel>
          <Input type="number" value={precioAdmin} onChange={(event) => setPrecioAdmin(event.target.value)} />

          <FormLabel mt="4">Barrio</FormLabel>
          <Input type="text" value={barrio} onChange={(event) => setBarrio(event.target.value)} />

          <FormLabel mt="4">Número de habitaciones</FormLabel>
          <Input type="number" value={numHabitaciones} onChange={(event) => setNumHabitaciones(event.target.value)} />

          <FormLabel mt="4">Estrato</FormLabel>
          <Select value={estrato} onChange={(event) => setEstrato(event.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
          </Select>

          <FormLabel mt="4">Número de baños</FormLabel>
          <Input type="number" value={numBanos} onChange={(event) => setNumBanos(event.target.value)} />

          <FormLabel mt="4">Imágenes</FormLabel>
            <Input type="file" id="imagenes" multiple onChange={handleImagenes} />
            
            {imagenes.length > 0 && (
            <SimpleGrid columns={3} spacing={2} mt="4">
                {imagenes.map((imagen) => (
                    <Box key={imagen} w="100%" h="150px" bg="gray.100" borderRadius="md">
                         <ChakraImage src={imagen} w="100%" h="100%" objectFit="cover" borderRadius="md" />
                     </Box>
                ))}
            </SimpleGrid>
            )}

            
          <Button mt="8" colorScheme="blue" type="submit">
            Publicar
          </Button>
        </FormControl>
      </Card>
    </Box>
  );
}