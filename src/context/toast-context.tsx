import { createContext, useContext, useState, ReactNode } from 'react';
import { Alert } from "@material-tailwind/react";

interface Toast {
    id: string;
    title: string;
    description?: string;
    type: 'success' | 'error' | 'warning' | 'info';
}

interface ToastContextType {
    showToast: (title: string, description?: string, type?: Toast['type']) => void;
    showError: (title: string, description?: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<Toast[]>([]);

    const showToast = (title: string, description?: string, type: Toast['type'] = 'info') => {
        const id = Date.now().toString();
        const newToast: Toast = { id, title, description, type };

        setToasts(prev => [...prev, newToast]);

        setTimeout(() => {
            setToasts(prev => prev.filter(toast => toast.id !== id));
        }, 2000);
    };

    const showError = (title: string, description?: string) => {
        showToast(title, description, 'error');
    };

    const removeToast = (id: string) => {
        setToasts(prev => prev.filter(toast => toast.id !== id));
    };

    const getAlertColor = (type: Toast['type']) => {
        switch (type) {
            case 'error': return 'red';
            case 'success': return 'green';
            case 'warning': return 'amber';
            default: return 'blue';
        }
    };

    return (
        <ToastContext.Provider value={{ showToast, showError }}>
            {children}

            {/* Toast Container */}
            <div className="fixed top-4 right-4 z-50 space-y-2 max-w-sm">
                {toasts.map((toast) => (
                    <Alert
                        key={toast.id}
                        color={getAlertColor(toast.type)}
                        variant="filled"
                        className="cursor-pointer animate-slide-in-right"
                        onClose={() => removeToast(toast.id)}
                    >
                        <strong className="block">{toast.title}</strong>
                        {toast.description && (
                            <span className="text-sm opacity-90">{toast.description}</span>
                        )}
                    </Alert>
                ))}
            </div>
        </ToastContext.Provider>
    );
}

export function useToast() {
    const context = useContext(ToastContext);
    if (!context) {
        throw new Error('useToast must be used within a ToastProvider');
    }
    return context;
}