import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import { InputBox } from "../components/InputBox";
import { Button, Heading, Img } from '@chakra-ui/react'

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_REACT,
});

const openai = new OpenAIApi(configuration);



function App() {
  const [userPrompt, setUserPrompt] = useState("");
  const [number] = useState(1);
  const [size, setSize ] = useState ("256x256");
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
    <main className="App">
      <Heading marginInline="50px">Describenos tu casa ideal y te planteamos ideas de como luciria!</Heading>
      {imageUrl && <Img src={imageUrl} className="image" alt="ai thing" />}
      <InputBox setAttribute={setUserPrompt} />
      <Button className="main-button" onClick={() => generateImage()}>
        Generar
      </Button>
    </main>
  );
}

export default App;