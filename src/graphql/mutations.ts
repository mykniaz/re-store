// tslint:disable
// this is an auto generated file. This will be overwritten

export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
        role
      }
      items {
        nextToken
      }
    }
    role
  }
}
`;
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
        role
      }
      items {
        nextToken
      }
    }
    role
  }
}
`;
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
        role
      }
      items {
        nextToken
      }
    }
    role
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
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
      role
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
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
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
      role
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
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
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
      role
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
export const createItem = `mutation CreateItem($input: CreateItemInput!) {
  createItem(input: $input) {
    id
    total
    product {
      id
      img
      title
      price
      description
    }
    order {
      id
      total
      user {
        id
        name
        email
        role
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const updateItem = `mutation UpdateItem($input: UpdateItemInput!) {
  updateItem(input: $input) {
    id
    total
    product {
      id
      img
      title
      price
      description
    }
    order {
      id
      total
      user {
        id
        name
        email
        role
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const deleteItem = `mutation DeleteItem($input: DeleteItemInput!) {
  deleteItem(input: $input) {
    id
    total
    product {
      id
      img
      title
      price
      description
    }
    order {
      id
      total
      user {
        id
        name
        email
        role
      }
      items {
        nextToken
      }
    }
  }
}
`;
export const createProduct = `mutation CreateProduct($input: CreateProductInput!) {
  createProduct(input: $input) {
    id
    img
    title
    price
    description
  }
}
`;
export const updateProduct = `mutation UpdateProduct($input: UpdateProductInput!) {
  updateProduct(input: $input) {
    id
    img
    title
    price
    description
  }
}
`;
export const deleteProduct = `mutation DeleteProduct($input: DeleteProductInput!) {
  deleteProduct(input: $input) {
    id
    img
    title
    price
    description
  }
}
`;
