import React from 'react'
import './App.css';
import AsideList from "./components/sidebar/Sidebar";
import {Mainpar} from "./components/mainHgroup/mainHgroup";
import {Fishes} from "./components/fishes/fishes";
import {PopularItems} from "./components/popular-items/popularItems";
import {apiPopular} from "./components/api/apiAll";
import {apiFish} from "./components/api/apiAll";
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

                    <section className="fishes">
                            {apiFish.map((elem, index) => <Fishes name ={elem.name} text = {elem.text} key = {index} />)}
                    </section>


                    <section className="popular-items">

                        <h1>Популярные</h1>

                        <article className="popular-items__grid-container">
                            {apiPopular.map((elem,index) => <PopularItems name ={elem.name} key = {index} />)}
                        </article>
                    </section>
                    <section>
                        <todo/>
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
