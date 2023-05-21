import { toast } from "react-toastify";

// Для сообщения Toast об ошибке
export const notifyError = (text: string) => toast.error(text);

// Для сообщения Toast о предупреждении
export const notifyWarn = (text: string) => toast.warn(text);

// Для сообщения Toast об успешном выполнении
export const notifySuccess = (text: string) => toast.success(text);

