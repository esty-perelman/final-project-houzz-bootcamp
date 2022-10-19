import  { useEffect, useState } from "react";
import { Item } from "../Item";

function ShowItems() {
    const [items, setItems] = useState<Array<Item> | undefined>(undefined)
    useEffect(() => {
        setItems([{ name: "a", price: 1, _id: "a" }, { name: "b", price: 2, _id: "b" }])
    }, [])
    return (
        <div>
            {items && items.map((x) => {
                return <div>
                    {x.name} {x.price}
                </div>
            }
            )}
        </div>
    )
}

export default ShowItems