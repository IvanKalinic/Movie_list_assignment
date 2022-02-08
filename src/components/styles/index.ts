import styled from "styled-components";

export const LoaderContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const UniversalWrapper = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: hsl(209, 34%, 30%);
    margin-bottom: 1.5rem;
  }
`;

// width: 16.625rem;
export const MovieItemContainer = styled.div`
  width: calc((50vw - 3rem) / 4);
  height: calc((75vh - 1rem) / 2);
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 0.625rem;
  background-color: #092c39;
  margin-bottom: 1rem;
  color: white;

  &:nth-child(4n) {
    margin-right: 0rem;
  }
`;

// width: 15.625rem;
export const MovieImage = styled.img`
  margin-top: 0.5rem;
  object-fit: cover;
  width: calc((50vw - 3rem) / 4 - 1rem);
  height: 75%;
  border-radius: 0.625rem;
`;

export const PositionLeft = styled.div`
  position: relative;
  left: -4rem;
  bottom: 1rem;
`;
