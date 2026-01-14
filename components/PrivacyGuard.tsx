
'use client';

import { useEffect } from 'react';

export function PrivacyGuard() {
  useEffect(() => {
    const handleContextMenu = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // Allow context menu for text inputs and other editable elements
      if (
        ['INPUT', 'TEXTAREA'].includes(target.tagName) ||
        target.isContentEditable
      ) {
        return;
      }
      e.preventDefault();
    };
    
    document.addEventListener('contextmenu', handleContextMenu);

    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
    };
  }, []);

  return null;
}
