export async function fetchWr() {
    const data = await fetch("http://localhost:3000/api/movies",{
        headers:{
            "Content-Type": "application/json"
        }
    })
    const result = await data.json()
    return result;
}