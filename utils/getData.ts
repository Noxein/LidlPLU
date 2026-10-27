import { getPLUs } from "@/actions";
import type { Product } from "./types";

export const getData = async () => {

    const userData = await getPLUs()
    const data = async () => await fetch('https://raw.githubusercontent.com/Noxein/data/main/plucode.json')
            .then(res => res.blob())
            .then(blob => blob.text())
            .then(data => JSON.parse(data))
    const parsedData = await data(); 
    return [...parsedData as Product[], ...userData.data]
}