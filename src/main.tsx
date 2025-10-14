import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

const rootEl = document.getElementById("root");

// Ensure any static boot loader in index.html is removed before React mounts
if (rootEl) {
  rootEl.innerHTML = "";
}

function showFallback(message: string) {
  if (!rootEl) return;
  rootEl.innerHTML = `
    <div style="min-height:100vh;display:flex;align-items:center;justify-content:center;background:#fafafa;color:#111;font-family:Vazirmatn,Segoe UI,Tahoma,Arial,sans-serif;text-align:center;padding:16px">
      <div>
        <div>خطا در بارگذاری سایت نوید زندگی</div>
        <div style="opacity:.7;font-size:14px;margin-top:8px">${message}</div>
        <div style="margin-top:12px;font-size:14px">برای راه‌اندازی سریع‌تر، یکبار صفحه را رفرش کنید.</div>
      </div>
    </div>`;
}

window.addEventListener('error', (e) => {
  if (!(window as any).__APP_MOUNTED__) {
    showFallback(String((e as ErrorEvent).error || (e as ErrorEvent).message || 'اجرای اسکریپت ناموفق بود'));
  } else {
    console.error('App error after mount:', e);
  }
});
window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => {
  if (!(window as any).__APP_MOUNTED__) {
    showFallback(String(e.reason || 'خطای ناشناخته'));
  } else {
    console.error('Unhandled rejection after mount:', e.reason);
  }
});

try {
  createRoot(rootEl!).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
  // Mark app mounted for boot watchdog
  (window as any).__APP_MOUNTED__ = true;
} catch (e: any) {
  showFallback(String(e?.message || e));
}
