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
      }
      items {
        nextToken
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
      }
      items {
        nextToken
      }
    }
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
export const onUpdateItem = `subscription OnUpdateItem {
  onUpdateItem {
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
export const onDeleteItem = `subscription OnDeleteItem {
  onDeleteItem {
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
export const onCreateProduct = `subscription OnCreateProduct {
  onCreateProduct {
    id
    price
    title
    img
    description
  }
}
`;
export const onUpdateProduct = `subscription OnUpdateProduct {
  onUpdateProduct {
    id
    price
    title
    img
    description
  }
}
`;
export const onDeleteProduct = `subscription OnDeleteProduct {
  onDeleteProduct {
    id
    price
    title
    img
    description
  }
}
`;
