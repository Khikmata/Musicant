import React from "react";

export type ExpandedComponentType = {
  children?: React.ReactNode;
  className?: string;
  styles?: string;
};

export type PartialNullable<Type extends object> = Partial<{
  [key in keyof Type]: Type[key] | null;
}>;

export type Nullable<Type> = Type | null | undefined;

/** рекурсивно собирает в union все значения ключей объекта*/
export type RecursiveValues<T> = {
  [Prop in keyof T]: T[Prop] extends Record<string, unknown>
    ? RecursiveValues<T[Prop]>
    : T[Prop];
}[keyof T];
