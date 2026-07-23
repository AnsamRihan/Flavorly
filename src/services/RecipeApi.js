import axios from "axios";

const BASE_URL = import.meta.env.VITE_BURL;

export async function getRecipes(value) {
  try {
    const response = await axios.get(BASE_URL, {
      params: {
        search: value,
      },
    });

    return response.data;

  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to fetch recipes"
    );
  }
}