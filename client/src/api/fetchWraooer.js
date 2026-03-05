// import { useSorte } from "../store/ZustandStore";

// const { setError } = useSorte()
export async function fetchWr() {
    try {
        const data = await fetch("http://localhost:3000/api/movies", {
            headers: {
                "Content-Type": "application/json"
            }
        })
        const result = await data.json()
        return result;
    } catch (error) {
        setError(error.message)
    }
}