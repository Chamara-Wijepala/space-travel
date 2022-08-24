import { useState, useEffect } from "react";
import clsx from "clsx";

import handleTabChange from "utils/handleTabChange";

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
  const [currentTab, setCurrentTab] = useState(0);

  vehicle.landscapeImage = vehicleLandscape;
  vehicle.portraitImage = vehiclePortrait;
  spaceport.landscapeImage = spaceportLandscape;
  spaceport.portraitImage = spaceportPortrait;
  capsule.landscapeImage = capsuleLandscape;
  capsule.portraitImage = capsulePortrait;

  useEffect(() => {
    switch (currentTab) {
      case 0:
        setCurrentTechnology(vehicle);
        break;
      case 1:
        setCurrentTechnology(spaceport);
        break;
      case 2:
        setCurrentTechnology(capsule);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <S.Main className="grid-container">
      <h1 className="numbered-title">
        <span>03</span>SPACE LAUNCH 101
      </h1>

      <S.Picture>
        <source
          media="(min-width: 75em)"
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
            <button
              type="button"
              key={item.id}
              data-index={item.id}
              onClick={(e) => {
                handleTabChange(e, setCurrentTab);
              }}
              className={clsx(currentTab === item.id && "active")}
            >
              {item.id + 1}
              <span className="sr-only">{`The ${item.name}`}</span>
            </button>
          ))}
        </S.TabPanel>

        <S.Article>
          <header>
            <h2>THE TERMINOLOGY...</h2>
            <p className="uppercase">{currentTechnology.name}</p>
          </header>
          <p className="page-description">{currentTechnology.description}</p>
        </S.Article>
      </S.Container>
    </S.Main>
  );
}

export default index;
