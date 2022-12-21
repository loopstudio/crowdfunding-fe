import styled from "@emotion/styled";
import Link from "next/link";

export const Container = styled.div`
  padding: 30px;
`;

export const ProjectsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 75px;
  background: url(${(props) => props.bkgImage});
  display: flex;
  justify-content: flex-end;
  border-radius: 13px 13px 0 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const EditButton = styled(Link)`
  color: #000;
`;

export const Title = styled.h1`
  font-weight: bold;
`;

export const Text = styled.p`
  font-weight: normal;
`;

export const DescriptionBox = styled.div``;

export const Form = styled.form`
  display: flex;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: start;
`;

export const Label = styled.label`
  font-weight: bold;
`;

export const Card = styled.div`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
`;

export const CardProject = styled(Link)`
  margin: 1rem;
  padding: 1.5rem;
  text-align: left;
  color: inherit;
  text-decoration: none;
  border: 1px solid #eaeaea;
  border-radius: 10px;
  transition: color 0.15s ease, border-color 0.15s ease;
  max-width: 300px;
  width: 30%;
  border-radius: 13px;
`;

export const ClaimButton = styled.button`
  width: 100%;
`;
