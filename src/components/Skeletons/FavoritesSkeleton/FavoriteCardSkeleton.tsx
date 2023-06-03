import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export const FavoriteCardSkeleton = () => (
  <View style={{ marginBottom: 10 }}>
    <Skeleton
      height={100}
      width="100%"
      radius={10}
      colorMode="light"
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
      }}
    />
  </View>
);
