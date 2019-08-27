const MongoClient = require("mongodb").MongoClient;
   
const url = "mongodb://nin-proxy.fun:27017/";
const mongoClient = new MongoClient(url, { useNewUrlParser: true });
 
mongoClient.connect(function(err, client){
      return console.log(err)
    const db = client.db("usersdb");
    // console.log(db)
    // // const collection = db.collection("users");
 
    // if(err) return console.log(err);
      
    // collection.findOne().toArray(function(err, results){
                 
    //     console.log(results);
    //     client.close();
    // });
});