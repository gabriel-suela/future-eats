import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import Loading from "../../components/Loading/Loading";
import { BASE_URL } from "../../constants/url";
import useProtectedPage from "../../hooks/useProtectedPage";
import { useRequestData } from "../../hooks/useRequestData";
import { Address, Container, History, ProfileInfo } from "./styled";
import EditIcon from '@mui/icons-material/Edit';
import OrderHistory from "../../components/OrderHistory/OrderHistory";

const ProfilePage = () => {
  useProtectedPage();

  const [data, isLoading] = useRequestData(
    `${BASE_URL}/profile`,
    localStorage.getItem("token")
  );

  const profile = data && (
    <ProfileInfo>
      <div>
        <p>{data.user.name}</p>
        <p>{data.user.email}</p>
        <p>{data.user.cpf}</p>
      </div>
      <EditIcon/>
    </ProfileInfo>
  );

  const address = data && (
    <Address>
      <div>
        <h4>Endereço cadastrado</h4>
        <p>{data.user.address}</p>
      </div>
      <EditIcon/>
    </Address>
  );

  return (
    <Container>
      <Header title={"Meu Perfil"}></Header>
      {isLoading && <Loading />}
      {!isLoading && data && profile}
      {!isLoading && data && address}

      <History>
        <p>Histórico de pedidos</p>
        <OrderHistory/>
      </History>

      <Footer page={"profile"} />
    </Container>
  );
};

export default ProfilePage;
