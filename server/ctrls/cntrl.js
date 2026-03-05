import fs from "fs/promises"

export async function movies(req,res){
    try {
        const movie = await fs.readFile('../server/data/data.json',"utf-8")
        return res.send(movie)
    } catch (error) {
        console.log(error.message)
    }
    
}