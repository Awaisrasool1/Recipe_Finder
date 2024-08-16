import axios from 'axios';

const API_KEY = 'b2ca08de1e854d3fab592ebecc8da8e7';

export const fetchRecipes = async (query: any) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?query=${query}&apiKey=${API_KEY}`,
  );
  return response.data.results;
};

export const fetchRecipeDetails = async (id: any) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`,
  );
  return response.data;
};

export const fetchRecipesByCategory = async (cuisine:any, mealType:any) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&mealType=${mealType}&apiKey=${API_KEY}`
  );
  return response.data.results;
};