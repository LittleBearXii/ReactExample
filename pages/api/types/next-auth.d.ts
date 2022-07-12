import NextAuth, { DefaultSession } from "next-auth"
import { JWT } from "next-auth/jwt"

declare module "next-auth" {
  interface Session {
    accessToken?: string,
    data: userInfo
  } 

  interface User extends userInfo {};
}

declare module "next-auth/jwt" {
  interface JWT {
    accessToken?: string,
    data : userInfo,
  }
}

interface userInfo {
  status: string,
  message: string,
  accessToken: string,
  expiresIn: number,
  user: {
    id: number,
    fname: string,
    lname: string,
    username: string,
    password: string,
    email: string,
    avatar: string,
  }
}