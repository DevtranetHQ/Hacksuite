import { Icon } from "@iconify/react";

export default function LoadingButton({ isLoading, children, ...props }) {
  let buttonContent;
  if (isLoading) {
    buttonContent = <Icon icon="eos-icons:loading" />;
  } else {
    buttonContent = children;
  }

  return <button {...props}>{buttonContent}</button>;
}
