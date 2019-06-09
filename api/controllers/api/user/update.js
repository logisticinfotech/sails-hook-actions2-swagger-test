module.exports = {


  friendlyName: 'Update',


  description: 'Update user.',


  inputs: {
    userId: {
      type: 'number',
      required: true,
    },
    firstName: {
      type: 'string',
      required: true,
    },
    lastName: {
      type: 'string',
      required: true,
    },
    password: {
      //   required: true,
      type: 'string',
      maxLength: 15,
      minLength: 6,
      description: 'The unencrypted password to use for the new account.'
    },
  },


  exits: {
    redirect: {
      responseType: 'redirect'
    }
  },


  fn: async function (inputs, exits) {
    console.log('gone in update');

    let objUser = {
      firstName: inputs.firstName,
      lastName: inputs.lastName,
    }

    if (inputs.password) {
      objUser.password = inputs.password;
    }

    var updatedUser = await User.update({
      id: inputs.userId
    }).set(objUser);

    console.log("user update id :- ", inputs.userId, updatedUser);
    return exits.success({
      message: 'User has been updated successfully.',
      data: updatedUser
    });
  }
};
