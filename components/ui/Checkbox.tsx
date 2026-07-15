interface CheckboxProps {
  label: string;
}

export default function Checkbox({ label }: CheckboxProps) {
  return (
    <label className="flex items-center gap-2 text-sm text-gray-600">
      <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
      {label}
    </label>
  );
}
