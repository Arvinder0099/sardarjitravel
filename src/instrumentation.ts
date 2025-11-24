export async function register() {
  // Use Web-standard global event listeners compatible with Edge Runtime
  if (typeof addEventListener === "function") {
    addEventListener("error", (event: ErrorEvent) => {
      console.error("[instrumentation] error", {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
        error: event.error,
      });
    });

    addEventListener("unhandledrejection", (event: PromiseRejectionEvent) => {
      console.error("[instrumentation] unhandledRejection", { reason: event.reason });
    });
  }
}