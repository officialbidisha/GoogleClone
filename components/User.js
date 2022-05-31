import React from "react";
import { useSession, signIn, signOut } from "next-auth/react";
const User = () => {
    const {data:session} = useSession();
    if(session){
        return (
            <>
                Sign out
            </>
        )
    }
    else{
        return (
            <React.Fragment>
                <button onClick={signIn}>Sign In</button>
            </React.Fragment>
        )
    }
}
export default User;