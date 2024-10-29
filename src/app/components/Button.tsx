interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: React.ReactNode;
}

export default function Button({
  children,
  className = "",
  ...props
}: ButtonProps) {
  return (
    <button
      className={`text-md text-nowrap border px-3 py-1 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
