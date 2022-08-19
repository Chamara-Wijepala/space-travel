import moon from "assets/destination/image-moon.webp";

import * as S from "./style";

function index() {
  return (
    <S.Destination>
      <h1>
        <span aria-hidden="true">01</span>PICK YOUR DESTINATION
      </h1>

      <img src={moon} alt="THE MOON" />

      <div>
        <button type="button">MOON</button>
        <button type="button">MARS</button>
        <button type="button">EUROPA</button>
        <button type="button">TITAN</button>
      </div>

      <article>
        <h2>MOON</h2>

        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <div>
          <div>
            <h3>AVG. DISTANCE</h3>
            <p>384,400 KM</p>
          </div>
          <div>
            <h3>EST. TRAVEL TIME</h3>
            <p>3 DAYS</p>
          </div>
        </div>
      </article>
    </S.Destination>
  );
}

export default index;
