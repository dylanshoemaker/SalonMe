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
  $service: String!
  $startTime: String!
  $user_id: String!
) {
  addAppointment(
    service: $service
    startTime: $startTime
    user_id: $user_id
  ) {
    service
    startTime
    user_id
  }
}
`;

// this is where the error is {look down}
export const ADD_COMMENT = gql`
  mutation addComment($productId: ID!, $commentBody: String!) {
    addComment(productId: $productId, commentBody: $commentBody) {
      _id    
      commentBody {
        _id
        commentBody
        createdAt
      }
    }
  }
`;

export const REMOVE_COMMENT = gql`
  mutation removeComment($productId: ID!, $commentId: ID!) {
    removeComment(productId: $productId, commentId: $commentId) {
      _id
      commentBody
      createdAt
    }
  }
`;