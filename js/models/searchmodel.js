import mongoose  from "mongoose";

const searchSchema = new  mongoose.Schema({
    title :{type:String, required:true},
    artist : {type: String, required : true}
})

searchSchema.index({title:'text', artist:'text'})

export const Search = mongoose.model('Search', searchSchema);