import { MouseEvent, Dispatch } from "react";

const handleTabChange = (
  e: MouseEvent<HTMLButtonElement>,
  setCurrentTab: Dispatch<React.SetStateAction<number>>
) => {
  const targetTab = e.target as HTMLElement;
  const tabIndex = Number(targetTab.getAttribute("data-index"));

  setCurrentTab(tabIndex);
};

export default handleTabChange;
