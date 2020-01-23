
import React from 'react'

import { StyleSheet, View, Image, Dimensions } from 'react-native'
import { Container, Header, Content, Text, Icon, Button, List, ListItem} from 'native-base';
import { Col, Row, Grid } from "react-native-easy-grid";


export default class TabPhoto extends React.Component {
  render() {
    const rows = 3;
    const cols = 2;
    const marginHorizontal = 4;
    const marginVertical = 4;
    const width = (Dimensions.get('window').width / cols) - (marginHorizontal * (cols + 1));
    const height = (Dimensions.get('window').height / rows) - (marginVertical * (rows + 1));

    const photos = this.props.photos
        return (
            <Content>
                <Grid>
                <List
                    numColumns={3}
                    dataArray={photos} 
                    renderRow={(photo) =>
                        <Col>
                            <Image
                            style={styles.image}
                            source={photo.photo}/>
                        </Col>
                    }>
                </List>
                </Grid>
            </Content>
        )
    }
}

const styles = StyleSheet.create({
    image: {
        width: (Dimensions.get('window').width / 3) - 10,
        height: 120,
        margin: 5,
    },
})
