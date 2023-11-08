import { AuthResponse } from '../types/auth.type'
import http from '../utils/http'

export const registerAccount = (data: { email: string; password: string }) => http.post<AuthResponse>('/register', data)
