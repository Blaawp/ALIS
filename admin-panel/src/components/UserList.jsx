export default function UserList({
    name,
    id,
    contact,
    email,
    role,
    img,
    selected = "student"
}) {

    return (
        <div className="flex flex-row w-2/3 h-full bg-white">
            <img className="p-8 w-1/4 object-cover" src={img} alt=" " />
            <div className="flex flex-col font-semibold py-2">
                <p>{name}</p>
                <p>{id}</p>
                <p>{contact}</p>
                <p className="underline">{email}</p>
                <p>{role}</p>
            </div>
            {role === "Admin Staff" ?
                <div className="flex flex-row w-full justify-end items-end mr-2 mb-2 text-sm space-x-2">
                    <button>Edit</button>
                    <button>Delete</button>
                </div>
                :
                <></>
            }
        </div>
    );
}
