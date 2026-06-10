import React from "react";
import InputFile from "./inputfile";
import Peopledisplay from "./Peopledisplay";

class PeopleLister extends React.Component {
    state = {
        person: {firstName: "", lastName: "", age: 0},
        people: []
    }
    oninputChange = person => {
        const copy = {...this.state.person};
        copy[person.target.name] = person.target.value;
        this.setState({ person: copy });
    }


onClearClick = () => {
    console.log("Clearing people list");
this.setState({people: [], person: {firstName: "", lastName: "", age: ""}})
}
onAddClick = () => {
    console.log("Adding person to list");
const copy = [...this.state.people];
copy.push(this.state.person);
this.setState({people: copy, person: {firstName: "", lastName: "", age: ""}})
}
render () {
return (
    <div className="container mt-5">
        <InputFile 
            oninputChange={this.oninputChange}
            onAddClick={this.onAddClick}
            onClearClick={this.onClearClick}
            person={this.state.person}
        />
        <Peopledisplay people={this.state.people} />
    
    </div>
)

}
}

export default PeopleLister;