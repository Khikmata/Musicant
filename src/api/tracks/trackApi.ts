import { appAxiosInstance } from "../axios";

export const fetchTrack = ({ id, market }: { id: number; market?: string }) => {
  appAxiosInstance.get(`v1/tracks/${id}?market=${market}`);
};

export const fetchTracks = ({ market }: { market?: string }) => {
  appAxiosInstance.get(`v1/tracks?${market ? `market=${market}` : ""}`);
};

export const fetchMySavedTracks = ({ market }: { market?: string }) => {
  appAxiosInstance.get(`v1/tracks?${market ? `market=${market}` : ""}`);
};

export const fetchRecommendations = ({ market }: { market?: string }) => {
  appAxiosInstance.get(`v1/recommendations?market=${market}`);
};
