// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getLocationFromCoordinates } from '@/server/location'
import { IWeatherSuccessRes, getWeather } from '@/server/weather'
import type { NextApiRequest, NextApiResponse } from 'next'

interface IWeatherApiRequest extends Omit<NextApiRequest, "query"> {
    query: {
        latitude: string,
        longitude: string
    }
}

export default async function handler(
  req: IWeatherApiRequest,
  res: NextApiResponse<IWeatherSuccessRes | null>
) {
    console.log(req.query)
    const location = await getLocationFromCoordinates({
        latitude: parseFloat(req.query.latitude),
        longitude: parseFloat(req.query.longitude)
    })
    if(location){
        console.log(location)
        const weather = await getWeather({
            city: location[0].region,
            lang: req.headers['accept-language'] || "en"
        })
        if(weather){
            res.status(200).send(weather)
        }
    }
    res.status(500).send(null)
}
