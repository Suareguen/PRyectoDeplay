const User = require("../api/models/user.model");

const addRelationshipsModells = () => {
  try {
    //// Many to Many

    console.log("relathionships in models has been addded successfully");
  } catch (error) {
    console.log("error by adding relathionships in modells");

    throw new Error(error);
  }
};

module.exports = { addRelationshipsModells };
