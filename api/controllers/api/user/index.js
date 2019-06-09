module.exports = {


  friendlyName: 'Index',


  description: 'Index user.',


  inputs: {
    userId: {
      type: 'number',
    },
  },


  exits: {

  },


  fn: async function (inputs) {
    var userId = inputs.userId
    var singleUser = await User.findOne({
      id: userId
    });
    return singleUser;
  }
};
