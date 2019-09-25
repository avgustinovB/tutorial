import React from 'react';
import "./App.css"

let ContactItem = (props) =>{
  return(
              <div className="contactItem">
          <img className="contact-image" src={props.photo}/>
          <div className="info" >
          <div className="name"> {props.name}</div>
          <div className="phone-number">{props.phonenumber}</div>
          </div>
          </div>
  )
  
  }


let Contacts = [
        {name:"Anthony",
          id:1,
      key:1,
      phonenumber:"+7276184249",
     photo:"https://upload.wikimedia.org/wikipedia/ru/9/94/Tony_Soprano_Portrait.jpg"
        },     
        {
            name:"Poly",
            id:2,
            key:2,
            phonenumber:"+7628534239",
            photo:"https://hips.hearstapps.com/esquireuk.cdnds.net/15/37/original/original-paulie-sopranos-2-43-jpg-ef00d469.jpg?crop=1xw:1xh;center,top&resize=768:*"
        },
        {
          name:"Carm",
          id:3,
          key:3,
          phonenumber:"+545568129",
          photo:"http://img2.bdbphotos.com/images/orig/1/x/1xchs7zeyjnox1hj.jpg?djet1p5k"
        },
        {
            name:"Meadow",
              id:4,
              key:4,
              phonenumber:"+4085639670",
              photo:"https://pbs.twimg.com/media/BmBMmLJIIAAtgf9.jpg"
        },
        {
            name:"Cristopher",
            id: 5,
            key:5,
            phonenumber:"+5367912312",
            photo:"https://gunaxin.com/wp-content/uploads/2011/04/christopher_moltisanti20_93900413.jpg",
        }
  
    ]
  
  
class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      displayed: Contacts
    }
  }
   handleSearch = (event) =>{
     const query = event.target.value.toLowerCase();
    const displayed = Contacts.filter((el)=>{
      const searchValue = el.name.toLowerCase();
      return searchValue.indexOf(query) !==-1;
    })
    this.setState({
      displayed: displayed
    })
    console.log(displayed)
   };
render(){
return(
  <div className="app" >
    <input   placeholder="enter name" onChange={this.handleSearch} className="search-field"></input>
    <ul className="contacts-list" >{
    this.state.displayed.map(el => 
      <ContactItem name={el.name}
       id={el.id}
       photo={el.photo}
       phonenumber={el.phonenumber} 
        key={el.key} / >
  )}
    </ul>
  </div>
)
}
}



export default App