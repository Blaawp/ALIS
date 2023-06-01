export default function NotificationList({
    name,
    id,
    status,
    title,
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
                    
                    <p className="mb-2 text-xl font-bold">{name}</p>
                    
                </div>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className="text-xl font-bold">{id}</p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p
                    className={`text-xl font-bold ${statusColor[status]}`}
                >
                    {status}
                </p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className="text-xl font-bold">{title}</p>
            </div>
        </>
    );
}
