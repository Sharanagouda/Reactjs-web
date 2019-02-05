import React, {Component} from "react";
import "./UserTable.css";

class UserTable extends Component{
    constructor(props){
        super(props);

    }
// so default is this style:
editBtnStyle = {
    backgroundColor: '#008CBA',
    color:'white'
}
// so default is this style:
deleteBtnStyle = {
    backgroundColor: '#f44336',
    color:'white'
}
    render(){
        const {user} = this.props;

        return(
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Contact No</th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                {user.length>0?(
                    user.map(user=>(
                        <tr key={user.id} index={user.id}>
                        <td>{user.name}</td>
                        <td>{user.contactno}</td>
                        <td>
                            <button onClick={()=>this.props.handleUpdateData({user,edit:true})}   style={this.editBtnStyle} className="button muted-button">Edit</button>
                            &nbsp;&nbsp;&nbsp; 
                            <button onClick={()=>this.props.handleDeleteData(user)}   style={this.deleteBtnStyle} className="button muted-button">Delete</button>
                        </td>
                    </tr>
                    ))
                ) : (
                    <tr>
                        <td>No Users found</td>
                    </tr>
                )

                }
                   
                </tbody>
            </table>
        )
    }
}

export default UserTable;