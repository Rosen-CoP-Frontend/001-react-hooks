'use client';

import { createContext } from "react";
import { Content } from "./componets/Content";
import { Navbar } from "./componets/Navbar";

export const MyContext = createContext<{ userEmail: string } | null>(null);

export default function Home() {
  return (
    <MyContext value={{
      userEmail: "ediaz@rosen-group.com"
    }}>
      <Navbar />
      <Content />
    </MyContext>
  );
}
