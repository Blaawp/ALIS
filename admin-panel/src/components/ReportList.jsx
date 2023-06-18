export default function ReportList({
    name,
    id,
    status,
    title,
    comment,
    img
}) {

    let statusColor = {
        "Borrowed": "text-red-500",
        "Available": "text-gray-500",
        "Exceeded": "text-blue-500",
        "Lost": "text-red-500"
    }

    let bgColor = {
        "Returned": "bg-gray-300",
        "Borrowed": "bg-white",
        "Exceeded": "bg-gray-300",
        "Lost": "bg-white",
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

                        <p className="text-md font-bold">{name}</p>
                        <p className="mb-2 text-sm">{id}</p>
                    </div>

                </div>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className={`text-md font-bold ${statusColor[status]}`}>{status}</p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className="text-md font-bold">
                    {title}
                </p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center text-center`}>
                <p className="text-md text-black">{comment}</p>
            </div>
        </>
    );
}
