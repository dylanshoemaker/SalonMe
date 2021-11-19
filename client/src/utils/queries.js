import gql from 'graphql-tag';

export const QUERY_PRODUCTS = gql`
  query getProducts($category: ID) {
    products(category: $category) {
      _id
      name
      description
      price
      quantity
      image
      category {
        _id
      }
      comments {
        _id
        createdAt
        commentBody
      }
    }
  }
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($products: [ID]!) {
    checkout(products: $products) {
      session
    }
  }
`;

export const QUERY_ALL_PRODUCTS = gql`
  {
    products {
      _id
      name
      description
      price
      quantity
      category {
        name
      }
      comments {
        _id
        createdAt
        commentBody
      }
    }
  }
`;

export const QUERY_CATEGORIES = gql`
{
  categories {
    _id
    name
  }
}
`;

export const QUERY_USER = gql`
{
  user {
    firstName
    lastName
    orders {
      _id
      purchaseDate
      products {
        _id
        name
        description
        price
        quantity
        image
      }
    }
  }
}
`;

export const QUERY_APPOINTMENTS = gql`
query appointments(
  $user_id: String!
) {
  appointments(
    user_id: $user_id
  ) {
    service
    startTime
    user_id
  }
}
`;


export const QUERY_COMMENT = gql`
  query comments($id: ID!) {
    comment(_id: $id) {
      _id
      commentBody
      createdAt
    }
  }
`;
