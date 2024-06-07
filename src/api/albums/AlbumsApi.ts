import { paramToQuery } from "../../utils/api";
import { appAxiosInstance } from "../axios";

export const fetchNewReleases = ({
  limit,
  offset,
}: {
  limit?: number;
  offset?: number;
}) => {
  return appAxiosInstance.get(
    `v1/browse/new-releases?${paramToQuery(limit)}${paramToQuery(offset)}`
  );
};
