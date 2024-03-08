export interface QtyCounterProps {
  initValue?: number;
  onCounterChange?: (e: number) => void;
  minValue?: number;
  onReachedToMinValue?: () => void;
}
