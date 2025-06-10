
let globalShowError: ((title: string, description?: string) => void) | null = null;

export function setGlobalErrorHandler(showError: (title: string, description?: string) => void) {
    globalShowError = showError;
}

export function handleError(error: unknown) {
    console.log('handleError called with:', error);
    const message =
        error instanceof Error ? error.message :
            typeof error === 'string' ? error :
                'Beklenmeyen bir hata oluştu';

    if (globalShowError) {
        globalShowError('Beklenmeyen bir hata oluştu', message);
    } else {
        console.error('Error:', message);
    }
}