import { useCallback, useState } from "react";

export default function useDisclosure(initial: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(!!initial);

  const onOpen = useCallback(() => setIsOpen(true), []);
  const onClose = useCallback(() => setIsOpen(false), []);
  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
}
