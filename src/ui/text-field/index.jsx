import Label from "../label";

export default function TextField({
  text = "text",
  label,
  value,
  placeholder,
  maxLength,

  onChange = () => {},
}) {
  return (
    <>
      {label && <Label>{label}</Label>}
      <input
        maxLength={maxLength}
        type={text}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </>
  );
}
