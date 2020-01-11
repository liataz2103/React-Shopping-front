import React, { Component } from 'react'

export default class Cart extends Component {
    render() {
        return (
            <div>
                <table className="table table-striped alignmiddle">
                    <tr>
                        <td>Image</td>
                        <td>Title</td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtottal</td>
		            </tr>
					<tr>
                        <td><img class="cpi" src="<%= product.image %>" alt=""></td>
                        <td></td>
                        <td></td>
                        <td></td>
				        <td></td>
			        </tr>
			        <!-- create a new row with the total -->
			        <tr>
					    <td colspan="6" align="right"><b>Total: </b></td>
			        </tr>
			        <tr>
					    <td colspan="5" align="right">
							<a class="clearcart btn btn-danger" href="/cart/clear">Clear cart</a>
						</td>
						<td colspan="5" align="right">
							<a class="btn btn-primary buynow" href="#">Buy now</a>
						</td>
			        </tr>   
	            </table>    
            </div>
        )
    }
}
