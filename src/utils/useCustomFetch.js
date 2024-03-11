import { createFetch } from "@vueuse/core";

export const useCustomFetch = createFetch({
  baseUrl: "https://jsonplaceholder.typicode.com/",
  fetchOptions: {
    mode: "cors",
  },
});

