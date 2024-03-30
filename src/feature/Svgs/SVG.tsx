import { LocationSVG } from "./LocationSVG";
import { BookmarkSVG } from "./BookmarkSVG";
import { ChatSVG } from "./ChatSVG";
import { HomeSVG } from "./HomeSVG";
import { PersonSVG } from "./PersonSVG";
import { CalendarSVG } from "./CalendarSVG";
import { BellSVG } from "./BellSVG";
import { BackSVG } from "./BackSVG";
import { AddPartySVG } from "./AddPartySVG";
import { MenuSVG } from "./MenuSVG";
import { SpoonSVG } from "./SpoonSVG";
import { PeopleSVG } from "./PeopleSVG";

const SVG_TYPES = {
  bookmark: <BookmarkSVG />,
  chat: <ChatSVG />,
  home: <HomeSVG />,
  person: <PersonSVG />,
  menu: <MenuSVG />,
  spoon: <SpoonSVG />,
  people: <PeopleSVG />,
  location: <LocationSVG />,
  calender: <CalendarSVG />,
  bell: <BellSVG />,
  back: <BackSVG />,
  add: <AddPartySVG />,
} as const;

export interface SVGProps {
  className?: string;
  fill?: string;
}

export const SVG = ({ name, className }: SVGProps & { name: keyof typeof SVG_TYPES }) => {
  return SVG_TYPES[name];
};
