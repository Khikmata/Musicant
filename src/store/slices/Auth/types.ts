import { PartialNullable } from "../../../utils/types";

export type AuthState = PartialNullable<{
  accessToken: string;
  codeVerifier: string;
  afterAuthRedirectToUri: string;
}>;
