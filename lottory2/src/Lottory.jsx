import { useState } from 'react';
import Ticket from './Ticket.jsx';
import { genTicket, sum } from './helper.js';

function Lottory({ n = 5, winCondition }) {
    const [ticket, setTicket] = useState(genTicket(n));

    function buyTicket() {
        setTicket(genTicket(n));
    }

    return (
        <div>
            <h1>Lottery Game</h1>
            <br /><br />
            <Ticket Ticketarr={ticket} />
            <button onClick={buyTicket}>Buy Ticket</button>
            {winCondition(ticket) && (
                <h3 style={{ color: 'green', fontWeight: 'bold' }}>
                    Congratulations! You Won!!
                </h3>
            )}
        </div>
    );
}

export default Lottory;
