import { useState } from "react";

import commanderImage from "assets/crew/image-douglas-hurley.webp";
import specialistImage from "assets/crew/image-mark-shuttleworth.webp";
import pilotImage from "assets/crew/image-victor-glover.webp";
import engineerImage from "assets/crew/image-anousheh-ansari.webp";

interface CrewMember {
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

  commander.image = commanderImage;
  specialist.image = specialistImage;
  pilot.image = pilotImage;
  engineer.image = engineerImage;

  return (
    <main>
      <h1>
        <span aria-hidden="true">02</span>MEET YOUR CREW
      </h1>

      <img src={currentCrewMember.image} alt={`${currentCrewMember.name}`} />

      <div>
        <button type="button">
          <span className="sr-only">the commander</span>
        </button>
        <button type="button">
          <span className="sr-only">the mission specialist</span>
        </button>
        <button type="button">
          <span className="sr-only">the pilot</span>
        </button>
        <button type="button">
          <span className="sr-only">the flight engineer</span>
        </button>
      </div>

      <article>
        <header>
          <h2 className="uppercase">{currentCrewMember.role}</h2>
          <p>{currentCrewMember.name}</p>
        </header>
        <p>{currentCrewMember.bio}</p>
      </article>
    </main>
  );
}

export default index;
