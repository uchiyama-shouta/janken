import type { NextPage } from "next";
import { JankenButtonList } from "component/janken/JankenButtonList";
import { Opponent } from "component/janken/Opponent";
import { Layout } from "component/layout/Layout";
import { ResultText } from "component/ResultText";

const Home: NextPage = () => {
  return (
    <Layout>
      <ResultText />
      <div className="my-6 flex justify-center">
        <Opponent />
      </div>
      <JankenButtonList />
    </Layout>
  );
};

export default Home;
