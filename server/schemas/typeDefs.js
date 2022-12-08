const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks:[book]
  
  }
  type Book {
    _id: ID
    authors: String
    description: String
    image: String
    link: String
    link: String
    title:String
  
  }

 
  type Query {
    User: [User]
    Book:[Book]
  }

  type Mutation {
    createUser(name: String!): User
    saveBook( _id: ID
      authors: String
      description: String
      image: String
      link: String
      title:String): Book
    deleteBook(_id: ID!): Book
    // getSingleUser(_id: ID!): User
    // login(username: String, email: String, password: String): User
  }
`;

module.exports = typeDefs;
