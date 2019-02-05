import React, {Component} from "react";

class UserTable extends Component{
    constructor(props){
        super(props);

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
                            <button onClick={()=>this.props.handleUpdateData({user,edit:true})} className="button muted-button">Edit</button>
                            <button onClick={()=>this.props.handleDeleteData(user)} className="button muted-button">Delete</button>
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