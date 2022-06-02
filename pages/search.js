import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import SearchResults from '../components/SearchResults';
import ImageResults from "../components/ImageResult";

import { useRouter } from "next/router";

const search = ({results}) => {
    const router = useRouter();

  return (
    <div>
      <Head>
        <title>{router.query.term} - Search Page</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
};

export async function getServerSideProps(context) {

  const startIndex = context.query.start || "1";
  const mockData = false;

  const data = mockData? Response: await fetch(
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyB9C2UT-2ycjeHan64-e7CWPkEviBDFLws&cx=e27a9c623921b3f07&q=${
      context.query.term
    }${context.query.searchType && "&searchType=image"}&start=${startIndex}`
  ).then((res)=> res.json());
  return{
      props:{
          results:data
      }
  }
}

export default search;
