import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': 'a60f5fa0c1msha1337a6b12f1460p1b4771jsnc8fbc5e8fa09' ,
    },
  });
    
  return data;
}