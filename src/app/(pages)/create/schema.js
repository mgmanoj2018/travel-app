import { optionLocations,optionTypes } from "@/data/data";
import {z} from 'zod'

const schema = z.object({
    name:z.string().min(1,{massage:"Name is required"}),
    desc:z.string().min(1,{massage:"Name is required"}),
    beds:z.number().min(1,{massage:"Name is required"}),
    hasFreeWifi:z.boolean().optional(),
    type:z.enum(optionTypes.map(({value})=> value)),
    location:z.enum(optionLocations.map(({value})=>value)),
    pricePerNight:z.number().min(15,{massage:"Price must be above $15!"}).max(5000,{massage:"Price can't be above $500!"}),
})
export {schema}