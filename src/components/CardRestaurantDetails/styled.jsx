import styled from "styled-components";

export const ContainerCardRestaurantDetails = styled.div`
  width: 100%;
  margin: 0.5rem 0;
  border-radius: 8px;
  padding: 0.3rem;
`;

export const ImageRestaurant = styled.img`
  width: 100%;
  height: 7.5rem;
  object-fit: cover;
  margin: 0 0 12px;
  border-radius: 8px 8px 0px 0px;
`;

export const RestaurantName = styled.h3`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #5cb646;
  margin: 12px 16px 4px;
`;

export const BoxInformTimePrice = styled.div`
  display: flex;
  margin: 5px 0;
`;

export const Inform = styled.p`
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
  margin: 4px 8px 0 16px;
`;
