const data = [
    { image: "https://www.tasteofhome.com/wp-content/uploads/2021/01/undhiyu-is-a-gujarati-mixed-vegetable-dish-1177421198.jpg?fit=700%2C700", name: "Item 1", description: "Description 1", quantity: 2, price: 10.99 },
    { image: "https://assets.bonappetit.com/photos/64ff37349874254bb1780d01/16:9/w_2560%2Cc_limit/20230908-POTLUCK-CLUB-0275%2520(1).jpg", name: "Item 2", description: "Description 2", quantity: 5, price: 10.99 }
  ];
 
const imageSrc=[
    {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/2560px-MasterCard_Logo.svg.png"},
    {src:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQawSGOgyd65kWlQXrvx6vYodsAcVSFzkbbzg&usqp=CAU"},
    {src:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Rupay-Logo.png/1200px-Rupay-Logo.png"}
]
const items=data.reduce((total,item)=>total+item.quantity,0)
const totalPrice=data.reduce((total,item)=>total+item.price,0)
const main= document.getElementById("main-container")
const firstDiv= document.createElement("div");firstDiv.setAttribute("id","first-div")
const secondDiv=document.createElement("div");secondDiv.setAttribute("id","second-div")

//styling part
main.style.cssText = "display: flex; justify-content:space-between; height: 84%; margin:10px 30px;padding:15px 20px;box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;border-radius:12px;background-color:#f9fafb";
firstDiv.style.cssText="width:60%; margin:10px";
secondDiv.style.cssText="width:30%;margin:5px;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;border-radius:12px;background-color:#565ABB;";


//first child component
const h3a=document.createElement("h3")
h3a.textContent="Shopping Continue"

const hr=document.createElement("hr")
const h3b=document.createElement("h3")
h3b.textContent="Shopping Cart"
const p1=document.createElement("p")
p1.textContent=`You have ${items} in your cart`

  const cards=document.createElement("div")
const childrenCard= data.map((el)=>{
    const card = document.createElement("div");
    card.innerHTML=
    `
      <div>
      <img src=${el.image}/>
      </div>
      <div>
       <h3>${el.name}</h3>
       <p>${el.description}</p>
      </div>
      <div>
      <p>-</p>
      <p>${el.quantity}</p>
      <p>+</p>
      </div>
      <div>
      <p>$${el.price}</p>
      <button>Delete</p>
    </div>`

    return card
})


firstDiv.appendChild(h3a)
firstDiv.appendChild(hr)
firstDiv.appendChild(h3b)
firstDiv.appendChild(p1)
childrenCard.forEach((card)=>{
    card.style.cssText="display:flex;align-items:center;gap:20px;margin:10px;width:90%;padding:0 10px ;box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;border-radius:12px;"
    const secondChild=card.querySelector("div:nth-child(2)")
    secondChild.style.cssText="width:40%;margin-left:10px;margin-right:10%"
    const thirdChild=card.querySelector('div:nth-child(3)')
    thirdChild.style.cssText="display:flex;justify-content:space-between;gap:10px;align-items:center;margin:10px;padding:10px"
    const fourthChild=card.querySelector('div:nth-child(4)')
    fourthChild.style.cssText="display:flex;justify-content:space-between;align-items:center;gap:5px;margin:10px;padding:10px";
    const image=card.querySelector("img")
    image.style.cssText="width:100px;height:15vh;border-radius:12px;padding:5px 0";
    const button = card.querySelector("button");
    button.style.cssText="height:5vh;background-color:#dc2626;color:#fff;border:none;padding:5px 10px;cursor:pointer;border-radius:5px"
    cards.appendChild(card)
})

firstDiv.appendChild(cards)
main.appendChild(firstDiv)
main.appendChild(secondDiv)


const div1= document.createElement("div")
const h3=document.createElement("h3")
const img2=document.createElement("img")
const div2=document.createElement("div")
const p2=document.createElement("p")
const div3=document.createElement("div")
const div4=document.createElement("div")
const hr2=document.createElement("hr")
const div5=document.createElement('div')
const div6=document.createElement("div")
const button=document.createElement("button")
h3.textContent="Card Details"
h3.style.cssText="color:white;"
img2.setAttribute("src","https://cdn.vectorstock.com/i/preview-1x/17/61/male-avatar-profile-picture-vector-10211761.jpg")

div1.style.cssText="display:flex;justify-content:space-between;align-items:center,width:100%;margin:10px";

img2.style.cssText="width:50px;height:50px;border-radius:50%"

p2.textContent="Card type"
p2.style.cssText="margin-top:0px;color:white;"
const imageCard= imageSrc.map((ele)=>{
    const card = document.createElement("div");
    card.innerHTML=
    `<img src=${ele.src} />`

    return card
})

imageCard.forEach((card) => {
    card.style.cssText="width:100px;text-align:center"
    const img=card.querySelector("img")
    img.style.cssText="width:50px"
    div3.appendChild(card);
  });

div3.style.cssText="display:flex;justify-content:space-between;align-items:center;gap:10px;margin-top:0"

div2.style.cssText="margin:10px;height:12vh";

const formElement=`<form style="border: none; padding: 10px; border-radius: 10px;background-color:#565ABB;">
<div style="margin-bottom: 10px;padding:5px">
  <label for="name" style="margin-right: 10px;;color:white">Name on the Card:</label>
  <input type="text" id="name" name="name" required placeholder="Name" style="padding: 5px; border: none; border-radius: 5px;" />
</div>
<div style="margin-bottom: 10px;padding:5px">
  <label for="cardNo" style="margin-right: 10px;;color:white">Card Number:</label>
  <input type="number" id="cardNo" name="cardNo" required placeholder="1111 2222 3333 4444" minlength="12" maxlength="12" style="padding: 5px; border: none; border-radius: 5px;" />
</div>
<div style="display: flex; margin-bottom: 10px; width:100px">
  <div style="flex: 1; margin-right: 10px;padding:5px">
    <label for="expire" style="margin-right: 10px;;color:white">Expiration Date (mm/yy):</label>
    <input type="text" id="expire" name="expire" required placeholder="mm/yy" pattern="^(0[1-9]|1[0-2])\/\d{2}$" style="padding: 5px; border: none; border-radius: 5px;" />
  </div>
  <div style="flex: 1;margin-right: 10px;padding:5px">
    <label for="cvv" style="margin-right: 10px;;color:white">CVV:</label>
    <input type="number" id="cvv" name="cvv" required placeholder="123" minlength="3" maxlength="3" style="padding: 5px; border: none; border-radius: 5px;width:70px " />
  </div>
</div>
</form>`
 
div4.innerHTML=formElement
div4.style.cssText="width:100% ;display:flex;justify-content:center;align-items:center"


div5.innerHTML=
`<div style="height:15%;margin:5px 10px;;color:white">
<div style="display: flex; justify-content: space-between;height:15px"><p>Subtotal</p><p>$${totalPrice}</p></div>
<div style="display: flex; justify-content: space-between;height:15px"><p>Shipping</p><p>$4</p></div>
<div style="display: flex; justify-content: space-between;height:15px"><p>Total(tax.inc)</p><p>$${totalPrice+4}</p></div>
</div>
`
button.textContent="Checkout"
button.style.cssText="width:300px;height:34px;margin-left:11%;border:none;border-radius:5px;background-color:#4DE1C1;color:white"
div1.appendChild(h3)
div1.appendChild(img2)
div2.appendChild(p2)
div2.appendChild(div3)

secondDiv.appendChild(div1)
secondDiv.appendChild(div2)
secondDiv.appendChild(div4)
secondDiv.appendChild(hr2)
secondDiv.appendChild(div5)
secondDiv.appendChild(button)