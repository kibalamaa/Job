"use client";

import { Provider } from "react-redux";
import { makeStore, AppStore } from "./state/store";
import { useMemo } from "react";
import { SessionProvider } from "next-auth/react";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const store: AppStore = useMemo(() => makeStore(), []);

  return (
    <SessionProvider>
      <Provider store={store}>
        {children}
      </Provider>
    </SessionProvider>
  );
}
