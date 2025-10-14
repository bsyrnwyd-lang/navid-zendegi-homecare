import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    // Basic runtime logging
    console.error("App crashed:", error, errorInfo);
    // Expose last error for diagnostics
    (window as any).__NAVID_LAST_ERROR__ = { error: String(error), info: errorInfo };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-background text-foreground flex items-center justify-center p-6">
          <div className="max-w-md text-center">
            <h1 className="text-2xl font-bold mb-3">بروز خطا در بارگذاری صفحه</h1>
            <p className="text-muted-foreground mb-4">لطفاً صفحه را رفرش کنید. اگر مشکل باقی بود، روی تماس فوری بزنید.</p>
            <div className="flex items-center justify-center gap-3">
              <a href="tel:09386117912" className="inline-flex items-center rounded-md px-4 py-2 bg-primary text-primary-foreground">
                تماس فوری 09386117912
              </a>
              <a href="https://wa.me/989386117912" target="_blank" rel="noreferrer" className="inline-flex items-center rounded-md px-4 py-2 border border-border">
                واتساپ
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
