import React from "react";
import { MotiView } from "moti";
import { FavoriteCardSkeleton } from "./FavoriteCardSkeleton";

interface NewcomersSkeletonProps {
  numberOfCards: number;
}

export const FavoritesSkeleton = ({
  numberOfCards,
}: NewcomersSkeletonProps) => {
  return (
    <MotiView>
      {Array(numberOfCards)
        .fill({})
        .map((_, i) => (
          <FavoriteCardSkeleton key={i} />
        ))}
    </MotiView>
  );
};
