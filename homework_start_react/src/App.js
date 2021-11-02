import React from 'react'
import './App.css';
import AsideList from "./components/sidebar/Sidebar";
import {Mainpar} from "./components/mainHgroup/mainHgroup";
import {Fishes} from "./components/fishes/fishes";
import {PopularItems} from "./components/popular-items/popularItems";
import {apiPopular} from "./components/popular-items/apiPopular";

class App extends React.Component {
    render() {
        return(
        <div className="wrapper">
            <header>
                <h1>Интернет магазин "Не только красивое!"</h1>
            </header>

            <section className="main-container">

                <aside>
                    <AsideList/>
                </aside>

                <main>
                    <Mainpar/>

                    <div className="fishes">
                        <Fishes
                            name="Замороженные рыбы"
                            text="Мы заморозили рыбов для Вас"
                        />
                        <Fishes
                            name="Живые рыбы"
                            text="На кухню или на разведение"
                        />
                    </div>


                    <section className="popular-items">

                        <h1>Популярные</h1>

                        <article className="popular-items__grid-container">
                            {apiPopular.map((elem,index) => <PopularItems name ={elem.name} key = {index} />)}
                        </article>
                    </section>
                </main>

            </section>

            <footer>
                <span>Контакты</span>
                <span>© 2021 Рыбов О.А.</span>
            </footer>
        </div>
        )
    }
}

export default App;
