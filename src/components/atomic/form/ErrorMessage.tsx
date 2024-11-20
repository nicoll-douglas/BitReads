interface ErrorMessageProps extends React.HTMLAttributes<HTMLParagraphElement> {
  show?: boolean;
}

export default function ErrorMessage({
  children,
  className = "",
  show,
  ...rest
}: ErrorMessageProps) {
  return (
    show && (
      <p
        className={`text-red-500 text-lg leading-5 mt-1 ${className}`}
        {...rest}
      >
        {children}
      </p>
    )
  );
}
