import { apiData } from "./store";

export const getProducts = async () => {
	const response = await fetch("http://localhost:3000/products", {
		method: "GET",
	});
	const result = await response.json();
	apiData.set(result.response);
};

