import moon from "assets/destination/image-moon.webp";

import NumberedTitle from "styles/NumberedTitle";
import * as S from "./style";

function index() {
  return (
    <S.Destination>
      <NumberedTitle>
        <span aria-hidden="true">01</span>PICK YOUR DESTINATION
      </NumberedTitle>

      <img src={moon} alt="THE MOON" />

      <S.TabList>
        <button type="button" className="active">
          MOON
        </button>
        <button type="button">MARS</button>
        <button type="button">EUROPA</button>
        <button type="button">TITAN</button>
      </S.TabList>

      <S.Article>
        <h2>MOON</h2>

        <p>
          See our planet as you’ve never seen it before. A perfect relaxing trip
          away to help regain perspective and come back refreshed. While you’re
          there, take in some history by visiting the Luna 2 and Apollo 11
          landing sites.
        </p>

        <S.Meta>
          <div>
            <h3>AVG. DISTANCE</h3>
            <p>384,400 KM</p>
          </div>
          <div>
            <h3>EST. TRAVEL TIME</h3>
            <p>3 DAYS</p>
          </div>
        </S.Meta>
      </S.Article>
    </S.Destination>
  );
}

export default index;
