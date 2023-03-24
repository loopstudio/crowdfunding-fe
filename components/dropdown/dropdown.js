import Image from "next/image";
import { useState, useRef } from "react";
import { useClickAway } from "use-click-away";

import downArrow from "assets/icons/downArrow.svg";

import {
  Container,
  DropdownButton,
  DropdownItem,
  DropdownList,
  Label,
  Wrapper,
  Skeleton,
} from "./dropdown.styles";

export const Dropdown = ({ options, handleSelect, label, isLoading }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const clickRef = useRef("");

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  useClickAway(clickRef, () => {
    setIsOpen(false);
  });

  const handleOptionClick = (option) => {
    setSelectedOption(option.symbol);
    handleSelect(option.address);
    setIsOpen(false);
  };

  if (isLoading)
    return (
      <div>
        <Label>{label}</Label>
        <Container>
          <Skeleton />
        </Container>
      </div>
    );

  return (
    <div>
      <Label htmlFor="dropdown">{label}</Label>
      <Container>
        <Wrapper isOpen={isOpen} onClick={handleButtonClick}>
          <DropdownButton id="dropdown" type="button">
            {selectedOption || ""}
          </DropdownButton>
          <Image src={downArrow} alt="arrow icon" />
        </Wrapper>

        {isOpen && (
          <DropdownList ref={clickRef}>
            {options.map((option) => (
              <DropdownItem
                key={option.symbol}
                onClick={() => handleOptionClick(option)}
              >
                {option.symbol}
              </DropdownItem>
            ))}
          </DropdownList>
        )}
      </Container>
    </div>
  );
};
