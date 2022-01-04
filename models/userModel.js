import mongoose, { mongo } from 'mongoose'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    default: 'user'
  },
  root: {
    type: Boolean,
    default: false
  },
  avatar: {
    type: String,
    default: 'https://64.media.tumblr.com/21990d10166d67517a47403b916f3693/295fb62bd76b4061-71/s1280x1920/bc2f639e47f767f1864ef0e7c5a9b6a05d9eacb6.png'
  }
}, {
  timestamps: true
})

let Dataset = mongoose.models.user || mongoose.model('user', userSchema)

export default Dataset
