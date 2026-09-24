'use client'
import { useState } from "react";
import data from "../data/data";

function Main() {
    const[search, setSearch] = useState(""); 
    const[items, setItems] = useState(data);
    const[filteredItems, setFilteredItems] = useState(data);

    const handleSearch = (string:string) => {
        setSearch(string);
        const filteredItems = items.filter(item => {
            if(item.nazwa.toLowerCase().includes(string.toLowerCase()) || item.plu.toLowerCase().includes(string.toLowerCase()) || item.nrart.toLowerCase().includes(string.toLowerCase())){
                return true;
            }
            return false;
        })
        setFilteredItems(filteredItems);
    }

    return (
        <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between py-32 px-16">
            <div className="w-full mb-4">
                <input 
                    type="text" 
                    value={search} 
                    onChange={(e) => handleSearch(e.target.value)} 
                    placeholder="Search..."
                    className="border p-2 rounded w-full"
                />
            </div>

            <div className="min-w-xl w-full mx-auto">
                {filteredItems.map((item) => (
                    <div key={item.nrart} className="flex flex-col border p-2 rounded mb-2">
                        <div>Nazwa: {item.nazwa}</div>
                        <div>PLU: <span className="font-bold">{item.plu}</span></div>
                        <div>Nrart: {item.nrart}</div>
                    </div>
                ))}
            </div>
            
        </main>
    );
}

export default Main;