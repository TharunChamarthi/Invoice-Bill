window.addEventListener('load', () => {
    const params = (new URL(document.location)).searchParams;
    const invoice_number= params.get('invoice_number');
    const invoice_date=params.get('invoice_date');
    const name=params.get('name');
    const so=params.get('s/o');
    const Address=params.get('Address');
    const state= params.get('state');
    const Rate=params.get('Rate');
    const Taxable_value=params.get('Taxable_value');
    const Amt=params.get('amount_inWords');
    const Chassis=params.get('Chassis');
    const gst=params.get('gst');
    

     document.getElementById("serial_number").innerText= invoice_number;
     document.getElementById("invoice_date").innerText= invoice_date;
     document.getElementById("CName").innerText= name;
     document.getElementById("CNameE").innerText= name;
     document.getElementById("sonof").innerText= so;
     document.getElementById("sonofF").innerText= so;
     document.getElementById("addr").innerText= Address;
     document.getElementById("addrR").innerText= Address;
     document.getElementById("stat").innerText= state;
     document.getElementById("statT").innerText= state;
     document.getElementById("ratee").innerText= Rate;
     document.getElementById("rateeE").innerText= Rate;
     document.getElementById("taxAmount").innerText= Taxable_value;
     document.getElementById("taxAmountT").innerText= Taxable_value;
     document.getElementById('chassis_no').innerText=Chassis;
     
     document.getElementById('gst_value').innerText=gst;
     document.getElementById('gst_valueE').innerText=gst;
     document.getElementById('amount').innerText=Amt;




})