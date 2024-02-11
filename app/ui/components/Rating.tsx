import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";

export type RatingType = {
  star?: ImageSourcePropType;
  star1?: ImageSourcePropType;
  star2?: ImageSourcePropType;
  star3?: ImageSourcePropType;
  star4?: ImageSourcePropType;

  /** Style props */
  rating4Position?: string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const Rating = ({
  star,
  star1,
  star2,
  star3,
  star4,
  rating4Position,
}: RatingType) => {
  const rating4Style = useMemo(() => {
    return {
      ...getStyleValue("position", rating4Position),
    };
  }, [rating4Position]);

  return (
    <View style={[styles.rating4, rating4Style]}>
      <Image style={styles.starIconLayout} resizeMode="cover" source={star} />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
        resizeMode="cover"
        source={star1}
      />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
        resizeMode="cover"
        source={star2}
      />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
        resizeMode="cover"
        source={star3}
      />
      <Image
        style={[styles.starIcon1, styles.starIconLayout]}
        resizeMode="cover"
        source={star4}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  starIconLayout: {
    overflow: "hidden",
    height: 24,
    width: 24,
  },
  starIcon1: {
    marginLeft: 8,
  },
  rating4: {
    flexDirection: "row",
  },
});

export default Rating;
