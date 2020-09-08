import * as mongooose from "mongoose";

export const CovidSchema = new mongooose.Schema({
    type: String,
    number: String
}, {collection: 'covid'}) 