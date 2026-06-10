import React from "react";
class InputFile extends React.Component {
    render() {
        
        return (
    
            <div className="row bg-light p-4 mb-4">
                <div className="row">
                    <div className="col-md-3">
                        <input
                            type="text"
                            value={this.props.person?.firstName}
                            name="firstName"
                            className="form-control"
                            placeholder="First Name"
                            onChange={this.props.oninputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            value={this.props.person?.lastName}
                            name="lastName"
                            className="form-control"
                            placeholder="Last Name"     
                            onChange={this.props.oninputChange}
                        />
                    </div>
                    <div className="col-md-3">
                        <input
                            type="text"
                            value={this.props.person?.age}
                            name="age"
                            className="form-control"
                            placeholder="Age"
                            onChange={this.props.oninputChange}
                        />
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-dark w-100" onClick={this.props.onAddClick}>Add</button>
                    </div>
                    <div className="col-md-1">
                        <button className="btn btn-warning w-100" onClick={this.props.onClearClick}>Clear</button>
                    </div>
                </div>
            </div>
        )
      }

}

export default InputFile;