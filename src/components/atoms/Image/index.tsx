import { View } from "react-native";
import { useState } from "react";
import { Image } from "expo-image";
import LoadingComponent from "@/components/atoms/LoadingComponent";
import { ImgProps } from "./types";
import styles from "./styles";

function Img({ containerStyle, style, ...otherProps }: ImgProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaderHidded, setisLoaderHidded] = useState(false);

  return (
    <View style={containerStyle}>
      <Image
        onLoadStart={() => {
          setIsLoading(true);
        }}
        onLoadEnd={() => {
          setIsLoading(false);
          setisLoaderHidded(true);
        }}
        style={style}
        transition={200}
        {...otherProps}
      />
      {isLoading && !isLoaderHidded && (
        <View style={[styles.loadingFullContainer, style]}>
          <LoadingComponent />
        </View>
      )}
    </View>
  );
}

export default Img;
