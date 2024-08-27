import { View, Text } from "react-native"
import { useState, useEffect } from "react"
import { StoreItem } from "./item"

export interface StoreProps {
    id: string;
    name: string;
    image:string;
}

export function StoreList(){
    const [restaurants, setRestaurants] = useState<StoreProps[]>([])

    useEffect(() => {
        async function getRestaurants() {
            const response = await fetch("http://192.168.1.65:3000/restaurants")
            const data = await response.json()
            setRestaurants(data)
        }

        getRestaurants()
    }, [])

    return (
        <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
            {restaurants.map( item => (
                <StoreItem item={item} key={item.id}/>
            ))}
        </View>
    )
}