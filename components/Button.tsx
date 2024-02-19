import Image from 'next/image';
import { ReactNode } from 'react';

type ButtonProps = {
  type: 'button' | 'submit' | 'reset';
  title: string;
  icon?: string;
  variant:
    | 'btn_dark_grey'
    | 'btn_dark_gray_outline'
    | 'btn_gray'
    | 'btn_white_text'
    | 'btn_white';
  children: ReactNode;
};

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button
      className={`flexCenter gap-3 rounded-lg border uppercase ${variant}`}
      type={type}
      style={{ width: 120, height: 40 }}
    >
      {icon && <Image src={icon} alt="icon" width={20} height={20} />}
      <label className="bold-16 whitespace-nowrap">{title}</label>
    </button>
  );
};

export default Button;
