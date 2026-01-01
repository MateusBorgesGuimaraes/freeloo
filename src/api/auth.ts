import type { LoginUser, RegisterUser } from "@/types/auth";
import { request } from "./http";
import type { User } from "@/types/user";

export type RegisterReponse = {
  user: User;
  access_token: string;
};

export type LoginResponse = RegisterReponse;

export async function registerUser(
  data: RegisterUser,
): Promise<RegisterReponse> {
  return request("/auth/register", {
    method: "POST",
    body: data,
  });
}

export async function loginUser(data: LoginUser): Promise<LoginResponse> {
  return request("/auth/login", {
    method: "POST",
    body: data,
  });
}

export async function logoutUser() {
  return request("/auth/logout", {
    method: "POST",
  });
}
