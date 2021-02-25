import { useEffect, useState } from "react";

const useMobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const hideMenu = () => {
      if (window.innerWidth > 768 && isOpen) {
        setIsOpen(false)
      }
    };
    window.addEventListener('resize', hideMenu)
    return () => {
      window.removeEventListener('resize', hideMenu);
    };
  })

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }
  }, [isOpen])

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  const close = () => {
    setIsOpen(false)
  }

  return [isOpen, toggle, close];
}
 
export default useMobileMenu;