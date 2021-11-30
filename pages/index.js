import Head from "next/head";

import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import ToolBar from "../components/ToolBar";
import CardLayout from "../components/CardLayout";
import Card from "../components/Card";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Project Management | Dashboard</title>
      </Head>
      <div>
        <main>
          <Nav />

          <SideBar />

          <div className="content">
            <ToolBar />

            <CardLayout>
              <Card />
              <Card />
              <Card />
              <Card />

              <Card />
              <Card />
              <Card />
              <Card />
            </CardLayout>
          </div>
        </main>
      </div>
    </div>
  );
}
