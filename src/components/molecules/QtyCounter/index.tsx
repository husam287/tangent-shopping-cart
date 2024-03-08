import { View } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useEffect, useState } from "react";
import Text from "@/components/atoms/Text";
import { QtyCounterProps } from "./types";
import styles from "./styles";
import Button from "@/components/atoms/Button";
import { moderateScale } from "@/constants/Metrics";
import COLORS from "@/constants/Colors";

export default function QtyCounter({
  initValue = 1,
  onCounterChange,
  minValue = 1,
  onReachedToMinValue,
}: QtyCounterProps) {
  const [counter, setcounter] = useState(initValue);

  const onIncreaseCounter = () => {
    setcounter(counter + 1);
  };

  const onDecreaseCounter = () => {
    if (counter === minValue + 1) {
      onReachedToMinValue?.();
    }
    setcounter(counter - 1);
  };

  useEffect(() => {
    onCounterChange?.(counter);
  }, [counter]);

  return (
    <View style={styles.container}>
      <Button
        prefix={
          <Entypo name="minus" size={moderateScale(14)} color={COLORS.light} />
        }
        disabled={counter === minValue}
        onPress={onDecreaseCounter}
      />

      <Text
        fontSize={moderateScale(16)}
        fontFamily="font700"
        color="primary"
        style={styles.counterText}
      >
        {counter}
      </Text>

      <Button
        prefix={
          <Entypo name="plus" size={moderateScale(14)} color={COLORS.light} />
        }
        onPress={onIncreaseCounter}
      />
    </View>
  );
}
