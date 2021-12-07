/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);


{!this.state.showShare && this.state.showBgAnimation && (
                <View
                  style={{
                    position: 'absolute',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Animated.Image
                    style={{
                      height: hp('8.7714%'),
                      position: 'absolute',
                      width: hp('8.7714%'),
                      resizeMode: 'contain',
                      transform: [{rotate: spin}],
                    }}
                    // delay={0}
                    /* animation="rotate"
                   iterationCount="infinite"
                   duration={300}
                   easing="linear"
                   useNativeDriver={true}*/
                    source={{
                      uri: resources.colorRing + '?f=' + this.currentTime,
                    }}
                  />
                  <View
                    style={{
                      height: hp('6.7714%'),
                      width: hp('6.7714%'),
                      backgroundColor: 'white',
                      borderRadius: hp('6.7714%') / 2,
                    }}
                  />
                </View>
              )}
              {!this.state.showShare && this.state.showCoin && popup.content.type !== 'reward' &&
(
                <Image
                  style={{
                    height: hp('6%'),
                    width: hp('6%'),
                    borderRadius: hp('6%'),
                    position: 'absolute',
                  }}
                  source={
                    popup.type &&
                    popup.type === 'adque' &&
                    popup.data.player &&
                    adQue
                      ? {
                          uri: popup.data.player.profileImage
                            ? popup.data.player.profileImage
                            : this.props.resources.defaultProfilePicture +
                              '?t=' +
                              this.currentTime,
                        }
                      : popup.content &&
                        popup.content.data &&
                        popup.content.data.player
                      ? {
                          uri:
                            popup.content.data.player.profileImage.length > 0
                              ? popup.content.data.player.profileImage
                              : this.props.resources.defaultProfilePicture +
                                '?t=' +
                                this.currentTime,
                        }
                      : {
                          uri:
                            this.props.resources.points +
                            '?t=' +
                            this.currentTime,
                        }
                  }
                />
              )}
               {!this.state.showShare && this.state.showCoin && popup.content.type === 'reward'&& popup.content.reward.type === 'positiveReward' && (
                <Image
                  style={{
                    height: hp('6%'),
                    width: hp('6%'),
                    borderRadius: hp('6%'),
                    position: 'absolute',
                  }}
                  source={
                    popup.type &&
                    popup.type === 'adque' &&
                    popup.data.player &&
                    adQue
                      ? {
                          uri: popup.data.player.profileImage
                            ? popup.data.player.profileImage
                            : this.props.resources.defaultProfilePicture +
                              '?t=' +
                              this.currentTime,
                        }
                      : popup.content &&
                        popup.content.data &&
                        popup.content.data.player
                      ? {
                          uri:
                            popup.content.data.player.profileImage.length > 0
                              ? popup.content.data.player.profileImage
                              : this.props.resources.defaultProfilePicture +
                                '?t=' +
                                this.currentTime,
                        }
                      : {
                          uri:
                            this.props.resources.privacy +
                            '?t=' +
                            this.currentTime,
                        }
                  }
                />
              )}
                { popup.content.type === 'reward'&& popup.content.reward.type === 'negativeReward'  && (
                <Image
                  style={{
                    height: hp('6%'),
                    width: hp('6%'),
                    borderRadius: hp('6%'),
                    position: 'absolute',
                  }}
                  source={
                    
                      {uri: resources.close + '?f=' + this.currentTime,}
                  }
                />
              )}
