import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function normalizeDigits(value: string) {
  return value.replace(/[^0-9]/g, "");
}

type WhatsAppChatProps = {
  /**
   * WhatsApp phone number.
   * - Preferred: full international format digits only (e.g. 919876543210)
   * - If 10 digits, `defaultCountryCode` will be prefixed.
   */
  phoneNumber: string;
  /** Optional pre-filled message. */
  message?: string;
  /** Used only when `phoneNumber` is 10 digits. Example: "91" */
  defaultCountryCode?: string;
};

export function WhatsAppChat({
  phoneNumber,
  message,
  defaultCountryCode,
}: WhatsAppChatProps) {
  const rawDigits = normalizeDigits(phoneNumber);
  const digits =
    rawDigits.length === 10 && defaultCountryCode
      ? `${normalizeDigits(defaultCountryCode)}${rawDigits}`
      : rawDigits;

  if (!digits) return null;

  const href = message
    ? `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
    : `https://wa.me/${digits}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#C9A84C] text-[#0D0D0D] shadow-lg transition-all duration-300 hover:bg-[#E6C76A] hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A84C] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D0D0D]"
    >
      <WhatsAppIcon fontSize="large" />
    </a>
  );
}
