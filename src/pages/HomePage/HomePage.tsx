import { useQuery } from "@tanstack/react-query";
import React from "react";
import { fetchNewReleases } from "../../api/albums/AlbumsApi";
import css from "./HomePage.module.scss";
import { HomePageFilter } from "./components/HomePageFilters/HomePageFilter";

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["releases"],
    queryFn: () => fetchNewReleases({}),
  });

  console.log(data);

  return (
    <div className={css.page}>
      <HomePageFilter />
    </div>
  );
};

export default React.memo(HomePage);
