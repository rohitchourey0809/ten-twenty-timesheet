interface StatusBadgeProps {
  status: string;
}

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const styles: Record<string, string> = {
    Completed:
      "bg-green-100 text-green-700 border border-green-200",
    Pending:
      "bg-yellow-100 text-yellow-700 border border-yellow-200",
    Incomplete:
      "bg-red-100 text-red-700 border border-red-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] ??
        "bg-gray-100 text-gray-700 border border-gray-200"
      }`}
    >
      {status}
    </span>
  );
}