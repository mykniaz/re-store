/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBook = `subscription OnCreateBook {
  onCreateBook {
    id
    title
    price
    author
    img
  }
}
`;
export const onUpdateBook = `subscription OnUpdateBook {
  onUpdateBook {
    id
    title
    price
    author
    img
  }
}
`;
export const onDeleteBook = `subscription OnDeleteBook {
  onDeleteBook {
    id
    title
    price
    author
    img
  }
}
`;
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
