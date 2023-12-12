import clsx from "clsx";

interface MenuItemProps {
  isActive: boolean;
  icon: React.ReactNode;
  label: string;
  onClick?: (arg: any) => void;
}

const MenuItem: React.FC<MenuItemProps> = ({
  isActive,
  icon,
  label,
  onClick,
}) => {
  return (
    <li
      className={clsx({
        "flex items-center text-[#fff] lg:text-white justify-start pl-4  mx-auto mb-[15px] w-full h-[40px] cursor-pointer":
          true,
        "bg-transparent border border-[#fff]  border-l-8 border-[#fff]  font-[800]":
          isActive,
      })}
      onClick={onClick}
    >
      {icon}
      <div className="w-8" />
      <div
        className={clsx({
          "w-100 h-100 text-medium font-normal leading-normal text-white z-100":
            true,
          "text-[#fff] font-[700]": isActive,
        })}
      >
        {label}
      </div>
    </li>
  );
};

export default MenuItem;
