import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ErrorBoundary from "./components/ErrorBoundary";

const rootEl = document.getElementById("root");

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

window.addEventListener('error', (e) => showFallback(String(e.error || e.message || 'اجرای اسکریپت ناموفق بود')));
window.addEventListener('unhandledrejection', (e: PromiseRejectionEvent) => showFallback(String(e.reason || 'خطای ناشناخته')));

try {
  createRoot(rootEl!).render(
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  );
} catch (e: any) {
  showFallback(String(e?.message || e));
}
