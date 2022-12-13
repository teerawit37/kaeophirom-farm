import { useEffect, useState } from "react";

interface Props {
    children?: React.ReactNode;
    onClick: () => void;
}

const Button = ({
    children,
    onClick
  }: Props) => {

    return (
        <button onClick={onClick} className='wth-button'>{children}</button>
    );
}

export default Button;