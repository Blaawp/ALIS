export default function BookCard({
    title,
    author,
    synopsis,
    category,
    img = "/books/book1.jpg",
    status = null,
    onClick = null,
    empty = false,
    withStatus = false,
    isInventory = false,
    isCirculation = false,
    borrowedOn = "",
    returnOn = "",
    isCatalog = false
}) {
    if (empty) {
        return <div className="h-full w-full text-lg font-semibold "></div>;
    }

    return (
        <div
            onClick={onClick}
            className={`${isCirculation ? "w-96" : ""} ${isCatalog ? "w-1/2" : ""} flex flex-row rounded-md bg-white p-4 text-black ${onClick !== null ? "hover:cursor-pointer" : ""}`}
        >
            <img className="my-4 w-1/4 object-cover" src={img} alt=" " />
            <div className="ml-4 flex w-3/4 flex-col">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-l">{title}</p>
                    <p className="rounded-full bg-[#4c3feb] px-4 text-center align-middle text-white">
                        {category}
                    </p>
                </div>
                <p className="mb-2 text-sm">{author}</p>
                <p className="mb-4 text-xs">{synopsis}</p>
                {isCirculation ?
                    <div className="flex flex-row space-x-4 font-normal text-sm justify-between">
                        <div className="flex flex-col">
                            <p>Borrowed On:</p>
                            <p className="font-bold">{borrowedOn}</p>
                        </div>
                        <div className="flex flex-col">
                            <p>Return On:</p>
                            <p className="font-bold text-red-500">{returnOn}</p>
                        </div>
                    </div>
                    :
                    <></>
                }
                {!isCirculation && !!status && withStatus && (
                    <div className="flex flex-row justify-between">
                        <p className="text-lg font-bold">{isInventory ? "Status: " : ""}</p>
                        <p
                            className={`text-lg font-bold ${status === "Borrowed"
                                ? "text-red-500"
                                : "text-green-500"
                                }`}
                        >
                            {status}
                        </p>
                    </div>
                )}
                {
                    isInventory && !isCirculation ?
                        <div className="flex flex-row space-x-4 font-semibold justify-end mt-5">
                            <button>Edit</button>
                            <button>Delete</button>
                        </div>
                        :
                        <></>
                }

            </div>
        </div>
    );
}
