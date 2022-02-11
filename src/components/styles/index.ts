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

export const IconBottomRight = styled.span`
  position: relative;
  right: -8rem;
  bottom: 2rem;
  width: 1rem;
  height: 1rem;
  cursor: pointer;
`;
export const UploadedImage = styled.div`
  position: relative;
`;

export const SearchText = styled.input`
  border: none;
  background: none;
  outline: none;
  float: left;
  padding: 0;
  color: black;
  font-size: 1rem;
  transition: 0.4s;
  line-height: 40px;
  width: 0px;
`;

export const SearchButton = styled.a`
  color: #092c39;
  float: right;
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: #224957;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

export const SearchBox = styled.div`
  margin-left: 12rem;
  height: 40px;
  border-radius: 20px;
  display: flex;
  &:hover {
    :nth-child(2) {
      background: white;
    }
    > * {
      &:first-child {
        padding: 0 6px;
        width: 15rem;
        margin-left: 1rem;
      }
    }
  }
`;

export const SearchLabel = styled.label`
  margin-right: -11.5rem;
  margin-left: 6rem;
`;

export const SearchForm = styled.form`
  &:hover {
    > * {
      &:first-child {
        > * {
          &:first-child {
            display: none;
          }
        }
      }
    }
  }
`;
