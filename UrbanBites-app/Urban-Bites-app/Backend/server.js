const express=require('express');
const mysql=require('mysql');
const cors=require('cors');

const app=express();
app.use(cors());

const db=mysql.createConnection({
    host: "localhost",
    user: 'root',
    password:'',
    database: 'food'
})



app.get('/',(re,res)=> {
    return res.json("From backend");
})

app.get('/breakfast', (req,res)=>{
    const sql="SELECT * FROM breakfast";
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.get('/lunch', (req,res)=>{
    const sql="SELECT * FROM lunch";
    db.query(sql, (err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8081, ()=>{
    console.log("listening")
})