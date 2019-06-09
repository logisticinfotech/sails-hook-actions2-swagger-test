module.exports = {


  friendlyName: 'Index',


  description: 'Index user.',


  inputs: {

  },


  exits: {

  },


  fn: async function (inputs) {
    var allUser = await User.find({});
    return allUser;
  }
};
