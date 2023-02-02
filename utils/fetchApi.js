import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
  const { data } = await axios.get((url), {
    headers: {
      'x-rapidapi-host': 'bayut.p.rapidapi.com',
      'x-rapidapi-key': '71e5b04560msh619d146a9ac8db3p1485dajsnec4895f419f9' ,
    },
  });
    
  return data;
}