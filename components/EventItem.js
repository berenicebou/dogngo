// Components/EventItem.js

import React from 'react'

import { StyleSheet, View, Image } from 'react-native'
import { Container, Header, Content, Text, Icon, Button} from 'native-base';

class EventItem extends React.Component {
  render() {
    const events = this.props.event
    const displayDetailEvent = this.props.displayDetailEvent
    return (
        <Content > 
            <Button onPress={() => displayDetailEvent(events.id)}>
                <Text>{events.type}</Text>
            </Button>
        </Content>
    )
}
}

export default EventItem;
