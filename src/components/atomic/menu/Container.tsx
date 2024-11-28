export default function Container({
  children,
  className = "",
  ...rest
}: React.HTMLProps<HTMLDivElement>) {
  return (
    <div className={`relative block w-fit h-fit ${className}`} {...rest}>
      {children}
    </div>
  );
}
