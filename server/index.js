const express = require('express')
const app = express()
const cors = require('cors')
const pool = require('./db')

//middleware
app.use(cors())
app.use(express.json()) //req.body

//Routes

//create a auto
app.post('/autos', async (req, res) => {
  try {
    const reqbod = req.body
    const newAuto = await pool.query(
      'INSERT INTO autos (id_modification, brand, model, modification, generation, drive) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [reqbod[0], reqbod[1], reqbod[2], reqbod[3], reqbod[4], reqbod[5]]
    )
    res.json(newAuto.rows[0])
  } catch (err) {
    console.error(err.message)
  }
})

//get autos

app.get('/autos', async (req, res) => {
  try {
    const getAutos = await pool.query('SELECT * FROM autos')
    res.json(getAutos.rows)
  } catch (err) {
    console.error(err.message)
  }
})
app.listen(5000, () => {
  console.log('server has started on port 5000')
})
