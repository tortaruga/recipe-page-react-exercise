export default function RecipeCard(props) {
  return (
    <div className="recipe-card">
        <img className="recipe-img" src={props.img}/>
        <h1 className="recipe-name">{props.name}</h1>
    </div>
  )
}