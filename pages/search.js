import Head from "next/head";
import Header from "../components/Header";
import SearchHeader from "../components/SearchHeader";

const search = () => {
    return(
        <div>
           <Head>
               <title>Search Page</title>
           </Head>

           <SearchHeader/>
        </div>
    )
}

export async function getServerSideProps(){
    
}

export default search;