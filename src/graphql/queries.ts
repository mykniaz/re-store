// tslint:disable
// this is an auto generated file. This will be overwritten

export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    order {
      id
      total
      user {
        id
        name
        email
      }
      items {
        nextToken
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
        total
      }
    }
    nextToken
  }
}
`;
export const getOrder = `query GetOrder($id: ID!) {
  getOrder(id: $id) {
    id
    total
    user {
      id
      name
      email
      order {
        id
        total
      }
    }
    items {
      items {
        id
        total
      }
      nextToken
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
      total
      user {
        id
        name
        email
      }
      items {
        nextToken
      }
    }
    nextToken
  }
}
`;
export const getItem = `query GetItem($id: ID!) {
  getItem(id: $id) {
    id
    total
    product {
      id
      price
      title
      img
      description
    }
    order {
      id
      total
      user {
        id
        name
        email
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const listItems = `query ListItems(
  $filter: ModelItemFilterInput
  $limit: Int
  $nextToken: String
) {
  listItems(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      total
      product {
        id
        price
        title
        img
        description
      }
      order {
        id
        total
      }
    }
    nextToken
  }
}
`;
export const getProduct = `query GetProduct($id: ID!) {
  getProduct(id: $id) {
    id
    price
    title
    img
    description
  }
}
`;
export const listProducts = `query ListProducts(
  $filter: ModelProductFilterInput
  $limit: Int
  $nextToken: String
) {
  listProducts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      price
      title
      img
      description
    }
    nextToken
  }
}
`;
