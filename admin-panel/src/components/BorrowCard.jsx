import dayjs from 'dayjs'

export default function BorrowCard({
    title,
    author,
    category,
    img = "/books/book1.jpg",
    borrow_date,
    status_name = null,
    onClick = null,
    empty = false
}) {
    if (empty) {
        return <div className="h-full w-full">No Book Selected</div>;
    }

    return (
        <div className="grid grid-cols-4 h-32 p-2 flex flex-row w-full rounded-md bg-white text-black my-3">
            <div className="flex flex-rows">
                <img className="w-1/4 object-cover" src={img} alt=" " /> 
                <div className="ml-5 my-auto flex flex-col">
                    <p className="text-l font-bold">{title}</p> 
                    <p className="mt-5 text-s font-semibold">{author}</p>
                </div>
            </div>
            <p className="m-auto text-l font-bold">
                {category}
            </p>
            <p className="m-auto text-l font-bold">
                {(dayjs(borrow_date).format('MMMM DD, YYYY'))}
            </p>
            <p className="my-auto ">
                {!!status_name && (
                    <p className={`text-center text-l font-bold ${status_name === "Borrowed" ? "text-red-500": "text-green-500"}`}>
                        {status_name}
                    </p>
                )}
            </p>
        </div>
    );
}
