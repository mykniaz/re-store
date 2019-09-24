/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBook = `query GetBook($id: ID!) {
  getBook(id: $id) {
    id
    title
    price
    author
    img
  }
}
`;
export const listBooks = `query ListBooks(
  $filter: ModelBookFilterInput
  $limit: Int
  $nextToken: String
) {
  listBooks(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      price
      author
      img
    }
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    user {
      id
      name
      email
      order {
        id
      }
    }
    books {
      id
      title
      price
      author
      img
    }
  }
}
`;
export const listOrders = `query ListOrders(
  $filter: ModelOrderFilterInput
  $limit: Int
  $nextToken: String
) {
  listOrders(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      user {
        id
        name
        email
      }
      books {
        id
        title
        price
        author
        img
      }
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    order {
      id
      user {
        id
        name
        email
      }
      books {
        id
        title
        price
        author
        img
      }
    }
  }
}
`;
export const listUsers = `query ListUsers(
  $filter: ModelUserFilterInput
  $limit: Int
  $nextToken: String
) {
  listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      email
      order {
        id
      }
    }
    nextToken
  }
}
`;
