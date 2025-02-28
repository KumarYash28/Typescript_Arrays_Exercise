//1
interface User {
    id: number;
    name: string;
    email: string;
  }
  
  function updateUser(userUpdates: Partial<User>): void {
    console.log(userUpdates);
  }

  //2

  interface UserProfile {
    id?: number;
    name?: string;
    age?: number;
  }
  
  type RequiredUserProfile = Required<UserProfile>;

  
  //3
  const config: Readonly<{
    apiKey: string;
    timeout: number;
  }> = {
    apiKey: "12345",
    timeout: 5000
  };
  
  

  //4
  interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
  }
  
  type ProductSummary = Pick<Product, 'id' | 'name' | 'price'>;

  //5
  interface User {
    id: number;
    name: string;
    email: string;
  }
  
  type UserWithoutEmail = Omit<User, 'email'>;

  
  //6
  type UserRoles = Record<number, string>;
  const userRoles: UserRoles = {
    1: 'Admin',
    2: 'User',
    3: 'Editor'
  };
  