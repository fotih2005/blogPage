import { useSelector } from "react-redux";
import NavCard from "./navCards.component";

function NavCardsRender () {

    const categories = useSelector(state => state.posts.posts)

    return (
        <>
            {
                categories?.map(category => <NavCard key={category.id} category={category.category_name}/>)
            }
        </>
    )
}
export default NavCardsRender