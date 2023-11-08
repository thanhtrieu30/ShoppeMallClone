type Role = 'User' | 'Admin'

export interface User {
  _id: string
  roles: Role[]
  email: string
  createdAt: string
  updatedAt: string
}

// export interface User {
//   _id: string
//   roles: Role[]
//   email: string
//   date_of_birth: null
//   address: string
//   phone: string
//   createdAt: string
//   updatedAt: string
// }
