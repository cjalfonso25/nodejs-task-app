//CRUD - create read update delete

// const mongodb = require("mongodb");
// const MongoClient = mongodb.MongoClient; //needed to perform CRUD
// const ObjectID = mongodb.ObjectID;

const { MongoClient, ObjectID } = require("mongodb");

const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

const id = new ObjectID();

MongoClient.connect(
  connectionURL,
  { useUnifiedTopology: true },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to database");
    }

    const db = client.db(databaseName);

    // db.collection("users").findOne(
    //   {
    //     _id: new ObjectID("5e701ae36af5d92ad871d220")
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to find user.");
    //     }

    //     console.log(result);
    //   }
    // );

    // db.collection("users")
    //   .find({ name: "Jude" })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });

    // db.collection("tasks").findOne(
    //   {
    //     _id: new ObjectID("5e6ccd8d3ae36212dcc1b067")
    //   },
    //   (error, result) => {
    //     if (error) {
    //       return console.log("Unable to find task.");
    //     }

    //     console.log(result);
    //   }
    // );

    // db.collection("tasks")
    //   .find({ completed: false })
    //   .toArray((error, result) => {
    //     console.log(result);
    //   });

    // db.collection("users")
    //   .updateOne(
    //     {
    //       _id: new ObjectID("5e6cc9f4a4c68b05b889cdb6")
    //     },
    //     {
    //       // $set: {
    //       //   name: "Juderest"
    //       // }
    //       $inc: {
    //         age: 2
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log(result);
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });

    // db.collection("tasks")
    //   .updateMany(
    //     {
    //       completed: true
    //     },
    //     {
    //       $set: {
    //         completed: false
    //       }
    //     }
    //   )
    //   .then(result => {
    //     console.log("Updated");
    //   })
    //   .catch(error => {
    //     console.log("Error");
    //   });

    db.collection("users")
      .deleteMany({
        age: 21
      })
      .then(result => {
        console.log("Deleted");
      })
      .catch(error => {
        console.log("Error");
      });
  }
);
