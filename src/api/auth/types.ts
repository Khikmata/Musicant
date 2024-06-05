export type FetchLoginApiResponse = {
    access_token: string,
    expires_in: number,
    token_type: string,
}
export type FetchLoginApiRequest = Partial<{
    client_id: string;
    client_secret: string;
    grant_type: string;
}>