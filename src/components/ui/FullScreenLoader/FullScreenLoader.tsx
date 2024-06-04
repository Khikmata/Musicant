import React from "react";
import { cn } from "../../../styles/styles";
import { Spinner } from "../Spinner/Spinner";
import styles from "./FullScreenLoader.module.scss";

type FullScreenLoaderProps = {
  loaderContainerClassName?: string;
};

const FullScreenLoader: React.FC<FullScreenLoaderProps> = ({
  loaderContainerClassName,
}) => {
  return (
    <section className={cn(styles.loaderContainer, loaderContainerClassName)}>
      <div className={styles.loaderWrapper}>
        <Spinner />
      </div>
    </section>
  );
};

export default FullScreenLoader;
