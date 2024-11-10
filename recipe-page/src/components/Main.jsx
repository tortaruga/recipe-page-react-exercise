import Header from "./Header"
import Recipes from "./Recipes";
import Filters from "./Filters";

export default function Main() {
    return (
        <main>
           <Header />
           <section className="main-content">
           <Filters />
           <Recipes />
           </section>
        </main>
    )
}