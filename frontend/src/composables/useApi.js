import { ref } from "vue";
import { axios_api, API_BASE_URL } from "@/services/axios_api";

export function useFetchAllProducts() {
  const products = ref([]);
  const productsLoading = ref(false);

  const fetchAllProducts = async () => {
    productsLoading.value = true;

    try {
      const response = await axios_api.get(`${API_BASE_URL}/products`);
      products.value = response.data;
      productsLoading.value = false;
    } catch (error) {
      console.log(error);
    }
  };

  return { products, productsLoading, fetchAllProducts };
}
