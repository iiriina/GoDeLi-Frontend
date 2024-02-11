import React, { useMemo } from "react";
import { Image, StyleSheet, View, ImageSourcePropType } from "react-native";
import { Border } from "../GlobalStyles";

export type FormElementsAvatarType = {
  avatar1?: ImageSourcePropType;
  avatar2?: ImageSourcePropType;
  avatar3?: ImageSourcePropType;
  avatar4?: ImageSourcePropType;
  avatar5?: ImageSourcePropType;
  avatar6?: ImageSourcePropType;
  avatar7?: ImageSourcePropType;
  avatar8?: ImageSourcePropType;
  ellipse1?: ImageSourcePropType;
  showAvatar1Icon?: boolean;
  avatar2Icon?: boolean;
  showEllipseIcon?: boolean;

  /** Style props */
  formElementsAvatarWidth?: number | string;
  formElementsAvatarHeight?: number | string;
};

const getStyleValue = (key: string, value: string | number | undefined) => {
  if (value === undefined) return;
  return { [key]: value === "unset" ? undefined : value };
};
const FormElementsAvatar = ({
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
  ellipse1,
  showAvatar1Icon,
  avatar2Icon,
  showEllipseIcon,
  formElementsAvatarWidth,
  formElementsAvatarHeight,
}: FormElementsAvatarType) => {
  const formElementsAvatarStyle = useMemo(() => {
    return {
      ...getStyleValue("width", formElementsAvatarWidth),
      ...getStyleValue("height", formElementsAvatarHeight),
    };
  }, [formElementsAvatarWidth, formElementsAvatarHeight]);

  return (
    <View style={[styles.formElementsAvatar, formElementsAvatarStyle]}>
      <View style={styles.avatar}>
        {showAvatar1Icon && (
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={avatar1}
          />
        )}
        {!avatar2Icon && (
          <Image
            style={[styles.avatar2Icon, styles.iconLayout]}
            resizeMode="cover"
            source={avatar2}
          />
        )}
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar3}
        />
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar4}
        />
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar5}
        />
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar6}
        />
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar7}
        />
        <Image
          style={[styles.avatar2Icon, styles.iconLayout]}
          resizeMode="cover"
          source={avatar8}
        />
        {showEllipseIcon && (
          <Image
            style={styles.avatarChild}
            resizeMode="cover"
            source={ellipse1}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  iconLayout: {
    borderRadius: Border.br_21xl,
    height: 40,
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  avatar2Icon: {
    display: "none",
  },
  avatarChild: {
    top: 30,
    left: 30,
    width: 10,
    height: 10,
    position: "absolute",
  },
  avatar: {
    height: 40,
    width: 40,
    left: 0,
    top: 0,
    position: "absolute",
  },
  formElementsAvatar: {
    width: 46,
    height: 43,
  },
});

export default FormElementsAvatar;
