import { join } from 'node:path'
import express from 'express'

const server = express()

server.use(express.json())
server.use(express.static(join(__dirname, './public')))

server.get('/triangle', (req, res) => {
  const { a, b, c } = req.query
  const angle_a = parseInt(a, 10)
  const angle_b = parseInt(b, 10)
  const angle_c = parseInt(c, 10)

  if (angle_a + angle_b + angle_c !== 180) {
    res.status(400)
    res.json(
      'ERROR STATUS: 400: deformed parameters provided.  shape is not a triangle as angles do not equal 180 degrees'
    )
  } else if (angle_a == angle_b && angle_b == angle_c) {
    res.status(200)
    res.json({ triangle: 'EQUILATERAL' })
  } else if (angle_a == angle_b || angle_a == angle_c || angle_c == angle_b) {
    res.status(200)
    res.json({ triangle: 'ISOSCELES' })
  } else {
    res.status(200)
    res.json({ triangle: 'SCALENE' })
  }
})

export default server
