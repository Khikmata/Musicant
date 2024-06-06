import { useQuery } from "@tanstack/react-query";
import React from "react";
import { appAxiosInstance } from "../../api/axios";
import css from "./HomePage.module.scss";
import { HomePageFilter } from "./components/HomePageFilters/HomePageFilter";

const HomePage = () => {
  const { data } = useQuery({
    queryKey: ["recommendations"],
    queryFn: () =>
      appAxiosInstance.get("recommendations").then((res) => res.data),
  });

  console.log(data);

  return (
    <div className={css.page}>
      <HomePageFilter />
    </div>
  );
};

export default React.memo(HomePage);
