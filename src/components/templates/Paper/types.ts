import { ViewProps, ViewStyle } from "react-native";

type PaperSize = 'sm' | 'md' | 'l'

export interface PaperProps extends ViewProps {
  /**
   * @default "sm"
   * 
   */
  bottomSpace?: PaperSize;
  topSpace?: PaperSize;
}
