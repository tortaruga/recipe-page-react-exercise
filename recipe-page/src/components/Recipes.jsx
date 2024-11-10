import RecipeCard from "./RecipeCard";
import data from '../data';

export default function Recipes() {
    const cards = data.map(item=> {
        return (
            <RecipeCard id={item.id} {... item} />
        )
    })

    return (
        <div className="card-container">
          {cards}
        </div>
    )
}