import { ProfileHeader } from "../../../../components/ProfileHeader";
import { getFirstName } from "../../../../helpers/getFirstName";
import { ShowToastArgs } from "../../../../types/CustomToasttypes";
import { CareSection } from "../../components/CareSection";
import { NewcomersSection } from "../../components/NewcomersSection";
import { ShortcutList } from "../../components/ShortcutList";
import { PetResponseType } from "./interfaces/HomeInterfaces";
import * as S from "./style";

interface HomeViewProps {
  userAvatar: string | undefined;
  userName: string | undefined;
  pets: PetResponseType[] | undefined;
  favoriteOrUnfavoritePet: (petId: number, index: number) => Promise<void>;
  isPetsLoading: boolean;
  showToast: (args: ShowToastArgs) => void;
}

export const HomeView = ({
  showToast,
  favoriteOrUnfavoritePet,
  userAvatar,
  userName,
  isPetsLoading,
  pets,
}: HomeViewProps) => {
  return (
    <S.Container>
      <S.HeaderContainer>
        <ProfileHeader
          title={`Olá, ${getFirstName(userName)}`}
          description="Seja bem-vindo(a)"
          avatarUri={userAvatar}
        />
      </S.HeaderContainer>
      <ShortcutList />
      <NewcomersSection
        pets={pets}
        isPetsLoading={isPetsLoading}
        showToast={showToast}
        favoriteOrUnfavoritePet={favoriteOrUnfavoritePet}
      />
      <CareSection />
    </S.Container>
  );
};
