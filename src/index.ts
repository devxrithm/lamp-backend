import express from 'express';
import cors from 'cors'

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extends: true }))
app.use(cors())


app.get('/', (req, res) => {
  const name = process.env.NAME || 'World';
  res.send(`Hello ${name}!`);
});



const port = parseInt(process.env.PORT || '3000');
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
