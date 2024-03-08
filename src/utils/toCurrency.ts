import i18n from "@/i18n";

export default function toCurrency(
  price: number | null | undefined,
  withoutCurrencyName = false
) {
  return price
    ? `${withoutCurrencyName ? "" : "£"}${price.toLocaleString()}`
    : i18n.t("FREE");
}
