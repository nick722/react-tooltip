import React, { Component } from 'react';
import { Manager, Target, Popper, Arrow } from 'react-popper';

 const PopperExample = () => (
    <Manager>
        <Target style={{ width: 120, height: 120, background: '#b4da55' }}>
            Target Box
        </Target>
        {/*<Popper placement="left" className="popper">*/}
            {/*Left Content*/}
            {/*<Arrow className="popper__arrow"/>*/}
        {/*</Popper>*/}
        <Popper placement="right" className="popper">
            Right Content
            <Arrow className="popper__arrow"/>
        </Popper>
    </Manager>
)

export default PopperExample;