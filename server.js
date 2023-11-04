import express from 'express'
import {} from 'dotenv/config'
import fetch from 'node-fetch'

const app = express()
 const PORT = process.env.PORT || 8088

app.get('/api/comments/:id', (req, res)=>{
    const limit = req.params.id
    const passedLimit = parseInt(limit);
  if (isNaN(passedLimit) || passedLimit <= 0) {
    return res.status(400).json({ error: 'Invalid limit value' });
  }

    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response=>response.json())
    .then(data=>res.json(data.slice(0,limit)))
    .catch(error=>console.log(error))
})

app.get('/api/posts/:id', (req, res)=>{
    const postLimit = req.params.id
    const passedPostlimit = parseInt(postLimit)
    if(isNaN(passedPostlimit) || passedPostlimit <= 0){
      return res.status(400).json({error: 'invalid input'})
    }
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => res.json(data.slice(0, postLimit)))
    .catch(error => console.log(error))
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}
    press CTRL+C to stop the server.`)
})