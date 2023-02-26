import { toast, TypeOptions } from "react-toastify";
import { TOAST_MESSAGE_STYLE } from "../constants/toastStyleConstant";

export const showToastMessage = (type: TypeOptions, message: string) => {
  switch (type) {
    case "success": {
      toast.success(message, TOAST_MESSAGE_STYLE);

      break;
    }
    case "error": {
      toast.error(message, TOAST_MESSAGE_STYLE);

      break;
    }
    case "warning": {
      toast.warn(message, TOAST_MESSAGE_STYLE);

      break;
    }
    case "info": {
      toast.info(message, TOAST_MESSAGE_STYLE);
      break;
    }
  }
};
