document.getElementById('search').addEventListener('click',getData);

  
async function getData() {
    const bruh = document.getElementById("bruh").value;
const url = `https://stacks-node-api.mainnet.stacks.co/extended/v1/address/${bruh}/balances`;
 const response = await fetch(url);
 if (!response.ok) {
    const message = alert(`Invalid STX Ady: ${response.status}`);
    throw new Error(message);
  }
  const data = await response.json();
  document.getElementById('balance').innerHTML=data.stx.balance/1000000;
  document.getElementById('sent').innerHTML=data.stx.total_sent/1000000;
  document.getElementById('received').innerHTML=data.stx.total_recived/1000000;
  document.getElementById('feesent').innerHTML=data.stx.total_fee_sent/1000000;
 
 }





 

