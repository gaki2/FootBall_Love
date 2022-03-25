export type userType = {
  user: {
    createdDate: string;
    lastModifiedDate: string;
    createdBy: null | number;
    lastModifiedBy: null | number;
    number: null | number;
    id: string;
    nickname: string;
    name: string;
    email: string;
    birth: string;
    address?: {
      city: string;
      street: string;
      zipcode: string;
    };
    phone: string;
    profileUri: null | string;
    type: string;
    company: null | string;
    teams?: any;
  };
};

type isLoginType = {
  isLogin: boolean;
};

export type InitialUser = isLoginType & userType;
