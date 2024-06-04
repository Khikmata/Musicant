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
