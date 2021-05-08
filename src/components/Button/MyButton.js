import React from 'react'
import {TouchableOpacity, Text} from 'react-native'
import PropTypes from 'prop-types'

const MyButton = props=>(
    <TouchableOpacity onPress={props.myOnPress}>
<Text>
{props.myTitle}

</Text>

    </TouchableOpacity>
)


export default MyButton 

MyButton.propTypes={
myTitle: PropTypes.string.isRequired,
myOnPress: PropTypes.func 

}

MyButton.defaultProps = {
    myTitle:'Good'

}