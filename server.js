
require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')


mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

 
app.use(express.json())

const User = require('./User')

//run() 

async function run() {
    const user = new User({name: "Marcel", age :52})
    try {
        await user.save()   
    } catch (error) {
        console.error(error)
    }
     
    console.info(user)

}

const posts = [
    {
        user: "Marcel",
        title: "Post 1"
    }
    ,
    {
        user: "Jim",
        title: "Post 2"
    }
]

app.get('/posts', (req, resp) => {
  resp.json(posts)
})



// Creating one
app.post('/user', async (req, res) => {
    const user = new User({
      name: req.body.name
    })
    try {
      const savedUser = await user.save()
      res.status(201).json(savedUser)
    } catch (err) {
      res.status(400).json({ message: err.message })
    }
  })

console.info('Listening on port')
app.listen(3000)


