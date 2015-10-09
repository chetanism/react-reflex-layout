# React Reflex Layout
A simple implementation for flexbox components.

### Installation
npm i react-reflex-layout [--save]

### Example

```js
import React, { PropTypes, Component } from 'react';
import { FlexBox, FlexRow, FlexColumn, FlexItem, Spacer, asFlexItem } from 'react-reflex-layout';

import MyComponentHeader from '../MyComponentHeader';
import MyComponentFooter from '../MyComponentFooter';
import MySideBar from '../MySideBar';
import MyMainContent from '../MyMainContent';

const MySideBarAsFlexItem = asFlexItem()(MySideBar);

class MyComponent extends Component {

    render() {
        return (
            <FlexColumn flexBoxClass="MyComponent">
                <FlexItem flexItemClass="MyComponent-Header">
                    <MyComponentHeader />
                </FlexItem>
                
                <FlexItem flexItemClass="MyComponent-Content">
                    <FlexBox flexDirection="row">
                    
                        <MySideBarAsFlexItem flexBasis="20%" flexGrow={0} />
                                
                        <FlexItem>
                            <MyMainContent />
                        </FlexItem>
                        
                    </FlexRow>
                </FlexItem>
                
                <FlexItem flexItemClass="MyComponent-Footer">
                    <MyComponentFooter />
                </FlexItem>
            </FlexColumn>
        );
    }
}
```

### Available Components
1. FlexBox - generic flexbox container
2. FlexRow - flexbox row container
3. FlexColumn - flexbox column container
4. FlexItem - flex item component
5. Spacer - an empty flex item

### Available decorators
1. asFlexItem - Wraps passed component in a flex item.


Refer code to see available properties for each component.


### Scripts
1. lint - npm run lint
2. test - npm test
3. build - npm run build


##### Warning
:warning: This module is pretty new and might have some bugs, please [file an issue](https://github.com/chetanism/react-reflex-layout/issues)
if you encounter any problems.