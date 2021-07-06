import { BiTrash } from "react-icons/bi";

const AppointmentsAntigo = (props) => {
    return(
        <ul className="divide-y divide-gray-200">

        {props.appointments.map((item) => (
            <li className="px-3 py-3 flex items-start" key={item.id}>
                <button type="button" className="p-1.5 mr-1.5 mt-1 rounded text-white bg-red-500 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                    <BiTrash />
                </button>
                <div className="flex-grow">
                    <div className="flex items-center">
                        <span className="flex-none font-medium text-2xl text-blue-500">{item.petName}</span>
                        <span className="flex-grow text-right">{item.aptDate}</span>
                    </div>
                    <div>
                        <b className="font-bold text-blue-500">Owner:</b> {item.ownerName}
                    </div>
                    <div className="leading-tight">{item.aptNotes}</div>
                </div>
            </li>
        ))}
        
      </ul>
    )
}

export default AppointmentsAntigo;