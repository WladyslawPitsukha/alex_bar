import { FuncItemsProps } from "@/types/funcItemsProps";


export default function AsideFuncItems({ icon, name, onClick, isActive }: FuncItemsProps & {isActive: boolean}) {
    const Icon = icon;
    
    return (
        <article 
            onClick={onClick} 
            className={`flex items-center cursor-pointer rounded-lg mx-4 my-2 p-2 transition-all duration-300 transform hover:translate-x-2 ${
                isActive 
                    ? 'bg-blue-600 shadow-lg' 
                    : 'bg-gray-700 hover:bg-gray-600'
            }`}
        >
            <div className={`flex items-center justify-center rounded-lg transition-all duration-300 ${
                isActive ? "bg-white" : "bg-gray-800"
            } w-10 h-10`}>
                {Icon ? (
                    <Icon className={`w-5 h-5 transition-colors duration-300 ${
                        isActive ? "text-blue-600" : "text-white"
                    }`} />
                ) : null}
            </div>
            <span className={`ml-4 text-sm font-medium transition-all duration-300 ${
                isActive ? "text-white font-bold" : "text-gray-300"
            }`}>
                {name}
            </span>
        </article>
    );
};