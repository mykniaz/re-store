import { API, graphqlOperation } from 'aws-amplify';
import * as queries from '../graphql/queries';
import * as mutations from '../graphql/mutations';
import { IUser } from '../reducer/updateUser';

export default class BookStoreService {
  public getBooks() {
    return new Promise(async (resolve, reject) => {
      try {
        const allBooks = await API.graphql(graphqlOperation(queries.listProducts));

        // @ts-ignore
        resolve(allBooks.data.listBooks.items);
      } catch (e) {
        reject(e);
      }
    });
  }

  public initUser({ id, name, email }: IUser) {
    return new Promise(async (resolve, reject) => {
      let userData = null;

      try {
        userData = await API.graphql(graphqlOperation(queries.getUser, { id }));
      } catch (errorData) {
        userData = errorData;
      }

      console.log(userData);

      // @ts-ignore
      if (userData === null || userData.data.getUser === null) {
        const newUserData = await API.graphql(graphqlOperation(mutations.createUser, {
          input: {
            id,
            name,
            email,
          },
        }));
        // @ts-ignore
        resolve(newUserData.data.items);
      } else {
        // @ts-ignore
        resolve(userData.data.getUser);
      }
    });
  }

  public addBookToOrder(userId: string, bookId: string | number) {
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
