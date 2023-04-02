import axios from "axios"

interface IWeatherReqProps {
    city: string,
    lang: string
}

export interface IWeatherItem {
    date: string
    day: string
    icon: string
    description: string
    status: string
    degree: string
    min: string
    max: string
    night: string
    humidity: string
}

export interface IWeatherSuccessRes {
    result: IWeatherItem[]
    city: string
}

export async function getWeather(params: IWeatherReqProps) : Promise<IWeatherSuccessRes | null>{
    try {
        const req = await axios.get<IWeatherSuccessRes>(
            `https://api.collectapi.com/weather/getWeather?data.lang=${params.lang}&data.city=${params.city}`,
            {
                headers: {
                    "Authorization": `apikey ${process.env.WEATHER_API_KEY}`
                }
            }
        )
        return req.data 
    }catch(e){
        return null
    }
}