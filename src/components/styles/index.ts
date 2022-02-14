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
  cursor: pointer;

  &:nth-child(4n) {
    margin-right: 0;
  }

  @media only screen and (max-width: 90rem) {
    &:nth-child(4n) {
      margin-right: 1rem;
    }
    > * {
      &:nth-child(2n) {
        > * {
          &:first-child {
            > * {
              &:first-child{
                margin-left:-0.5rem;
              }
            }
          }
        }
  }

  @media only screen and (max-width: 80rem) {
    &:nth-child(3n) {
      margin-right: 0rem;
    }
    &:nth-child(4n) {
      margin-right: 1rem;
    }
  };

  @media only screen and (max-width: 70rem) {
    &:nth-child(2n) {
      margin-right: 0rem;
    }
  }
  @media only screen and (max-width: 45rem) {
    &:nth-child(n) {
      margin-right: 0rem;
    }
  }
`;

export const MovieImage = styled.img`
  margin-top: 0.5rem;
  object-fit: cover;
  width: calc((50vw - 3rem) / 4 - 1rem);
  border-radius: 0.625rem;
  height: 100%;
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
    !image ? "0.125rem dashed #ffffff" : "0"};
  border-radius: 0.625rem;
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
  border-radius: 0.625rem;
`;

export const Icon = styled.span`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 50%;
  z-index: 102;
  border: 0.125rem solid #fff;
  width: 2rem;
  height: 2rem;

  &:hover {
    border: 0.125rem solid #8c3103;
  }
`;

export const IconBottomRight = styled.span`
  position: relative;
  right: 2rem;
  bottom: -1rem;
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
  line-height: 2.5rem;
  width: 0;
`;

export const SearchButton = styled.a`
  color: #092c39;
  float: right;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  background: #224957;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
`;

export const SearchBox = styled.div`
  margin-left: 12rem;
  height: 2.5rem;
  border-radius: 1.25rem;
  display: flex;
  &:hover {
    :nth-child(2) {
      background: white;
    }
    > * {
      &:first-child {
        padding: 0 0.375rem;
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

export const AddEditWrapper = styled.div`
  display: flex;
  @media only screen and (max-width: 60rem) {
    display: flex;
    flex-direction: column;
    align-items: start;
    margin-left:5vw;

    > * {
      &:first-child {
        width: 40vw;
        margin-top: 1rem;
        margin-bottom: 2rem;
        @media only screen and (max-width: 40rem) {
          width:50vw;
      }
    }
  }
`;

export const MovieListWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  height: 75vh;
  flex-wrap: wrap;

  @media only screen and (max-width: 80rem) {
    > div {
        width: 14vw;
        > img{
          width:92%;
        }
      }
    }
  }
  @media only screen and (max-width: 70rem) {
    > div {
        width: 23vw;
        > img{
          width:92%;
        }
      }
    }
  }
  @media only screen and (max-width: 45rem) {
    > div {
        width: 38vw;
        > img{
          width:94%;
        }
      }
    }
  }
  @media only screen and (max-width: 38rem) {
    > div {
        width: 44vw;
        > img{
          width:94%;
        }
      }
    }
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  margin: auto;
  top: -8vh;

  @media only screen and (max-width: 85rem) {
    position: absolute;
    left: 15rem;
  }
  @media only screen and (max-width: 75rem) {
    position: relative;
    left: 13vw;
    top: 0;
  }
  @media only screen and (max-width: 55rem) {
    position: relative;
    left: 5vw;
    top: 0;
  }
  @media only screen and (max-width: 45rem) {
    position: relative;
    left: -6vw;
    top: 0;
    margin-top: 1rem;
  }
`;
