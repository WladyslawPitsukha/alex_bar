import { FuncItemsProps } from "@/types/funcItemsProps";


export default function AsideFuncItems({ name, onClick, isActive }: FuncItemsProps & {isActive: boolean}) {
    return (
        <article 
            onClick={onClick} 
            className={`flex w-full items-center cursor-pointer rounded-lg mx-4 my-2 p-2 transition-all duration-300 transform hover:translate-x-2 ${
                isActive 
                    ? 'bg-blue-600 shadow-lg' 
                    : 'bg-gray-700 hover:bg-gray-600'
            }`}
        >
            <span className={`text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-300"
            }`}>
                {name}
            </span>
        </article>
    );
};