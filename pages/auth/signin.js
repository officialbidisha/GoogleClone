import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";
const signin = ({ providers }) => {
  console.log(Object.values(providers));
  return (
    <React.Fragment>
      <Header />
      <div className="">
        {Object.values(providers).map((provider) => (
          <div key={provider.name} className="">
            <img src="https://cdn.vox-cdn.com/thumbor/Pkmq1nm3skO0-j693JTMd7RL0Zk=/0x0:2012x1341/1200x800/filters:focal(0x0:2012x1341)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg" />
            <button onClick={()=>signIn(provider.id, {callbackUrl: "/"})}> Sign in with {provider.name}</button>
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
