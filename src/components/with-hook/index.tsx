import { useFetch } from "../../hooks/use-fetch";

export const WithHook = () => {
    const { data, error, isLoading } = useFetch();

    if (error) {
        return <h1>Error</h1>;
    }

    if (isLoading) {
        return <h1>Loading...</h1>;
    }

    return <h1>{data.name}</h1>;
};