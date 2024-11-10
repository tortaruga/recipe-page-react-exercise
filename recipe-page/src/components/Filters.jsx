import ListElement from "./ListElement"
import dishTypes from "../dish-types"
import ingredients from "../ingredients"

export default function Filters() {
    const dishTypesElements = dishTypes.map(item => {
        return (
            <ListElement key={item.id} {... item} />
        )
    })
    
    const ingredientsElements = ingredients.map(item => {
        return (
            <ListElement key={item.id} {... item} />
        )
    })

    return (
        <section className="filters">
            <div className="filter-section dish-type-section">
                <h1 className="filter-h1">dish type</h1>
                <ul className="dish-type-list">
                    {dishTypesElements}
                </ul>
            </div>

            <div className="filter-section cooking-time-section">
                <label htmlFor="cooking-time" className="filter-h1">cooking time</label>
                <p>0 min
                <input id="cooking-time" type="range" step='5' min="0" max="120"/>
                2hr
                </p>
            </div>

            <div className="filter-section ingredients-section">
                <h1 className="filter-h1">ingredients</h1>
                <ul className="ingredients-list">
                   {ingredientsElements}
                </ul>
            </div>
        </section>
    )
}