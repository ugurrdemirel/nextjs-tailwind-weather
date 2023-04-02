import { IWeatherItem } from "@/server/weather";
import { CSSProperties } from "react";

interface IWeather extends IWeatherItem {
    isToday: boolean,
    city: string,
    className?: string
}

export default function Weather(props: IWeather) {
    return (
        <div className={`bg-white dark:bg-gray-700 rounded-lg shadow-lg flex flex-col flex-1 p-5 justify-center items-center min-w-[192px] ${props.className}`}>
            <h2 className='text-center text-3xl'>{
                props.isToday?
                    props.city.charAt(0).toUpperCase() + props.city.slice(1)
                :
                    props.day
            }</h2>
            {
                props.isToday &&
                <h2 className='text-center text-3xl'>{props.day}</h2>
            }
            <img src={props.icon} className="mt-10 w-48 h-48 object-contain" />
            <a className='mt-10 text-center text-xl'>{props.description}</a>
            <a className='mt-10 text-center text-xl'>{parseInt(props.degree)}°</a>
            <a className='text-center'>{parseInt(props.min)}°/{parseInt(props.max)}°</a>
        </div>
    )
}