export default function DueDateList({
    name,
    id,
    status,
    title,
    due,
    img
}) {

    let statusColor = {
        "Borrowed": "text-red-500",
        "Available": "text-gray-500",
        "Exceeded": "text-blue-500"
    }

    let bgColor = {
        "Returned": "bg-gray-300",
        "Borrowed": "bg-white",
        "Exceeded": "bg-gray-300"
    }

    if (!status) {
        return <></>;
    }

    return (
        <>
            <div className={bgColor[status]}>
                <div className="flex flex-row rounded-md p-4 text-black items-center">
                    <img className="w-1/4 object-cover" src={img} alt=" " />
                    
                    <div className="ml-4 flex w-3/4 flex-col">
                        
                        <p className="text-xl">{name}</p>
                        <p className="mb-2 text-sm">{id}</p>
                    </div>
                    
                </div>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className={`text-xl font-bold ${statusColor[status]}`}>{status}</p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center bg-white align-middle`}>
                <p className="text-xl font-bold">
                    {title}
                </p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center bg-white align-middle`}>
                <p className="text-xl font-bold text-red-500">{due}</p>
            </div>
        </>
    );
}
