import { useState } from "react";
function Lottory(){
    let [ticket,setTicket]=useState(-1);
   let [isGenerated, setIsGenerated] = useState(false);
   let [win,setWin]=useState(false);
    function ticketgenrate(){
        ticket=Math.floor(Math.random()*1000)
        setTicket(ticket);
        setIsGenerated(true);
        setWin(() => {
            let sum = 0;
            let temp = ticket;
            for (let i = 0; i < 3; i++) {
              sum += temp % 10;
              temp = Math.floor(temp / 10);
               // Use Math.floor to ensure integer division
               console.log(sum);
            }
            return sum === 15; // Directly return the comparison result
          });
          
    }
    return(
        <>
       <h1>Lottery</h1>
       {win ? <h2>Congratulations! You Won!</h2> : null}

        {isGenerated ? <p>Lottory Ticket={ticket}</p> : null}
        <button onClick={ticketgenrate}>Genrate new ticket</button>
        </>
    );
}
export default Lottory