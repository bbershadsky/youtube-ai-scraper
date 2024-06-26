import type { NextPage } from "next";
import Head from "next/head";
import SubtitleManager from "./components/SubtitlesManager";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>YouTube Subtitles Fetcher</title>
        <meta name="description" content="Fetch YouTube subtitles easily" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-4">
        <SubtitleManager />
      </main>
    </div>
  );
};

export default Home;
