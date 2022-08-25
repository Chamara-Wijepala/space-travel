import { useState, useEffect } from "react";
import clsx from "clsx";

import handleTabChange from "utils/handleTabChange";

import moonImage from "assets/destination/image-moon.webp";
import marsImage from "assets/destination/image-mars.webp";
import europaImage from "assets/destination/image-europa.webp";
import titanImage from "assets/destination/image-titan.webp";

import * as S from "./style";

interface DestinationItem {
  id: number;
  name: string;
  image?: string;
  description: string;
  distance: string;
  travel: string;
}

interface IProps {
  data: DestinationItem[];
}

function index({ data }: IProps) {
  const [moon, mars, europa, titan] = data;
  const [currentDestination, setCurrentDestination] = useState(moon);
  const [currentTab, setCurrentTab] = useState(0);

  moon.image = moonImage;
  mars.image = marsImage;
  europa.image = europaImage;
  titan.image = titanImage;

  useEffect(() => {
    switch (currentTab) {
      case 0:
        setCurrentDestination(moon);
        break;
      case 1:
        setCurrentDestination(mars);
        break;
      case 2:
        setCurrentDestination(europa);
        break;
      case 3:
        setCurrentDestination(titan);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <S.Main className="grid-container">
      <h1 className="numbered-title">
        <span aria-hidden="true">01</span>PICK YOUR DESTINATION
      </h1>

      <img
        src={currentDestination.image}
        alt={currentDestination.name}
        className="uppercase"
      />

      <S.Container>
        <S.TabPanel className="underline-indicators">
          {data.map((destination) => (
            <button
              type="button"
              key={destination.id}
              data-index={destination.id}
              onClick={(e) => {
                handleTabChange(e, setCurrentTab);
              }}
              className={clsx(
                "uppercase",
                currentTab === destination.id && "active"
              )}
            >
              {destination.name}
            </button>
          ))}
        </S.TabPanel>

        <S.Article>
          <h2 className="uppercase">{currentDestination.name}</h2>

          <p className="page-description">{currentDestination.description}</p>

          <S.Meta className="uppercase">
            <div>
              <h3>AVG. DISTANCE</h3>
              <p>{currentDestination.distance}</p>
            </div>

            <div>
              <h3>EST. TRAVEL TIME</h3>
              <p>{currentDestination.travel}</p>
            </div>
          </S.Meta>
        </S.Article>
      </S.Container>
    </S.Main>
  );
}

export default index;
