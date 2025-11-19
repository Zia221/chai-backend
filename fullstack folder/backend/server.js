import express from 'express';
const app=express()
app.use(express.static('dist'))
// app.get('/',(req,res)=>{
//   res.send('server is ready');
// });

app.get('/api/jokes',(req,res)=>{
  const jokes=[
    {
      id:1,
      title:' a joke',
      content:'this is a funny joke'
    },
    {
      id:2,
      title:'another joke',
      content:'this is another funny joke'
    },
    {
      id:3,
      title:'A THIRD JOKE ',
      content:'this is a third  joke'
    },
    {
      id:4,
      title:'FOURTH JOKE ',
      content:'this is a fourth  joke'
    },
    {
      id:5,
      title:'FIFTH JOKE ',
      content:'this is a fifth  joke'
    }
  ]
  res.send(jokes);
})

const port =process.env.PORT|| 3000;
app.listen(port,()=>{
  console.log(`server at http://localhost:${port}`);
}
)