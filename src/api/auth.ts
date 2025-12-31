import type { RegisterUser } from "@/types/auth";
import { request } from "./http";
import type { User } from "@/types/user";

export type RegisterReponse = {
  user: User;
  access_token: string;
};

export async function registerUser(
  data: RegisterUser,
): Promise<RegisterReponse> {
  return request("/auth/register", {
    method: "POST",
    body: data,
  });
}
