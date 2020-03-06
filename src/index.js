import React from "react";
import ReactDOM from "react-dom";
import "./style.css"
import App from "./components/App";
import Header from "./Header";
import SideBox from "./SideBox";
let id = 0;

let source = [
    {
        name : "Open Peeps",
    description : "A hand-drawn illustration library.",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/719fe138-8598-46ec-8259-ef17ba46c0c2?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },

    {
        name : "InVideo",
    description : "Create insanely good social videos in under 10 mins",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/9093cadf-bc92-45d3-97ea-a74d41455587?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },

    {
        name : "Phone Call Translator",
    description : "Translates your voice calls into 29 languages in real-time",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/76ee2898-6c6c-4d57-86c3-f42b961a97dc?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },
    {
        name : "Datawaves",
    description : "Add analytics to anything",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/d58fc63b-7ddf-4e5b-9a29-fb2f1162a05e?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },

    {
        name : "Makerlog 3.0",
    description : "The productive community for makers and indie hackers. ✨",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/00cc62e7-fbbf-40b4-be56-9a9d58579a47?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },
    {
        name : "SaaS Landing Page",
    description : "The best SaaS landing page examples for design inspiration.. ✨",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/ec8385c2-d317-4cf6-ac1a-e20c8d8f6b89?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },
    {
        name : "Selfone",
    description : "Free template for PowerPoint, Keynote and Google Slides",
    tags : [
        "DESIGN TOOLS",
        "PRODUCTIVITY"
    ],
    image : "https://ph-files.imgix.net/3b8fff05-5ac3-4e2b-b902-4606c677d40a?auto=format&auto=compress&codec=mozjpeg&cs=strip&w=80&h=80&fit=crop",
    count : 0,
    id : id++
    },
]
console.log(id);

let Card = (props)=>{
    
    return (
            <div className="card">
                <img src={props.image} />
                <div className="items">
                    <h4 className="cardName">{props.name}</h4>
                    <p className="cardPara">{props.description}</p>
                    {props.tags.map(tag=><button className="tagBtn"> {tag} </button>)}
                </div>
                <div className="counter">
                    <button onClick={()=> props.updateCount(props.id)} className="counterBtn">          {props.count}
                    </button>
                </div>
            </div>
    )
}
class Cards extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            source : source,
            textData : "",
            name : "",
            description : "",
            image : ""
        }
        //this.handelForm = this.handelForm.bind(this);
    //this.createCard = this.createCard.bind(this);
    }
    
    updateCount = (id) => {
        let updatedData = this.state.source.map(p =>{
            if(p.id === id){
                p.count = p.count+1;
            }
            return p;
        })
        this.setState({source : updatedData});
    }
    editText = (event) => {
        this.setState({textData : event.target.value});
    }
    handelForm = (event) =>{
        this.setState({
            [event.target.name] : event.target.value,
        })
    }
    createCard =(event)=>{
        event.preventDefault();
        let k = this.state
        let newobj = {image: k.image, name: k.name, description: k.description}
        newobj.tags = ['hello','wo'];
        newobj.count = 0;
        this.setState({source : this.state.source.concat(newobj)}) 
    }
    render(){
        return (
            <div>
                <div className="headerBox">
                     <div className="container">
                         <Header />
                     </div>
                </div>
                 <div className="container">
                 
                 <div className="cardContainer">
                     <div className="cardDiv">
                         <h2 className="cardContainerHeading">Popular this month</h2>
                         <h3 className="cardContainerHeading2">Yesterday</h3>
                         {this.state.source.map(details =><Card {...details} updateCount={this.updateCount} />)}
                     </div>
                     <div className="sideBox">
                         <SideBox handelForm={this.handelForm} createCard={this.createCard} />
                     </div>
                 </div>
                 
             </div>
            </div>
         )
    }
    
}

ReactDOM.render(<Cards />, document.getElementById("root"));
