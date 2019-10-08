/* tslint:disable */
//  This file was automatically generated and should not be edited.

export type CreateUserInput = {
  id?: string | null,
  name: string,
  email: string,
  userOrderId?: string | null,
};

export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  userOrderId?: string | null,
};

export type DeleteUserInput = {
  id?: string | null,
};

export type CreateOrderInput = {
  id?: string | null,
  total: number,
  orderUserId?: string | null,
};

export type UpdateOrderInput = {
  id: string,
  total?: number | null,
  orderUserId?: string | null,
};

export type DeleteOrderInput = {
  id?: string | null,
};

export type CreateItemInput = {
  id?: string | null,
  total: number,
  itemOrderId?: string | null,
};

export type UpdateItemInput = {
  id: string,
  total?: number | null,
  itemOrderId?: string | null,
};

export type DeleteItemInput = {
  id?: string | null,
};

export type CreateProductInput = {
  id?: string | null,
  price: number,
  title: string,
  img?: string | null,
  description?: string | null,
};

export type UpdateProductInput = {
  id: string,
  price?: number | null,
  title?: string | null,
  img?: string | null,
  description?: string | null,
};

export type DeleteProductInput = {
  id?: string | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDFilterInput | null,
  name?: ModelStringFilterInput | null,
  email?: ModelStringFilterInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelIDFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelStringFilterInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
};

export type ModelOrderFilterInput = {
  id?: ModelIDFilterInput | null,
  total?: ModelIntFilterInput | null,
  and?: Array< ModelOrderFilterInput | null > | null,
  or?: Array< ModelOrderFilterInput | null > | null,
  not?: ModelOrderFilterInput | null,
};

export type ModelIntFilterInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  contains?: number | null,
  notContains?: number | null,
  between?: Array< number | null > | null,
};

export type ModelItemFilterInput = {
  id?: ModelIDFilterInput | null,
  total?: ModelIntFilterInput | null,
  and?: Array< ModelItemFilterInput | null > | null,
  or?: Array< ModelItemFilterInput | null > | null,
  not?: ModelItemFilterInput | null,
};

export type ModelProductFilterInput = {
  id?: ModelIDFilterInput | null,
  price?: ModelIntFilterInput | null,
  title?: ModelStringFilterInput | null,
  img?: ModelStringFilterInput | null,
  description?: ModelStringFilterInput | null,
  and?: Array< ModelProductFilterInput | null > | null,
  or?: Array< ModelProductFilterInput | null > | null,
  not?: ModelProductFilterInput | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
};

export type CreateUserMutation = {
  createUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
};

export type UpdateUserMutation = {
  updateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
};

export type DeleteUserMutation = {
  deleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateOrderMutationVariables = {
  input: CreateOrderInput,
};

export type CreateOrderMutation = {
  createOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type UpdateOrderMutationVariables = {
  input: UpdateOrderInput,
};

export type UpdateOrderMutation = {
  updateOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type DeleteOrderMutationVariables = {
  input: DeleteOrderInput,
};

export type DeleteOrderMutation = {
  deleteOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type CreateItemMutationVariables = {
  input: CreateItemInput,
};

export type CreateItemMutation = {
  createItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type UpdateItemMutationVariables = {
  input: UpdateItemInput,
};

export type UpdateItemMutation = {
  updateItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type DeleteItemMutationVariables = {
  input: DeleteItemInput,
};

export type DeleteItemMutation = {
  deleteItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type CreateProductMutationVariables = {
  input: CreateProductInput,
};

export type CreateProductMutation = {
  createProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type UpdateProductMutationVariables = {
  input: UpdateProductInput,
};

export type UpdateProductMutation = {
  updateProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type DeleteProductMutationVariables = {
  input: DeleteProductInput,
};

export type DeleteProductMutation = {
  deleteProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetOrderQueryVariables = {
  id: string,
};

export type GetOrderQuery = {
  getOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type ListOrdersQueryVariables = {
  filter?: ModelOrderFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListOrdersQuery = {
  listOrders:  {
    __typename: "ModelOrderConnection",
    items:  Array< {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetItemQueryVariables = {
  id: string,
};

export type GetItemQuery = {
  getItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type ListItemsQueryVariables = {
  filter?: ModelItemFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListItemsQuery = {
  listItems:  {
    __typename: "ModelItemConnection",
    items:  Array< {
      __typename: "Item",
      id: string,
      total: number,
      product:  {
        __typename: "Product",
        id: string,
        price: number,
        title: string,
        img: string | null,
        description: string | null,
      },
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type GetProductQueryVariables = {
  id: string,
};

export type GetProductQuery = {
  getProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type ListProductsQueryVariables = {
  filter?: ModelProductFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListProductsQuery = {
  listProducts:  {
    __typename: "ModelProductConnection",
    items:  Array< {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser:  {
    __typename: "User",
    id: string,
    name: string,
    email: string,
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateOrderSubscription = {
  onCreateOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnUpdateOrderSubscription = {
  onUpdateOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnDeleteOrderSubscription = {
  onDeleteOrder:  {
    __typename: "Order",
    id: string,
    total: number,
    user:  {
      __typename: "User",
      id: string,
      name: string,
      email: string,
      order:  {
        __typename: "Order",
        id: string,
        total: number,
      } | null,
    } | null,
    items:  {
      __typename: "ModelItemConnection",
      items:  Array< {
        __typename: "Item",
        id: string,
        total: number,
      } | null > | null,
      nextToken: string | null,
    } | null,
  } | null,
};

export type OnCreateItemSubscription = {
  onCreateItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnUpdateItemSubscription = {
  onUpdateItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnDeleteItemSubscription = {
  onDeleteItem:  {
    __typename: "Item",
    id: string,
    total: number,
    product:  {
      __typename: "Product",
      id: string,
      price: number,
      title: string,
      img: string | null,
      description: string | null,
    },
    order:  {
      __typename: "Order",
      id: string,
      total: number,
      user:  {
        __typename: "User",
        id: string,
        name: string,
        email: string,
      } | null,
      items:  {
        __typename: "ModelItemConnection",
        nextToken: string | null,
      } | null,
    } | null,
  } | null,
};

export type OnCreateProductSubscription = {
  onCreateProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type OnUpdateProductSubscription = {
  onUpdateProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};

export type OnDeleteProductSubscription = {
  onDeleteProduct:  {
    __typename: "Product",
    id: string,
    price: number,
    title: string,
    img: string | null,
    description: string | null,
  } | null,
};
