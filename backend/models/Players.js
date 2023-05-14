import mongoose from "mongoose";
const Schema = mongoose.Schema;

const playersSchema = new Schema({
    name: {
        type: String,
        required: true
    }, 
    description: {
        type: String,
        default: 'no description'
    }
}, 
{ versionKey: false }
);

playersSchema.set('toJSON', {
    virtuals: true,
    versionKey:false,
    transform: function (doc, ret) {   delete ret._id  }
});

const Players =  mongoose.model('Players', playersSchema);
export default Players;