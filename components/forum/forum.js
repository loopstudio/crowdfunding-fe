import Image from "next/image";

import messageIcon from "../../assets/message-icon.svg";

import {
  Button,
  ButtonsContainer,
  Date,
  HeaderContainer,
  HorizontalContainer,
  ForumContainer,
  Text,
  Username,
} from "./forum.styles.js";

export const Forum = ({ discussion }) => {
  return (
    <ForumContainer>
      <HeaderContainer>
        <HorizontalContainer>
          <Image
            priority
            src={discussion.image}
            height={50}
            width={50}
            alt="image"
            style={{borderRadius: 25}}
          />
          <Username>{discussion.username}</Username>
        </HorizontalContainer>
        <Date>{discussion.date}</Date>
      </HeaderContainer>

      <Text>{discussion.title}</Text>
      <Text>{discussion.content}</Text>
      <ButtonsContainer>
        <Button>See more</Button>
        <HorizontalContainer>
        <Image
            priority
            src={messageIcon}
            height={16}
            width={16}
            alt="icon"
          />
        <Button>
          {discussion.replies}
          {discussion.replies > 1 ? " replies" : " reply"}
        </Button>
        </HorizontalContainer>
      </ButtonsContainer>
    </ForumContainer>
  );
};
