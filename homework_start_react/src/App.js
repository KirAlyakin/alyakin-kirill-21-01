import logo from './logo.svg';
import './App.css';
import AsideList from "./components/sidebar__li/li";
import apiResponse from './api-mock/api'


function App() {
  return (
      <div className="wrapper">
        <header>
          <h1>Интернет магазин "Не только красивое!"</h1>
        </header>

        <section className="main-container">

          <aside>
            {Fish.map(elem => <AsideList type={elem.type} name={elem.name} />)}
          </aside>

          <main>
            <hgroup>
              <h1>Рыбы на любой вкус</h1>
              <p>Мы продаём рыбов, а не только показываем</p>
            </hgroup>

            <section className="fishes">

              <article className="fishes__urls">
                <a href="#">Замороженные рыбы</a>
                <span>Мы заморозили рыбов для Вас</span>
              </article>

              <article className="fishes__urls">
                <a href="#">Живые рыбы</a>
                <span>На кухню или на разведение</span>
              </article>

            </section>


            <section className="popular-items">

              <h1>Популярные</h1>

              <article className="popular-items__grid-container">
                <article className="popular-items__grid">
                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Палтус</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

                <article className="popular-items__grid">

                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Сёмга</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

                <article className="popular-items__grid">

                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Сом</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

                <article className="popular-items__grid">

                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Сельдь</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

                <article className="popular-items__grid">

                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Мойва</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

                <article className="popular-items__grid">

                  <picture className="popular-items__img"></picture>

                  <article className="popular-items__button-area">
                    <a href="#">Тунец</a>
                    <button className="popular-items__button">Купить</button>
                  </article>

                </article>

              </article>
            </section>
          </main>

        </section>

        <footer>
          <span>Контакты</span>
          <span>© 2021 Рыбов О.А.</span>
        </footer>
      </div>
  );
}

export default App;
