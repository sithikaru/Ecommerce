

export default function SelectComponent({label,value,onChange,options=[]}) {
    return (
        <div className="relative">
            <p className="pr-2  pl-2 absolute bg-white -mt-3 mr-0 mb-0 ml-2 font-medium text-gray-600 pt-0">{label}</p>
            <select
                value={value}
                onChange={onChange}
                className="w-full h-12 pl-4 pt-3 ml-0 block mr-0 text-base text-gray-700 placeholder-gray-400  border border-gray-300 rounded-md focus:outline-none focus:border-black"
                style={{backgroundColor:"#ffffff", boxShadow:"none"}}
            >
                {
                    options && options.length ?(
                        options.map((optionItem) =>( <option id={optionItem.id} value={optionItem.id} key={optionItem.id}>{optionItem.label}</option>)
                        )): <option>Select</option>
                }
            </select>
        </div>
    )
}