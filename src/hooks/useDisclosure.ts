import { useState } from "react";

export default function useDisclosure(initial: boolean = false) {
  const [isOpen, setIsOpen] = useState<boolean>(!!initial);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);
  const onToggle = () => setIsOpen(!isOpen);

  return { isOpen, onOpen, onClose, onToggle };
}
