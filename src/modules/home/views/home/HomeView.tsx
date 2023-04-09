import { ProfileHeader } from "../../../../components/ProfileHeader";
import { getFirstName } from "../../../../helpers/getFirstName";
import * as S from "./style";

export const HomeView = () => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <ProfileHeader
          title={`Olá, ${getFirstName("Bruno Rocha")}`}
          description={"Seja bem-vindo(a)"}
          avatarUri={
            "https://hips.hearstapps.com/hmg-prod/images/pet-adoption-tips-64188c226e7fe.jpg"
          }
        />
      </S.HeaderContainer>
    </S.Container>
  );
};
