const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Appointment {
    _id: ID
    service: String
    startTime: String
    user_id: ID
  }

  type Category {
    _id: ID
    name: String
  }

  type Product {
    _id: ID
    name: String
    description: String
    image: String
    quantity: Int
    price: Float
    category: Category
    comments: [Comment]

  }

  type Comment {
    _id: ID
    commentBody: String
    createdAt: String
}

  type Order {
    _id: ID
    purchaseDate: String
    products: [Product]
  }

  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    orders: [Order]
    appointments: [Appointment]
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    products(category: ID, name: String): [Product]
    product(_id: ID!): Product
    user: User
    order(_id: ID!): Order
    checkout(products: [ID]!): Checkout
    appointments(user_id: ID!): [Appointment]
  }

  type Mutation {
    addAppointment( service: String!, startTime: String!, user_id: String!): Appointment
    updateAppointment(_id: ID!): Appointment
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    addOrder(products: [ID]!): Order
    addComment(productId: ID!, commentBody: String!): Comment
    removeComment(productId: ID!, commentId: ID!): Comment
    updateUser(firstName: String, lastName: String, email: String, password: String): User
    updateProduct(_id: ID!, quantity: Int!): Product
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
