import { Skeleton } from "moti/skeleton";
import { View } from "react-native";

export const NewcomersCardSkeleton = () => (
  <View style={{ marginRight: 10 }}>
    <Skeleton
      height={170}
      width={140}
      radius={30}
      colorMode="light"
      transition={{
        type: "timing",
        duration: 1000,
        loop: true,
      }}
    />
  </View>
);
