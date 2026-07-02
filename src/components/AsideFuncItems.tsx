import { FuncItemsProps } from "@/types/funcItemsProps";
import { BiFoodMenu } from "react-icons/bi";

type Props = FuncItemsProps & { isActive: boolean };

export default function AsideFuncItems({
    name,
    onClick,
    isActive,
}: Props) {
    const Icon = BiFoodMenu;

    return (
        <button
            type="button"
            onClick={onClick}
            className={`flex w-full items-center gap-3 rounded-3xl px-4 py-3 text-left transition-all duration-300 border border-white/10 shadow-lg ${
                isActive
                    ? "bg-linear-to-br from-pink-500 via-yellow-400 to-green-300 text-black shadow-2xl"
                    : "bg-white/5 text-white hover:bg-white/10"
            }`}
        >
            <div
                className={`flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-300 ${
                    isActive ? "bg-black/10" : "bg-gray-800"
                }`}
            >
                <Icon
                className={`h-5 w-5 transition-colors duration-300 ${
                    isActive ? "text-blue-600" : "text-white"
                }`}
                />
            </div>

            <span
                className={`ml-3 text-sm font-medium transition-all duration-300 ${
                isActive ? "font-bold text-white" : "text-gray-300"
                }`}
            >
                {name}
            </span>
        </button>
  );
}