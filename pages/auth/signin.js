import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
const signin = ({ providers }) => {
  return (
    <React.Fragment>
      <Header />
      <div className="mt-40">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="flex flex-col items-center">
            <img
            className="w-52 object-cover"
            src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
            <button className="bg-red-400 rounded-lg text-white p-3 hover:bg-red-500" onClick={() => signIn(provider.id, { callbackUrl: "/" })}> Sign in with {provider.name}</button>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
};

export async function getServerSideProps() {
  const providers = await getProviders();
  return {
    props: {
      providers
    },
  };
}

export default signin;
