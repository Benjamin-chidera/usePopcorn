import React from 'react'
import { useEffect } from 'react';

export const useKey = (key, action) => {
   useEffect(
     function () {
       document.addEventListener("keydown", function (e) {
         if (e.code.toLowerCase() === key.toLowerCase()) {
           action();
         }
       });
     },
     [action, key]
   );
}
