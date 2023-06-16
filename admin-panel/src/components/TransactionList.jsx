import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from '@mui/material/FormControl';

export default function TransactionList({
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

    let statusColor_MUI = {
        "Borrowed": "red",
        "Available": "gray",
        "Exceeded": "blue",
        "Lost": "red"
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

                        <p className="text-md font-bold">{name}</p>
                        <p className="mb-2 text-sm">{id}</p>
                    </div>

                </div>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                {/* <p className={`text-md font-bold ${statusColor[status]}`}>{status}</p> */}
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                    <Select
                        sx={{ color: statusColor_MUI[status] }}
                        value={status}
                    >
                        <MenuItem value="Borrowed">
                            Borrowed
                        </MenuItem>
                        <MenuItem value="Returned">
                            Returned
                        </MenuItem>
                        <MenuItem value="Lost">
                            Lost
                        </MenuItem>
                        <MenuItem value="Exceeded">
                            Exceeded
                        </MenuItem>
                    </Select>
                </FormControl>

            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className="text-md font-bold">
                    {title}
                </p>
            </div>

            <div className={`${bgColor[status]} flex w-full flex-row items-center justify-center align-middle`}>
                <p className="text-md font-bold text-red-500">{due}</p>
            </div>
        </>
    );
}
