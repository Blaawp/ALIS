export default function BookCard({
    title,
    author,
    synopsis,
    genre,
    img,
    status = null,
    onClick = null,
    empty = false
}) {
    if (empty) {
        return <div className="h-full w-full">No Book Selected</div>;
    }

    return (
        <div
            onClick={onClick}
            className="flex flex-row rounded-md bg-white p-4 text-black"
        >
            <img className="w-1/4 object-cover" src={img} alt=" " />
            <div className="ml-4 flex w-3/4 flex-col">
                <div className="flex flex-row items-center justify-between">
                    <p className="text-xl">{title}</p>
                    <p className="rounded-full bg-[#4c3feb] px-4 text-center align-middle text-white">
                        {genre}
                    </p>
                </div>
                <p className="mb-2 text-sm">{author}</p>
                <p className="mb-4">{synopsis}</p>
                {!!status && (
                    <div className="flex flex-row justify-between">
                        <p className="text-xl font-bold">Status:</p>
                        <p
                            className={`text-xl font-bold ${
                                status === "Borrowed"
                                    ? "text-red-500"
                                    : "text-green-500"
                            }`}
                        >
                            {status}
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
