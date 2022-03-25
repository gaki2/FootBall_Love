import produce from 'immer';
import { InitialUser } from '../types/store';

const initUserInfo: InitialUser = {
  isLogin: document.cookie.includes('accessToken') ? true : false,
  user: {
    createdDate: '',
    lastModifiedDate: '',
    createdBy: null,
    lastModifiedBy: null,
    number: null,
    id: '',
    nickname: '',
    name: '',
    email: '',
    birth: '',
    address: {
      city: '',
      street: '',
      zipcode: '',
    },
    phone: '',
    profileUri: null,
    type: '',
    company: null,
    teams: [],
  },
};

function userReducer(state, action) {
  if (state === undefined) {
    return initUserInfo;
  }

  switch (action.type) {
    case 'UPDATE_USER':
      return produce(state, (draft) => {
        draft.isLogin = true;
        draft.user = action.payload;
      });

    case 'UPDATE_PROFILE_IMG':
      return produce(state, (draft) => {
        draft.user.profileUri = action.payload;
      });

    case 'UPDATE_TEAM':
      return produce(state, (draft) => {
        draft.user.teams = action.payload;
      });

    case 'LOGOUT': {
      return produce(state, (draft) => {
        draft = initUserInfo;
        draft.isLogin = false;
      });
    }
    default:
      return { ...state };
  }
}

export { userReducer };
