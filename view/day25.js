/**
 * Day 25
 * custom refresh control
 */
'use strict';

import React,{
  Component,
  Image,
  StyleSheet,
  Text,
  TouchableHighlight,
  ActionSheetIOS,
  View
} from 'react-native';
import Util from './utils';
import Webbrowser from 'react-native-webbrowser';
import Icon from 'react-native-vector-icons/Ionicons';

export default class extends Component{
  _showShareActionSheet() {
    console.log(this.refs.browser.state.status);
    ActionSheetIOS.showShareActionSheetWithOptions({
      url: this.refs.browser.state.currentUrl,
      message: this.refs.browser.state.status,
    },
    (error) => console.log(error),
    (success, method) => {
    });
  }

  render() {
    return (
      <View style={{paddingTop:20,flex:1,backgroundColor:"#00ab6b"}}>
        <Webbrowser
          ref="browser"
          url="https://github.com"
          hideHomeButton={true}
          hideToolbar={false}
          hideAddressBar={false}
          hideStatusBar={true}
          hideActivityIndicator={true}
          foregroundColor={'#555'}
          backgroundColor={'#00ab6b'}
        />
        <TouchableHighlight underlayColor="transparent" onPress={() => this._showShareActionSheet()}>
          <Icon name="ios-upload-outline" style={styles.shareIcon} color="#268260" size={30}/>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  shareIcon:{
    position:"absolute",
    bottom:0,
    left: 170,
  }
});
