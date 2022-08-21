import { useState, useEffect, MouseEvent } from "react";
import clsx from "clsx";

import moonImage from "assets/destination/image-moon.webp";
import marsImage from "assets/destination/image-mars.webp";
import europaImage from "assets/destination/image-europa.webp";
import titanImage from "assets/destination/image-titan.webp";

import NumberedTitle from "styles/NumberedTitle";
import * as S from "./style";

interface DestinationItem {
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
  const [currentTab, setCurrentTab] = useState("moon");

  moon.image = moonImage;
  mars.image = marsImage;
  europa.image = europaImage;
  titan.image = titanImage;

  const handleTabChange = (event: MouseEvent<HTMLButtonElement>) => {
    const targetTab = event.target as HTMLElement;

    setCurrentTab(targetTab.innerHTML);
  };

  useEffect(() => {
    switch (currentTab) {
      case "moon":
        setCurrentDestination(moon);
        break;
      case "mars":
        setCurrentDestination(mars);
        break;
      case "europa":
        setCurrentDestination(europa);
        break;
      case "titan":
        setCurrentDestination(titan);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <S.Destination>
      <NumberedTitle>
        <span aria-hidden="true">01</span>PICK YOUR DESTINATION
      </NumberedTitle>

      <img
        src={currentDestination.image}
        alt={currentDestination.name}
        className="uppercase"
      />

      <S.TabList>
        <button
          type="button"
          onClick={handleTabChange}
          className={clsx("uppercase", currentTab === "moon" && "active")}
        >
          moon
        </button>
        <button
          type="button"
          onClick={handleTabChange}
          className={clsx("uppercase", currentTab === "mars" && "active")}
        >
          mars
        </button>
        <button
          type="button"
          onClick={handleTabChange}
          className={clsx("uppercase", currentTab === "europa" && "active")}
        >
          europa
        </button>
        <button
          type="button"
          onClick={handleTabChange}
          className={clsx("uppercase", currentTab === "titan" && "active")}
        >
          titan
        </button>
      </S.TabList>

      <S.Article>
        <h2 className="uppercase">{currentDestination.name}</h2>

        <p>{currentDestination.description}</p>

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
    </S.Destination>
  );
}

export default index;
