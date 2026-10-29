import Header from "@/components/Layout/Header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home Page | DB Relation File",
  description: "Home Page of DB Relation File App",
};

const page = () => {
  return (
    <>
      <Header />

      <section className="grid h-dvh place-items-center"></section>
    </>
  );
};

export default page;
