export default function ArchivedList({
    genre,
    status,
    img,
    author,
    title
}) {

    let statusColor = {
        "Borrowed": "text-red-500",
        "Available": "text-green-500",
        "Archived": "text-gray-500"
    }
    
    if (!status) {
        return <></>;
    }

    return (
        <>
            <div className="bg-white">
                <div className="flex flex-row rounded-md bg-white p-4 text-black">
                    <img className="w-1/4 object-cover" src={img} alt=" " />
                    <div className="ml-4 flex w-3/4 flex-col">
                        <div className="flex flex-row items-center justify-between">
                            <p className="text-xl">{title}</p>
                            <p className="rounded-full bg-[#4c3feb] px-4 text-center align-middle text-white">
                                {genre}
                            </p>
                        </div>
                        <p className="mb-2 text-sm">{author}</p>
                    </div>
                </div>
            </div>

            <div className="flex w-full flex-row items-center justify-center bg-white align-middle">
                <p className="text-xl font-bold">{genre}</p>
            </div>
            
            <div className="flex w-full flex-row items-center justify-center bg-white align-middle">
                <p className={`text-xl font-bold ${statusColor[status]}`}>
                    {status}
                </p>
            </div>
        </>
    );
}
