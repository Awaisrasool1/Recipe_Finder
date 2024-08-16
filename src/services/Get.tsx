import axios from 'axios';

const API_KEY = '4b4f2123b8fe49c7945807721ad2ff83';

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

export const fetchRecipesByCategory = async (cuisine: any, mealType: any) => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?cuisine=${cuisine}&mealType=${mealType}&apiKey=${API_KEY}`,
  );
  return response.data.results;
};

export const rendomRecipe = async () => {
  const response = await axios.get(
    `https://api.spoonacular.com/recipes/random?number=10&apiKey=${API_KEY}`,
  );
  return response.data.recipes;
};
