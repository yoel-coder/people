import React from 'react';
import InputFile from './inputfile';

class Peopledisplay extends React.Component {


    className = age => {
        
        return age > 65 ? "table-danger" : "";
        

    }

    getContent = () => {
        if (this.props.people.length === 0) {
            return <h1>No people to display</h1>
        }
        return <table className='table table-striped'>
            <thead> 
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                </tr>
            </thead>
            <tbody>
                {this.props.people.map((person) => (
                    <tr className={this.className(person.age)}>
                        <td>{person.firstName}</td>
                        <td>{person.lastName}</td>
                        <td>{person.age}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    }

    render() {
        
        return (
            <div className="row mt-5">
                <div className="col-md-12">
                    {this.getContent()}
                </div>
            </div>
        )
    }
}

export default Peopledisplay;