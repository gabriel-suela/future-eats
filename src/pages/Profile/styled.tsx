import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Profile = styled.div`
  text-align: center;
  height: 5%;
  border-bottom: 1px solid black;
`;

export const ProfileInfo = styled.div`
  display: flex;
  padding: 20px;
  justify-content: space-between;
  p {
    margin-bottom: 5px;
  }
`;

export const Address = styled.div`
  background-color: #eee;
  display: flex;
  justify-content: space-between;
  padding: 20px;
  h4 {
    color: var(--greyish);
    font-weight: 400;
  }
  p {
    margin-top: 5px;
  }
`;

export const History = styled.div`
  margin-top: 10px;
  padding: 15px;
  height: 70%;
  font-size: 1.1rem;

  p {
    padding: 5px;
  }
`;
