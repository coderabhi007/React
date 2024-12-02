import TicketNum from "./TicketNum";
import './Ticket.css'
function Ticket({ Ticketarr }) {
    return (
        <div className="ticket">
            <h4>Ticket</h4>
            {Ticketarr.map((num, idx) => (
                <TicketNum num={num} key={idx} />
            ))}
        </div>
    );
}

export default Ticket;
