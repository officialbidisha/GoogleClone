import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const User = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <img
          onClick={signOut}
          src={session.user.image}
          alt="user-image"
          className="h-10 w-10 rounded-full hover:bg-gray 200 cursor-pointer"
        ></img>
      </>
    );
  } else {
    return (
      <React.Fragment>
        <button
          className="bg-blue-500 text-white px-6 py-2 font-medium rounded-md hover:brightness-105 hover:shadow-md"
          onClick={() => signIn()}
        >
          Sign In
        </button>
      </React.Fragment>
    );
  }
};
export default User;
