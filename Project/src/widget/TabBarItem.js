import React, {Component} from 'react';
import { Image } from 'react-native';

type Props = {
    normalImage:any,
    selectedImage:any,
    focused:boolean,

}
class TabBarItem extends Component {
    render() {
        let {normalImage, selectedImage, focused} = this.props
        return (
            <Image
                source={focused ? selectedImage : normalImage}
                style={{width:30, height:30}}
            />
        );
    }
}

export default TabBarItem
