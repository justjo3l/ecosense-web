import { contact } from '../data/contact';

const PlaceholderPage = () => {
    return (
        <div className="flex flex-col items-center text-center gap-0 h-auto">
            <p className="bold text-[2.5rem]">We are currently revamping our website!</p>
            <p className="bold text-[1.5rem]">Please contact us at {contact.email} for queries or information :)</p>
        </div>
    )
}

export default PlaceholderPage;