import React from 'react';


const ListGroup = (props) => {

    return (
        <ul className="list-group">

            {props.items.map((item) => {
                return (
                    <li
                        onClick={() => { props.onItemSelect(item) }}
                        key={item._id}
                        className={(item === props.selectedItem) ? "list-group-item active " : "list-group-item"}
                    >

                        {item.name}


                    </li>
                )
            })}

        </ul>
    );
}

export default ListGroup;

//  <li className="list-group-item active" aria-current="true">An active item</li> 


