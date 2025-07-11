import api from "../api/api.ts";
import type { User } from "../@types/User.ts";

export const logUser = (user: User) => {
    return api.post("/auth/login", user);
};
