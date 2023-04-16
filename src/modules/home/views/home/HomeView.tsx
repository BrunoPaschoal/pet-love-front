import { ProfileHeader } from "../../../../components/ProfileHeader";
import { getFirstName } from "../../../../helpers/getFirstName";
import { CareSection } from "../../components/CareSection";
import { NewcomersSection } from "../../components/NewcomersSection";
import { ShortcutList } from "../../components/ShortcutList";
import * as S from "./style";

interface HomeViewProps {
  userAvatar: string | undefined;
  userName: string | undefined;
}

export const HomeView = ({ userAvatar, userName }: HomeViewProps) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <ProfileHeader
          title={`Olá, ${getFirstName(userName)}`}
          description={"Seja bem-vindo(a)"}
          avatarUri={userAvatar}
        />
      </S.HeaderContainer>
      <ShortcutList />
      <NewcomersSection />
      <CareSection />
    </S.Container>
  );
};
