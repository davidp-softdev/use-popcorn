import { useEffect } from "react";

export function useKey(keyboardKey, action) {
  useEffect(
    function () {
      function callback(e) {
        if (e.code.toLowerCase() === keyboardKey.toLowerCase()) {
          action();
        }
      }
      document.addEventListener("keydown", callback);

      return function () {
        document.removeEventListener("keydown", callback);
      };
    },
    [action, keyboardKey]
  );
}
