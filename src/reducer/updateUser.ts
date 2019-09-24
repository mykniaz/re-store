export interface IUser {
  id: string | null;
  name: string;
  email: string;
}

interface IUserState extends IUser {
  isAuth: boolean;
}

const initialState: IUserState = {
  id: null,
  name: 'User',
  email: '',
  isAuth: false,
};

function updateUser(state: any, action: { type?: any; payload?: any }) {
  if (state === undefined) return initialState;

  switch (action.type) {
    case 'USER_LOGGED_IN':
      return {
        id: action.payload.id,
        name: action.payload.name,
        email: action.payload.email,
        isAuth: true,
      };

    case 'USER_LOGGED_OUT':
      return initialState;

    default:
      return state.user;
  }
}

export default updateUser;
