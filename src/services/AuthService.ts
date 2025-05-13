import api from "../api/api.ts"

export const logUser = (user) => {
   return api.post("/auth/login", user);
}