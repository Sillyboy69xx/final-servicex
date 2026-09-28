"use client";

export function CookieSettingsButton() {
  return (
    <button
      type="button"
      onClick={() =>
        window.dispatchEvent(
          new Event("prv:open-cookie-settings")
        )
      }
      className="text-xs text-text-muted underline underline-offset-4 hover:text-accent-primary"
    >
      Setări cookie-uri
    </button>
  );
}
