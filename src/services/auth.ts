import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../utils'

export interface UserProp {
  uid: string
  email: string
  displayName: string
  accessToken: string
}

export interface LoginReqProp {
  email: string
  password: string
  toast?: any
  from?: string
}

export interface SignupReqProp {
  email: string
  password: string
  toast?: any
}

export const loginService = async ({
  email,
  password,
}: LoginReqProp): Promise<UserProp> => {
  const res: any = await signInWithEmailAndPassword(auth, email, password)
  return {
    uid: res.user.uid,
    email: res.user.email,
    displayName: res.user.displayName,
    accessToken: res.user.refreshToken,
  }
}

export const signupService = async ({
  email,
  password,
}: SignupReqProp): Promise<UserProp> => {
  const res: any = await createUserWithEmailAndPassword(auth, email, password)
  return {
    uid: res.user.uid,
    email: res.user.email,
    displayName: res.user.displayName,
    accessToken: res.user.refreshToken,
  }
}
