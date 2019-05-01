import React from 'react';
import {Form, Popover, FormControl, Button} from 'react-bootstrap'


export const NewPiPopover = (props)=>(
    <Popover {...props} id="popover-basic" title="New Item Popover">
        Lets make a new item
        <Form onSubmit={props.handleSubmit}>
            <FormControl name="name" type="text" placeholder="What is it?" />
            <FormControl name="quantity" type="number" placeholder="How much is there?" />
            <FormControl name="unit" type="text" placeholder="Unit size: bag/box/cup/ounce/etc.." />
            <Button type="submit" >New</Button>
        </Form>
    </Popover>
)

export const NewPrPopover = (props) => (
    <Popover {...props} id="popover-basic" title="New Request Popover">
        Lets make a new item
        <Form onSubmit={props.handleSubmit}>
            <FormControl name="name" type="text" placeholder="What is it?" />
            <FormControl name="quantity" type="number" placeholder="How much is there?" />
            <FormControl name="unit" type="text" placeholder="Unit: bag/box/cup/ounce/etc.." />
            <Button type="submit">New</Button>
        </Form>
    </Popover>
)

// export const PrInfoPopover = (props) =>(
//     <Popover {...props} id="popover-basic" title="Request Info">
//         <Form onSubmit={props.handleSubmit}>
//             <Table striped bordered hover>
//                 <tr>
//                     <th>Offered</th>
//                     <th>Who?</th>
//                     <th>Date</th>
//                 </tr>
//                 {/*Put more rows here */}
//                     <tr>
//                         <td colspan="2">
//                             <FormControl type="text" placeholder="Your offer?" />
//                         </td> 
//                         <td>
//                             <Button type="submit">+</Button>
//                         </td>
//                     </tr>
//             </Table>
//         </Form>
//     </Popover>
// )

