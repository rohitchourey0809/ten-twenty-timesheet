interface StatusBadgeProps {
  status: 'Approved' | 'Pending' | 'Rejected';
}

const STATUS_STYLES = {
  Approved:
    'bg-green-100 text-green-700 border border-green-200',
  Pending:
    'bg-amber-100 text-amber-700 border border-amber-200',
  Rejected:
    'bg-red-100 text-red-700 border border-red-200',
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex min-w-[88px] items-center justify-center rounded-full border px-3 py-1 text-xs font-semibold ${STATUS_STYLES[status]}`}
    >
      {status}
    </span>
  );
}