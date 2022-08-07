import { createContext } from "react";
import Header from "../../components/header/header";
import useFetch from "../../hooks/useFetch";
import Main from "./main/main.component";

// export const CategoriesContext = createContext();

function Home () {

    // let categories = useFetch("https://n36-blog.herokuapp.com/categories")

    return(
        <>
           {/* <CategoriesContext.Provider value={categories}> */}
               <Header/>
               <Main/>
           {/* </CategoriesContext.Provider> */}
        </>
    )
}

export default Home