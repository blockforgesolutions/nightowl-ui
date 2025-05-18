import { Alert } from "@material-tailwind/react";
import { useEffect } from "react";

interface SnackbarProps {
    message: string;
    open: boolean;
    duration?: number;
    onClose: () => void;
}

const Snackbar = ({ message, open, duration = 3000, onClose }: SnackbarProps) => {
    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                onClose();
            }, duration);
            return () => clearTimeout(timer);
        }
    }, [open, duration, onClose]);

    if (!open) return null;

    return (
        <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50">
            <Alert color="red" className="text-white p-4 rounded-xl shadow-lg">
                {message}
            </Alert>
        </div>
    );
};

export default Snackbar;
