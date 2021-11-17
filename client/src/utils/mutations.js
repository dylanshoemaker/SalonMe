import gql from 'graphql-tag';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;


export const ADD_ORDER = gql`
  mutation addOrder($products: [ID]!) {
    addOrder(products: $products) {
      purchaseDate
      products {
        _id
      name
      description
      price
      quantity
      category {
        name
      } 
      }
    }
  }
`;


export const ADD_USER = gql`
  mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
    addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_APPOINTMENT = gql`
mutation addAppointment(
  $name: String!
  $service: String!
  $appointmentDate: String!
  $appointmentTime: String!
  $user_id: String!
) {
  addAppointment(
    name: $name
    service: $service
    appointmentDate: $appointmentDate
    appointmentTime: $appointmentTime
    user_id: $user_id
  ) {
    name
    service
    appointmentDate
    appointmentTime
    user_id
  }
}

`;