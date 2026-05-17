export const ROLES: ReadonlyArray<{ value: string; label: string }> = [
  { value: "mieter_kaeufer", label: "Mieter:in / Käufer:in" },
  { value: "anbieter",       label: "Anbieter:in" },
  { value: "makler",         label: "Makler:in" },
  { value: "dienstleister",  label: "Dienstleister:in" },
];

export type Role = (typeof ROLES)[number]["value"];
