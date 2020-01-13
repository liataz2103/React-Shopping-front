import React, { Component } from 'react'
import propTypes from 'prop-types';



export default class Cart extends Component {

    static propTypes = {
        cartItems: propTypes.array.isRequired,
    }
    
    render() {
        
        return(
            <div>
                <table className="table table-striped alignmiddle">
                    <tr>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Subtottal</td>
		            </tr>
					<tr>
                    
                        <td></td>
                        <td></td>
                        <td></td>
                  })}
                        
			        </tr>
	            </table>    
            </div>
        )
}
}

