import { AppProvider } from "@/components/app/AppProvider";
import { AppWrapper } from "@/components/app/AppWrapper";
import { Header } from "@/components/header/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Abyss Test App",
  description: "Created By Andrew Shmorhun",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AppWrapper>
      <AppProvider>
        <Header />
        {children}
      </AppProvider>
    </AppWrapper>
  );
}
