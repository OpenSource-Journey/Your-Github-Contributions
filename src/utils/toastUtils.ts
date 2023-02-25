import { toast } from "react-toastify";

export const ToastHandler = (type: string, message: string) => {
  switch (type) {
    case "success": {
      toast.success(message, {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
      });

      break;
    }
    case "error": {
      toast.error(message, {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
      });

      break;
    }
    case "warn": {
      toast.warn(message, {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
      });

      break;
    }
    case "info": {
      toast.info(message, {
        position: "top-center",
        autoClose: 3000,
        draggable: true,
      });

      break;
    }
  }
};
