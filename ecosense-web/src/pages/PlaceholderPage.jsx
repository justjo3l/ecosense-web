import { contact } from '../data/contact';

const PlaceholderPage = () => {
    return (
    <div className="flex flex-col items-center text-center gap-[3rem] h-auto">
        <div className="flex flex-col items-center text-center gap-0 h-auto">
            <p className="text-[2.5rem]">We are currently revamping our website!</p>
            <p className="text-[1.5rem]">Please contact us for queries or information :)</p>
        </div>
        <div className="flex flex-col items-center text-center gap-[2rem] h-auto">
            <div className="flex flex-row items-center text-center gap-[3rem] h-auto">
                <div className="flex flex-col items-center text-center gap-0 h-auto">
                    <p className="text-[1.2rem]"><b>Tel:</b></p>
                    <p className="text-[1.2rem]">{contact.phone}</p>
                </div>
                <div className="flex flex-col items-center text-center gap-0 h-auto">
                    <p className="text-[1.2rem]"><b>Mobile:</b></p>
                    <p className="text-[1.2rem]">{contact.mobile}</p>
                </div>
            </div>
            <div className="flex flex-col items-center text-center gap-0 h-auto">
                <p className="text-[1.2rem]"><b>Email:</b></p>
                {contact.email.map((email, index) => (
                    <p key={index} className="text-[1.2rem]">{email}</p>
                ))}
            </div>
        </div>
    </div>
    )
}

export default PlaceholderPage;