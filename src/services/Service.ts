import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { IUser } from '../reducer/updateUser';
import { IProduct } from '../reducer/updateProductList';

export default class ProductsStoreService {
  public addProduct(data: IProduct) {
    return new Promise(async (resolve, reject) => {
      try {
        const newProduct = await API.graphql(graphqlOperation(mutations.createProduct, {
          input: data,
        }));

        // @ts-ignore
        resolve(newProduct.data);
      } catch (e) {
        reject(e);
      }
    });
  }
  public getProducts() {
    return new Promise(async (resolve, reject) => {
      try {
        const allProducts = await API.graphql(graphqlOperation(queries.listProducts));

        // @ts-ignore
        resolve(allProducts.data.listProducts.items);
      } catch (e) {
        reject(e);
      }
    });
  }

  public initUser({ id, name, email }: IUser) {
    this.addProduct({
      price: 25,
      title: 'Момо',
      description: 'Энде Михаэль',
      img: '',
    });

    return new Promise(async (resolve, reject) => {
      let userData = null;

      try {
        userData = await API.graphql(graphqlOperation(queries.getUser, { id }));
      } catch (errorData) {
        userData = errorData;
      }

      // @ts-ignore
      if (userData === null || userData.data === null || userData.data.getUser === null) {
        const newUserData = await API.graphql(graphqlOperation(mutations.createUser, {
          input: {
            id,
            name,
            email,
          },
        }));
        // @ts-ignore
        resolve(newUserData.data.createUser);
      } else {
        resolve(userData.data.getUser);
      }
    });
  }

  public addProductToOrder(userId: string, productId: string | number) {
    return new Promise(async (resolve, reject) => {
      let newUser = null;

      try {
        newUser = await API.graphql(graphqlOperation(mutations.updateUser, { userId }));
      } catch (errorData) {
        newUser = errorData;
      }

      console.log(newUser);
    });
  }
}
