import {useState} from 'react'




function Receipt (props) {
const [paid, setPaid] = useState (props.receipt.paid) 
if (props.receipt.paid) {
    return null

} else {
return <div onClick = {(event) => {
    props.receipt.paid = true
    setPaid (props.receipt.paid)
}} > 
             <h1> {props.receipt.person}</h1> 
             <p> <span> Main:</span>{props.receipt.order.main}</p>
             <p> <span> Protein:</span>{props.receipt.order.protein}</p>
             <p> <span> Rice:</span>{props.receipt.order.rice}</p>
             <p> <span> Sauce:</span>{props.receipt.order.sauce}</p>
             <p> <span> Drink:</span>{props.receipt.order.drink}</p>
             <p> <span> Cost:</span>{props.receipt.order.cost}</p>
  
</div> 

}


    

    
    
}
export default Receipt 

