import withMongoConnect from "../../helpers/back/mongo_connector.js";
let bcrypt = require("bcrypt");
let jwt = require("jwt-simple");

const handler = async ({ req, res, db }) => {
  try {
    let pets = db.getTable("pets");
    let db_pets = await pets.find().exec();

    let last_created_pet =
      db_pets.length > 0 ? db_pets[db_pets.length - 1] : { id: "-1" };

    let new_pet_data = {
      name: req.body.name,
      bio: req.body.bio,
      type: req.body.type,
      owner_id: req.body.owner_id,
      photo: req.body.photo,
      id: (parseInt(last_created_pet.id) + 1).toString()
    };

    let new_pet = new pets(new_pet_data);

    new_pet.save(err => {
      if (err) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: "error" }));
        // res.end(JSON.stringify({ new_user: new_user_data }));
      } else {
        res.statusCode = 200;
        res.end(JSON.stringify({ new_pet: new_pet_data }));
      }
    });
  } catch (e) {
    res.statusCode = 500;
    return res.end(JSON.stringify({ status: "error", error: e }));
  }
};

export default withMongoConnect(handler);
