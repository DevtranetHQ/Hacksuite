import { Icon } from "@iconify/react";

export default function LoadingButton(props) {
    let buttonContent;
    if (props.isLoading) {
        buttonContent = <Icon icon="eos-icons:loading" />;
    } else {
        buttonContent = props.children;
    }

    return <button className={props.className}>{buttonContent}</button>;
}
