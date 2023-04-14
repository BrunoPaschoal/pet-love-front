import * as S from "./style";
import { NewcomersCard } from "../../../../components/NewcomersCard";

export const NewcomersSection = () => {
  return (
    <S.Container>
      <S.Title>Recém Chegados</S.Title>
      <S.CardsScrollView horizontal showsHorizontalScrollIndicator={false}>
        <S.CardsContainer>
          <NewcomersCard
            petName="Lili"
            petCity={"Suzano-SP"}
            sex={"FEMALE"}
            imageUri={
              "https://static01.nyt.com/images/2022/06/21/well/15WELL-DOGS-CALM-KIDS2/15WELL-DOGS-CALM-KIDS2-mediumSquareAt3X.jpg"
            }
            isFavorite={true}
          />
          <NewcomersCard
            petName="Kiara"
            petCity={"Santo André-SP"}
            sex={"FEMALE"}
            imageUri={
              "https://media.npr.org/assets/img/2021/08/11/gettyimages-1279899488_wide-f3860ceb0ef19643c335cb34df3fa1de166e2761.jpg"
            }
            isFavorite={false}
          />
          <NewcomersCard
            petName="Jubileu"
            petCity={"Ferraz de vasconcelos-SP"}
            sex={"MALE"}
            imageUri={
              "https://hips.hearstapps.com/hmg-prod/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=0.752xw:1.00xh;0.175xw,0&resize=1200:*"
            }
            isFavorite={false}
          />
          <NewcomersCard
            petName="Ringo"
            petCity={"Mogi das Cruzes-SP"}
            sex={"MALE"}
            imageUri={"https://www.goodnet.org/photos/281x197/32439_hd.jpg"}
            isFavorite={true}
          />
        </S.CardsContainer>
      </S.CardsScrollView>
    </S.Container>
  );
};
