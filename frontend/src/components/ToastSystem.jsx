import React, { useEffect, useRef, useState } from 'react';

const listeners = new Set();
let nextToastId = 1;

const emitToast = (type, message) => {
  const toastItem = {
    id: nextToastId++,
    type,
    message,
  };

  listeners.forEach((listener) => listener(toastItem));
};

export const toast = {
  success: (message) => emitToast('success', message),
  error: (message) => emitToast('error', message),
  info: (message) => emitToast('info', message),
  warn: (message) => emitToast('warn', message),
};

const typeStyles = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900',
  error: 'border-rose-200 bg-rose-50 text-rose-900',
  info: 'border-sky-200 bg-sky-50 text-sky-900',
  warn: 'border-amber-200 bg-amber-50 text-amber-900',
};

export function ToastContainer({ position = 'top-right', autoClose = 3000 }) {
  const [toasts, setToasts] = useState([]);
  const timersRef = useRef(new Map());

  useEffect(() => {
    const handleToast = (toastItem) => {
      setToasts((currentToasts) => [...currentToasts, toastItem]);

      if (autoClose !== false) {
        const timeoutId = window.setTimeout(() => {
          setToasts((currentToasts) => currentToasts.filter((item) => item.id !== toastItem.id));
          timersRef.current.delete(toastItem.id);
        }, autoClose);

        timersRef.current.set(toastItem.id, timeoutId);
      }
    };

    listeners.add(handleToast);

    return () => {
      listeners.delete(handleToast);
      timersRef.current.forEach((timeoutId) => window.clearTimeout(timeoutId));
      timersRef.current.clear();
    };
  }, [autoClose]);

  const alignmentClasses =
    position === 'top-left'
      ? 'top-4 left-4 items-start'
      : position === 'bottom-left'
        ? 'bottom-4 left-4 items-start'
        : position === 'bottom-right'
          ? 'bottom-4 right-4 items-end'
          : 'top-4 right-4 items-end';

  return (
    <div className={`fixed z-50 flex w-full max-w-sm flex-col gap-3 px-4 ${alignmentClasses}`}>
      {toasts.map((toastItem) => (
        <div
          key={toastItem.id}
          className={`w-full rounded-2xl border px-4 py-3 text-sm shadow-lg backdrop-blur ${typeStyles[toastItem.type]}`}
        >
          {toastItem.message}
        </div>
      ))}
    </div>
  );
}