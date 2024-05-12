const express = require('express')
const path = require('path')

const app = express()
const port = 3000

const createPathHtml = (page) => path.join(__dirname, '../public' , `${page}.html`)

const allStaticPath = (directory) => path.join(__dirname , '../public', `${directory}`)
const swiperPath = path.join(__dirname , '../src', 'js')



app.use('/swip', express.static(path.join(__dirname, '../node_modules')));


// JavaScript
app.use('/js' , express.static(swiperPath))

//Fonts static
app.use('/fonts' , express.static(allStaticPath('fonts')))

//Styles static
app.use('/dist' , express.static(allStaticPath('dist')))

//Images static
app.use('/images' , express.static(allStaticPath('images')))


app.get('/' , (req , res) =>{
  res.sendFile(createPathHtml('index'))
})


app.use((req , res) => {
  res
    .status(404)
    .sendFile(createPathHtml('error'))
})



app.listen(port , (err) => {
  err ? console.log(err) : console.log(`http://localhost:${port}`)
})