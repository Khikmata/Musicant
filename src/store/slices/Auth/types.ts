import { PartialNullable } from "../../../utils/types";

export type AuthState = PartialNullable<{
  accessToken: string;
  refreshToken: string;
}>;
