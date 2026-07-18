let addToast = null;

export function registerToastHandler(handler) {
  addToast = handler;
}

function show(type, message, options = {}) {
  if (!addToast) {
    console.warn("ToastContainer not mounted yet");
    return;
  }
  addToast({
    type,
    message,
    duration: options.duration ?? 3000,
    animation: options.animation ?? "slide",
  });
}

export const toast = {
  success: (message, options) => show("success", message, options),
  error: (message, options) => show("error", message, options),
  info: (message, options) => show("info", message, options),
  warning: (message, options) => show("warning", message, options),
};