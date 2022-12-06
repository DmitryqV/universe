import React from "react";
import { createRoot } from "react-dom/client";
import { AppCore } from "./app";

createRoot(document.getElementById("app") as HTMLElement).render(<AppCore />);
