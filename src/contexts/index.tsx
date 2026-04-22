import { createContext } from "react";
import { Store } from "redux";

export const ReduxContext = createContext<Store | null>(null);
export const ToolkitContext = createContext<Store | null>(null);
