export default function Container({
  children,
  className = "",
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div
      className={`relative block w-9 h-9 ${className}`}
      id="mobile-menu"
      {...rest}
    >
      {children}
    </div>
  );
}
