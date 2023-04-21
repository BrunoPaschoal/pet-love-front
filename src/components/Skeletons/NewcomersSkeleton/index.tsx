import React from "react";
import { MotiView } from "moti";
import { NewcomersCardSkeleton } from "./NewcomersCardSkeleton";

interface NewcomersSkeletonProps {
  numberOfCards: number;
}

export const NewcomersSkeleton = ({
  numberOfCards,
}: NewcomersSkeletonProps) => {
  return (
    <MotiView style={{ flexDirection: "row" }}>
      {Array(numberOfCards)
        .fill({})
        .map((_, i) => (
          <NewcomersCardSkeleton key={i} />
        ))}
    </MotiView>
  );
};
