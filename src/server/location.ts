import axios, { HttpStatusCode } from "axios"

// function params
export interface IGetLocationFromCoordinatesParams {
    latitude: number
    longitude: number
}

// function return type
export interface IGetLocationFromCoordinatesRes {
    latitude: number
    longitude: number
    type: string
    distance: number
    name: string
    number: string
    postal_code: string
    street: string
    confidence: number
    region: string
    region_code: string
    county: string
    locality: string
    administrative_area: any
    neighbourhood: string
    country: string
    country_code: string
    continent: string
    label: string
}

export async function getLocationFromCoordinates(params: IGetLocationFromCoordinatesParams) : Promise<IGetLocationFromCoordinatesRes[] | null> {
    try {
        // make api request
        const req = await axios.get<{data: IGetLocationFromCoordinatesRes[]}>("http://api.positionstack.com/v1/reverse", {
            params: {
                "access_key": process.env.LOCATION_API_KEY,
                "query": `${params.latitude}, ${params.longitude}`
            }
        })
        if(req.status === HttpStatusCode.Ok){
            // if api return 200
            // return location data from api
            return req.data.data
        }else{
            return null
        }
    } catch (e) {
        return null
    }

}