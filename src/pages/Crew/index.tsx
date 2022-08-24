import { useState, useEffect } from "react";
import clsx from "clsx";

import handleTabChange from "utils/handleTabChange";

import commanderImage from "assets/crew/image-douglas-hurley.webp";
import specialistImage from "assets/crew/image-mark-shuttleworth.webp";
import pilotImage from "assets/crew/image-victor-glover.webp";
import engineerImage from "assets/crew/image-anousheh-ansari.webp";

import * as S from "./style";

interface CrewMember {
  id: number;
  name: string;
  image?: string;
  role: string;
  bio: string;
}

interface IProps {
  data: CrewMember[];
}

function index({ data }: IProps) {
  const [commander, specialist, pilot, engineer] = data;
  const [currentCrewMember, setCurrentCrewMember] = useState(commander);
  const [currentTab, setCurrentTab] = useState(0);

  commander.image = commanderImage;
  specialist.image = specialistImage;
  pilot.image = pilotImage;
  engineer.image = engineerImage;

  useEffect(() => {
    switch (currentTab) {
      case 0:
        setCurrentCrewMember(commander);
        break;
      case 1:
        setCurrentCrewMember(specialist);
        break;
      case 2:
        setCurrentCrewMember(pilot);
        break;
      case 3:
        setCurrentCrewMember(engineer);
        break;
      default:
        break;
    }
  }, [currentTab]);

  return (
    <S.Main className="grid-container">
      <h1 className="numbered-title">
        <span aria-hidden="true">02</span>MEET YOUR CREW
      </h1>

      <img src={currentCrewMember.image} alt={`${currentCrewMember.name}`} />

      <S.TabPanel className="dot-indicators">
        {data.map((crewMember) => (
          <button
            type="button"
            key={crewMember.id}
            data-index={crewMember.id}
            onClick={(e) => {
              handleTabChange(e, setCurrentTab);
            }}
            className={clsx(currentTab === crewMember.id && "active")}
          >
            <span className="sr-only">{`The ${crewMember.role}`}</span>
          </button>
        ))}
      </S.TabPanel>

      <S.Article>
        <header>
          <h2 className="uppercase">{currentCrewMember.role}</h2>
          <p className="uppercase">{currentCrewMember.name}</p>
        </header>
        <p>{currentCrewMember.bio}</p>
      </S.Article>
    </S.Main>
  );
}

export default index;
