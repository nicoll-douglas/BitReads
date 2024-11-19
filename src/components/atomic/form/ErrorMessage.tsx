export default function ErrorMessage({
  children,
  show,
}: {
  children?: React.ReactNode;
  show?: boolean;
}) {
  return (
    show && <p className="text-red-500 text-lg leading-5 mt-1">{children}</p>
  );
}
