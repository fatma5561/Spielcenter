//  // set up ======================== 
  const bodyParser = require('body-parser');
  const express  = require('express'); 
   const app = express();

  const path     = require('path'); 

 
 // configuration =================
  app.use(express.static(path.join(__dirname, '/dist/my-new-angular-app')));  
 
//  // application -------------------------------------------------------------
   app.get('/', function(req,res) 
 {     
      //res.send("Hello World123");     
      res.sendFile('index.html', { root: __dirname+'/dist/my-new-angular-app' });             
 });


const {Pool, Client} = require('pg');

//const connectionString = 'postgresql://postgres:samsun@localhost:5432/Spielcenter';

const client = new Client({
     //connectionString:connectionString
     database: "Spielcenter",
     host: "localhost",
     port: 5432,
     user: "postgres",
     password: "samsun"
});

//client.connect();

     client.connect(function(err)
     {
          if(err) throw err;
         else console.log("Connected!"); 
         client.query('SELECT * FROM public."Spielraum"', 
               function(error,results,fields)
               {
                    if(error) throw error;
                    console.log(results);
                    res.send(results);
               
                    client.end(function(err)
                    {
                         if(err) throw err;
                         console.log("Connection end");          
                    });
               }
       );
 }); 


// client.connect(function(err)
// {
//      if(err) throw err;
//      console.log("Connected!");
//      client.query('SELECT * FROM Spielraum', (err,res) => {
//      console.log(err,res);
//      client.end();

// });


// });
//  {
//      var con = new Client({
//           database: "Spielcenter",
//           host: "localhost",
//           port: 5432,
//           user: "postgres",
//           password: "samsun",
//      });

//      con.connect();
     
//      con.connect(function(err)
//      {
//           if(err) throw err;
//          else console.log("Connected!"); 
//          con.query('SELECT * FROM Spielcenter.Spielraum', 
//                function(error,results,fields)
//                {
//                     if(error) throw error;
//                     console.log(results);
//                     res.send(results);
               
//                     con.end(function(err)
//                     {
//                          if(err) throw err;
//                          console.log("Connection end");          
//                     });
//                }
//        );
//  }); 

 
 
 // listen (start app with node server.js) ======================================
 app.listen(8080, function(){    
      console.log("App listening on port 8080");
});