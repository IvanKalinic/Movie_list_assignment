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
  left: -30%;
  bottom: 1rem;
`;

export const UploadBoxWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: ${({ image }: { image: any }) =>
    !image ? "2px dashed #ffffff" : "0px"};
  border-radius: 10px;
  width: 25vw;
  height: 50vh;
  background-color: #224957;
  cursor: pointer;
  margin-right: 5rem;
`;

export const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

export const Icon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  z-index: 102;
  border: 2px solid #fff;
  width: 2rem;
  height: 2rem;

  &:hover {
    border: 2px solid #8c3103;
  }
`;

export const UploadedImage = styled.div`
  position: relative;
`;
