const express = require('express')
const connectDB = require('./config/db')
const cors = require('cors')

const corsOptions = {
    origin: ['http://localhost:3000', 'http://localhost:5000'],
    optionsSuccessStatus: 200 
  }
  
  const app = express()
app.use(cors(corsOptions))
  
  // Connect DB
connectDB()

//Init Middleware
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('API running'))

//Define Routes
app.use('/api/users', require('./routes/api/users'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/posts'))

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
})