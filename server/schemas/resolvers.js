const { AuthenticationError } = require('apollo-server-express');
const { Book,User } = require('../models');

const resolvers = {
  Query: {
    getSingleUser: async (parent) => {
      return await User.findOne({ _id: userId })
    },
    
  },

  Mutation: {
    createUser: async (parent, { }) => {
      const user = await Matchup.create({username,email,password,});
      const token = signToken(user);
      return user;
    },
  
  },
};

module.exports = resolvers;
