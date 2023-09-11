export default function InputComponent({label,placeholder,type,value,onChange}){
    return(
        <div className="relative">
            <p className="pr-2 pb-2 absolute pl-2 -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 pt-0 bg-white">{label}</p>
            <input
            placeholder={placeholder}
            type={type || "text"}
            value={value}
            onChange={onChange}
            className="w-full pl-4 pt-4 pr-4 pb-4 mt-0 ml-0 block mr-0 text-base text-gray-700 placeholder-gray-400 bg-white border border-gray-300 rounded-md focus:outline-none focus:border-black"
            />
        </div>
    )
}