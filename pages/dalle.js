import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "../components/InputBox";
import { Button, Heading, Img, Flex } from '@chakra-ui/react'


const configuration = new Configuration({
  apiKey: process.env.NEXT_PUBLIC_REACT,
});

const openai = new OpenAIApi(configuration);

function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number, setNumber] = useState(1);
  const [size, setSize] = useState("256x256");
  const [imageUrl, setImageUrl] = useState("");

  const generateImage = async () => {
    const imageParameters = {
      prompt: userPrompt,
      n: parseInt(number),
      size: size,
    };

    const response = await openai.createImage(imageParameters);
    const urlData = response.data.data[0].url;
    setImageUrl(urlData);
  };

  return (
    <Flex direction="column" align="center" justify="center" minHeight="100vh">
      <Heading marginBottom="2rem">
        Describenos tu casa ideal y te planteamos ideas de cómo luciría!
      </Heading>
      {imageUrl && <Img src={imageUrl} alt="AI generated image" />}
      <InputBox setAttribute={setUserPrompt} />
      <Button
        onClick={generateImage}
        marginTop="1rem"
        paddingX="2rem"
        paddingY="1rem"
        borderRadius="md"
        colorScheme="teal"
      >
        Generar
      </Button>
    </Flex>
  );
}

export default App;