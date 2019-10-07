// tslint:disable
// this is an auto generated file. This will be overwritten

export const onCreateUser = `subscription OnCreateUser {
  onCreateUser {
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
export const onUpdateUser = `subscription OnUpdateUser {
  onUpdateUser {
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
export const onDeleteUser = `subscription OnDeleteUser {
  onDeleteUser {
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
export const onCreateOrder = `subscription OnCreateOrder {
  onCreateOrder {
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
export const onUpdateOrder = `subscription OnUpdateOrder {
  onUpdateOrder {
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
export const onDeleteOrder = `subscription OnDeleteOrder {
  onDeleteOrder {
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
export const onCreateItem = `subscription OnCreateItem {
  onCreateItem {
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    img
    title
    price
    description
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    img
    title
    price
    description
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    img
    title
    price
    description
  }
}
`;
