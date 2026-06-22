type InputBoxProps = {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
};

export default function InputBox({
  value,
  onChange,
  placeholder,
}: InputBoxProps) {
  return (
    <textarea
      value={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e.target.value)}
      className="w-1/2 h-40 border rounded-lg p-4 m-4"
    />
  );
}
