var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://CatDB:153426selu@cluster0.4gq14.mongodb.net/CatDB?retryWrites=true&w=majority";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("CatDB");
  var myobj = [
    { 
        courseName:'MATH 101',
        courseDesc:'Basic Math to get you through the door!'
    },
    { 
        courseName:'MATH 102',
        courseDesc:'More Basic Math to keep you thoroughly bored!'
    },
    { 
        courseName:'CMPS 101',
        courseDesc:'Learn to move that plastic device called a mouse!'
    },
    { 
        courseName:'CMPS 102',
        courseDesc:'Now we can learn how to get past a Captcha!'
    },
    { 
        courseName:'ENGL 322',
        courseDesc:'William Shakespeare (bapt. 26 April 1564 – 23 April 1616) was an English playwright, poet, and actor, widely regarded as the greatest writer in the English language and the world\'s greatest dramatis. He is often called England\'s national poet and the "Bard of Avon" (or simply "the Bard"). His extant works, including collaborations, consist of some 39 plays, 154 sonnets, two long narrative poems, and a few other verses, some of uncertain authorship. His plays have been translated into every major living language and are performed more often than those of any other playwright. They also continue to be studied and reinterpreted.'
    }
  ];
  dbo.collection("courses").insertMany(myobj, function(err, res) {
    if (err) throw err;
    console.log("Number of documents inserted: " + res.insertedCount);
    db.close();
  });
}); 