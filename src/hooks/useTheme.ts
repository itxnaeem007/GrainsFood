//usetheme hook
import { ThemeEnum } from "@/config";
import { useEffect, useState } from "react";
import { debounce } from "lodash";

const useTheme = () => {
  const [theme, setTheme] = useState<ThemeEnum>(ThemeEnum.LIGHT);

  useEffect(() => {
    const htmlElement = document.documentElement;

    const handleClassChange = debounce(() => {
      const newClasses = htmlElement.classList;
      setTheme(newClasses[0] as ThemeEnum);
    }, 1); // Debounce time in milliseconds (adjust as needed)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          handleClassChange();
        }
      });
    });
    observer.observe(htmlElement, { attributes: true });
    return () => {
      observer.disconnect(); // Disconnect the observer when the component is unmounted
    };
  }, []);
  return { theme };
};
export default useTheme;
