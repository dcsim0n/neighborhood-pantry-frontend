import React from 'react';
import {Popover, FormControl, Button} from 'react-bootstrap'


export const NewPiPopover = (
    <Popover id="popover-basic" title="New Item Popover">
        Lets make a new item
        <FormControl type="text" placeholder="What is it?" />
        <FormControl type="number" placeholder="How much is there?" />
        <FormControl type="text" placeholder="Unit size: bag/box/cup/ounce/etc.." />
        <Button>New</Button>
    </Popover>
)