import axios from 'axios';

const apiClient = axios.create({
  baseURL: ''
});

const getAllProducts = async () => {
  const url = '/products.json';

  try {
    const results = await apiClient.get(url);
    return results ? results.data : null;
  } catch (err) {
    console.error(err);
  }
};

export { getAllProducts };
