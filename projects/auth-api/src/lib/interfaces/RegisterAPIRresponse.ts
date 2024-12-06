export interface RegisterAPIRes {
  message: string,
  token: string,
  user: User
}

interface User {
  username: string,
  firstName: string,
  lastName: string,
  email: string,
  phone: string,
  role: string,
  isVerified: boolean,
  _id: string,
  createdAt: string,
}
