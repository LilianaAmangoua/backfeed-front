import api from "../api/api.ts"

export const logUser = (user: User) => {
   return api.post("/auth/login", user);
}