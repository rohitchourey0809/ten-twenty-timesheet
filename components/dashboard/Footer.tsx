export default function Footer() {
  return (
    <footer
      className="
        flex
        h-16
        items-center
        justify-between
        border-t
        border-gray-200
        bg-gray-50
        px-8
      "
    >
      {/* Copyright */}

      <p
        className="
          text-sm
          text-gray-500
        "
      >
        © 2025 TickTock. All rights reserved.
      </p>

      {/* Links */}

      <div
        className="
          flex
          items-center
          gap-6
        "
      >
        <button
          className="
            text-sm
            text-gray-500
            transition
            hover:text-gray-900
          "
        >
          Privacy Policy
        </button>

        <button
          className="
            text-sm
            text-gray-500
            transition
            hover:text-gray-900
          "
        >
          Terms & Conditions
        </button>
      </div>
    </footer>
  );
}
