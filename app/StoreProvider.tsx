"use client";

import { Provider } from "react-redux";
import { makeStore, AppStore } from "./state/store";
import { useMemo } from "react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  // useMemo ensures the store is created once
  const store: AppStore = useMemo(() => makeStore(), []);

  return <Provider store={store}>{children}</Provider>;
}
