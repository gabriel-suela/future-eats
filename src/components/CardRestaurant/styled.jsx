import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border: 1px solid var(--greyish);
  border-radius: 8px;
  padding: 0.3rem;

  img {
    width: 100%;
    height: 7.5rem;
    object-fit: cover;
    margin: 0 0 12px;
  }

  h3 {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--mid-green);
    margin: 12px 16px 4px;
  }

  p {
    font-size: 1rem;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: var(--greyish);
    margin: 4px 8px 0 16px;
  }
`;

export const BoxInformTimePrice = styled.div`
  display: flex;
  justify-content: space-between;
`;
