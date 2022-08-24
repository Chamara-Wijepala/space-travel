import { useState } from "react";

import vehicleLandscape from "assets/technology/image-launch-vehicle-landscape.jpg";
import vehiclePortrait from "assets/technology/image-launch-vehicle-portrait.jpg";
import spaceportLandscape from "assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "assets/technology/image-spaceport-portrait.jpg";
import capsuleLandscape from "assets/technology/image-space-capsule-landscape.jpg";
import capsulePortrait from "assets/technology/image-space-capsule-portrait.jpg";

import * as S from "./style";

interface ITechnologyItem {
  id: number;
  landscapeImage?: string;
  portraitImage?: string;
  name: string;
  description: string;
}

interface IProps {
  data: ITechnologyItem[];
}

function index({ data }: IProps) {
  const [vehicle, spaceport, capsule] = data;
  const [currentTechnology, setCurrentTechnology] = useState(vehicle);

  vehicle.landscapeImage = vehicleLandscape;
  vehicle.portraitImage = vehiclePortrait;
  spaceport.landscapeImage = spaceportLandscape;
  spaceport.portraitImage = spaceportPortrait;
  capsule.landscapeImage = capsuleLandscape;
  capsule.portraitImage = capsulePortrait;

  return (
    <S.Main className="grid-container">
      <h1 className="numbered-title">
        <span>03</span>SPACE LAUNCH 101
      </h1>

      <S.Picture>
        <source
          media="(min-width: 90em)"
          srcSet={currentTechnology.portraitImage}
        />
        <img
          src={currentTechnology.landscapeImage}
          alt={currentTechnology.name}
        />
      </S.Picture>

      <S.Container>
        <S.TabPanel className="numbered-indicators">
          {data.map((item) => (
            <button type="button" key={item.id}>
              {item.id + 1}
            </button>
          ))}
        </S.TabPanel>

        <S.Article>
          <header>
            <h2>THE TERMINOLOGY...</h2>
            <p className="uppercase">{currentTechnology.name}</p>
          </header>
          <p>{currentTechnology.description}</p>
        </S.Article>
      </S.Container>
    </S.Main>
  );
}

export default index;
