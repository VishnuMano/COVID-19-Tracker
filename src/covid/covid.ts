// export interface Covid {
//     _id: string;
//     type: string;
//     number: string;
// }
import * as mongoose from 'mongoose';
export interface Covid extends mongoose.Document  {
    _id: string;
    type: string;
    number: string;
  }
  