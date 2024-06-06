import { z } from "zod";

export type FetchLoginApiRequest = Partial<{
  grant_type: string;
  client_id: string;
  client_secret: string;
}>;

export const LoginDtoResponseSchema = z.object({
  access_token: z.string(),
  expires_in: z.string(),
  token_type: z.string(),
});

export type FetchLoginApiDto = z.infer<typeof LoginDtoResponseSchema>;

export const fetchLoginApiDtoMapper = (
  loginDto: FetchLoginApiDto
): FetchLoginApiResponse => ({
  access_token: loginDto.access_token,
  expires_in: loginDto.expires_in,
  token_type: loginDto.token_type,
});

export type FetchLoginApiResponse = {
  access_token: string;
  expires_in: string;
  token_type: string;
};
