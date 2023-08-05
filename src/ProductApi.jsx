// productApi.js
export const fetchProducts = async () => {
  try {
    const response = await fetch(
      "https://content.newtonschool.co/v1/pr/63b6c911af4f30335b4b3b89/products?limit=20&page=1"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch products from the API.");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
