import withMongoConnect from "../../helpers/back/mongo_connector.js";
import JWTcheck from "../../helpers/back/auth_checker.js";
// import YOUR-SCHEMA from '../../../../models/SCHEMA-NAME.schema'

const handler = async ({ req, res, db }) => {
  // JWTcheck({ req, res });
  // const users = db.getTable("users");
  // const db_users = await users.find().exec();
  // res.end(JSON.stringify({ users: db_users }));
  // // res.end(JSON.stringify({ users: [] }));
  // return {};
  console.log("get_user_pets");
  const pets = await db.getTable("pets");

  let owner_id = req.body.user_id;
  pets
    .find({ owner_id })
    .select()
    .exec((err, pets) => {
      if (err || !pets) {
        res.statusCode = 500;
        res.end(JSON.stringify({ status: "error" }));
      }

      res.end(JSON.stringify({ pets: pets.reverse() }));
    });
};

export default withMongoConnect(handler);
