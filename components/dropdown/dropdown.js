import Image from "next/image";
import { useState } from "react";

import downArrow from "assets/icons/downArrow.svg";

import {
  Container,
  DropdownButton,
  DropdownItem,
  DropdownList,
  Label,
  Wrapper,
} from "./dropdown.styles";

export const Dropdown = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleButtonClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };
  return (
    <div>
      <Label htmlFor="token">Token</Label>
      <Container name="token">
        <Wrapper isOpen={isOpen} onClick={handleButtonClick}>
          <DropdownButton>{selectedOption || ""}</DropdownButton>
          <Image src={downArrow} alt="arrow icon" />
        </Wrapper>

        {isOpen && (
          <DropdownList>
            {options.map((option) => (
              <DropdownItem
                key={option.symbol}
                onClick={() => handleOptionClick(option.symbol)}
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
