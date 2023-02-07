export function InputWithText({ title, required, description, defaultValue, onChange, validate=false }) {

    // title description input field 

    const className=  validate ? "border-2 border-red-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200"
    :"border-2 border-gray-200 rounded w-full py-1 px-2 text-black leading-tight focus:outline-double focus:border-gray-200"
    return (
        
        <div className="mb-4 mx-2">
            <label className="font-bold text-xs"> {title} </label>{required ? "(required)" : ""}
            <br />
            <span className="text-sm">{description}</span>
            <div>
                <input className={className} id="inline-full-name" type="text" defaultValue={defaultValue}
                    onChange={onChange} />
                    {validate ? <span className="text-red-500">{title} is mandatory</span> :<></>}
            </div>
        </div>
    )
}