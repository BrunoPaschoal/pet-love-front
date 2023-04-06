export enum ToastType {
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
  ATTENTION = "ATTENTION",
}

export type ShowToastArgs = {
  title: string;
  message: string;
  duration?: number;
  type: keyof typeof ToastType;
};
