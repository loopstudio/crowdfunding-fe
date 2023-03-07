import { Container, Arrow, PageNumber } from "./pagination.styles";

export const Pagination = ({ activePage, pages, setActivePage }) => {
  const getPages = () => {
    const elements = [];
    for (let i = 1; i <= pages; i++) {
      elements.push(
        <PageNumber
          isActive={activePage === i}
          onClick={() => setActivePage(i)}
          key={i}
        >
          {i < 10 ? `0${i}` : i}
        </PageNumber>
      );
    }
    return elements;
  };

  return (
    <Container>
      <Arrow
        isInactive={activePage === 1 || pages === 0}
        onClick={() => activePage !== 1 && setActivePage((page) => page - 1)}
      >
        {"<"}
      </Arrow>
      {getPages()}
      <Arrow
        isInactive={activePage === pages || pages === 0}
        onClick={() =>
          activePage !== pages && setActivePage((page) => page + 1)
        }
      >
        {">"}
      </Arrow>
    </Container>
  );
};
