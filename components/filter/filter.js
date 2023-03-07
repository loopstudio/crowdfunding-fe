import Image from "next/image";

import down from "assets/icons/Down 2.svg";

import { Button } from "./filter.styles";

export const Filter = () => {
  return (
    <Button>
      Filter
      <Image height={25} width={25} src={down} alt="down icon" />
    </Button>
  );
};
