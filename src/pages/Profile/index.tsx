import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../../components/NavBar";
import OrderHistory from "../../components/OrderHistory";
import useProtectedPage from "../../hooks/useProtectedPage";
import { BASE_URL } from "../../utils/url";
import { Address, Container, History, ProfileInfo } from "./styled";

export interface ProfileProps {
  email: string;
  name: string;
  address: string;
}

export interface ApiResponse {
  user: ProfileProps;
}

const Profile = () => {
  useProtectedPage();

  const [profile, setProfile] = useState<ProfileProps | null>(null);

  const fetchProfile = async () => {
    try {
      const response = await axios.get<ApiResponse>(`${BASE_URL}/profile`, {
        headers: {
          auth: localStorage.getItem("token"),
        },
      });
      setProfile(response.data.user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return (
    <Container>
      <ProfileInfo>
        <div>
          <p>{profile?.name}</p>
          <p>{profile?.email}</p>
        </div>
      </ProfileInfo>
      <Address>
        <div>
          <h4>Endereço cadastrado</h4>
          <p>{profile?.address}</p>
        </div>
      </Address>
      <History>
        <p>Histórico de pedidos</p>
        <OrderHistory />
      </History>
      <NavBar page={"profile"} />
    </Container>
  );
};

export default Profile;
