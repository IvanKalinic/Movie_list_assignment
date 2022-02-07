import styled from "styled-components";

export const LoginWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

export const CustomInput = styled.div`
  border-radius: 10px;
  background-color: #224957;
  outline: none;
  border: none;
  width: 18.75rem;
  height: 2.8125rem;
  font-size: 0.875rem;
  color: white;
  margin-bottom: 2rem;
`;
