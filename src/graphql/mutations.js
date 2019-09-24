/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBook = `mutation CreateBook($input: CreateBookInput!) {
  createBook(input: $input) {
    id
    title
    price
    author
    img
  }
}
`;
export const updateBook = `mutation UpdateBook($input: UpdateBookInput!) {
  updateBook(input: $input) {
    id
    title
    price
    author
    img
  }
}
`;
export const deleteBook = `mutation DeleteBook($input: DeleteBookInput!) {
  deleteBook(input: $input) {
    id
    title
    price
    author
    img
  }
}
`;
export const createOrder = `mutation CreateOrder($input: CreateOrderInput!) {
  createOrder(input: $input) {
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
export const updateOrder = `mutation UpdateOrder($input: UpdateOrderInput!) {
  updateOrder(input: $input) {
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
export const deleteOrder = `mutation DeleteOrder($input: DeleteOrderInput!) {
  deleteOrder(input: $input) {
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
export const createUser = `mutation CreateUser($input: CreateUserInput!) {
  createUser(input: $input) {
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
export const updateUser = `mutation UpdateUser($input: UpdateUserInput!) {
  updateUser(input: $input) {
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
export const deleteUser = `mutation DeleteUser($input: DeleteUserInput!) {
  deleteUser(input: $input) {
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
