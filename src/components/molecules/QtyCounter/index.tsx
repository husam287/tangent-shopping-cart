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
    onCounterChange?.(counter + 1);
    setcounter(counter + 1);
  };

  const onDecreaseCounter = () => {
    if (counter === minValue + 1 && onReachedToMinValue) {
      onReachedToMinValue();
      return;
    }
    onCounterChange?.(counter - 1);
    setcounter(counter - 1);
  };

  useEffect(() => {
    if (counter === initValue) return;

    setcounter(initValue);
  }, [initValue]);

  return (
    <View style={styles.container}>
      <Button
        prefix={
          <Entypo name="minus" size={moderateScale(14)} color={COLORS.light} />
        }
        disabled={counter === minValue}
        onPress={onDecreaseCounter}
        btnHeight={42}
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
        btnHeight={42}
      />
    </View>
  );
}
