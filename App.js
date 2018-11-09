import React from 'react';
import { Text, View, StatusBar } from 'react-native';
import CardStackStyleInterpolator from "react-navigation-stack/dist/views/StackView/StackViewStyleInterpolator"
import { Font } from 'expo';
import { Router, Scene, Tabs, Tab, Modal } from 'react-native-router-flux';
import { connect, Provider } from 'react-redux';
import configureStore from './store/configureStore';
import { Ionicons } from '@expo/vector-icons';

import Home from './screens/home';
import Register from './screens/register';
import RegisterVerify from './screens/registerVerify';
import RegisterComplete from './screens/registerComplete';
import Login from './screens/login';

import Wallets from './screens/wallets'
import WalletsNavBar from './screens/wallets/navBar'
import WalletOverview from './screens/wallet/overview'
import WalletBuy from './screens/wallet/buy'
import WalletPaymentOverview from './screens/wallet/paymentOverview'
import WalletPaymentOverviewNavBar from './screens/wallet/paymentOverviewNavBar'
import WalletPaymentThankYou from './screens/wallet/paymentThankYou'
import WalletPaymentThankYouNavBar from './screens/wallet/paymentThankYouNavBar'
import WalletSell from './screens/blank'
import WalletReceive from './screens/blank'
import WalletNavBar from './screens/wallet/navBar'
import Contacts from './screens/contacts/'
import ContactsNavBar from './screens/contacts/navBar'
import Contact from './screens/contact/'
import ContactNavBar from './screens/contact/navBar'
import InvestmentsOverview from './screens/investments/overview'
import InvestmentsPools from './screens/pools'
import InvestmentsPool from './screens/pool'
import InvestmentsPoolNavBar from './screens/pool/navBar'
import InvestmentsStakes from './screens/blank'
import InvestmentsRewards from './screens/blank'
import InvestmentsICOs from './screens/blank'
import InvestmentsNavBar from './screens/investments/navBar'
import Nuke from './screens/blank'
import Drawer from './screens/drawer'
import DrawerNavBar from './screens/drawer/navBar'
import QuickStart from './screens/quickStart'
import QuickStartNavBar from './screens/quickStart/navBar'

const store = configureStore()
const RouterWithRedux = connect()(Router);

const WalletIcon = ({ selected, title}) => {
  return (
    <Ionicons name={'md-trash'} size={28} color="#fff" />
  )
}
const ExchangeIcon = ({ selected, title}) => {
  return (
    <Ionicons name={'md-cube'} size={28} color="#fff" />
  )
}
const InvestmentIcon = ({ selected, title}) => {
  return (
    <Ionicons name={'md-flower'} size={28} color="#fff" />
  )
}
const NukeIcon = ({ selected, title}) => {
  return (
    <Ionicons name={'md-glasses'} size={28} color="#fff" />
  )
}
const NoIcon = ({ selected, title}) => {
  return (
    <Ionicons name={'md-glasses'} size={0} color="#333" />
  )
}

export default class App extends React.Component {

  state = {
    fontLoaded: false
  }

  async componentDidMount() {
    StatusBar.setHidden(true);
    await Font.loadAsync({
      'bebas-neue-regular': require('./assets/fonts/BebasNeue.ttf'),
      "abel-regular": require('./assets/fonts/abel-regular.ttf'),
    });
    this.setState({ fontLoaded: true });
    Text.defaultProps.style = { fontFamily: 'abel-regular' }
  }
  render() {

    if(this.state.fontLoaded == false) {
      return <View><Text>loading</Text></View>
    }

    return (
      <Provider store={store}>
        <RouterWithRedux>
          <Modal>
            <Scene key="root" hideNavBar>
              <Scene key="home" component={Home} initial />
              <Scene key="register" component={Register} />
              <Scene key="registerVerify" component={RegisterVerify} />
              <Scene key="registerComplete" component={RegisterComplete} />
              <Scene key="login" component={Login} />
              <Tabs
                lazy
                key='main'
                wrap
                activeBackgroundColor={'#333'}
                inactiveBackgroundColor={'#333'}
                activeTintColor={'#fff'}
                tabBarStyle={{
                  backgroundColor: '#333',
                  height: 70,
                  padding: 5
                }}
              >
                <Scene icon={WalletIcon} tabBarLabel='WALLETS' initial >
                  <Scene key="wallets" component={Wallets} navBar={WalletsNavBar} initial />
                  <Tabs
                    key='wallet'
                    wrap
                    activeBackgroundColor={'#333'}
                    inactiveBackgroundColor={'#333'}
                    activeTintColor={'#fff'}
                    navBar={WalletNavBar}
                    tabBarPosition={'top'}
                    tabBarStyle={{
                      backgroundColor: '#333',
                      height: 50
                    }}
                    labelStyle={{
                      fontSize: 10
                    }}
                    indicatorStyle={{
                      backgroundColor: '#fff'
                    }}
                  >
                    <Scene key="wallet_overview" tabBarLabel='OVERVIEW' hideNavBar component={WalletOverview} icon={NoIcon} initial />
                    <Scene key="wallet_buy" tabBarLabel='BUY' hideNavBar component={WalletBuy} icon={NoIcon} />
                    <Scene key="wallet_sell" tabBarLabel='SELL' hideNavBar component={WalletSell} icon={NoIcon}  />
                    <Scene key="wallet_receive" tabBarLabel='RECEIVE' hideNavBar component={WalletReceive} icon={NoIcon}  />
                  </Tabs>
                </Scene>
                <Scene icon={ExchangeIcon} tabBarLabel='EXCHANGE' >
                  <Scene key="contacts" component={Contacts} navBar={ContactsNavBar} initial />
                  <Scene key="contact" component={Contact} navBar={ContactNavBar} />
                </Scene>
                <Scene icon={InvestmentIcon} tabBarLabel='INVESTMENTS' >
                  <Tabs

                    key='investment'
                    wrap
                    activeBackgroundColor={'#333'}
                    inactiveBackgroundColor={'#333'}
                    activeTintColor={'#fff'}
                    navBar={InvestmentsNavBar}
                    tabBarPosition={'top'}
                    tabBarStyle={{
                      backgroundColor: '#333',
                      height: 50
                    }}
                    labelStyle={{
                      fontSize: 10
                    }}
                    indicatorStyle={{
                      backgroundColor: '#fff'
                    }}
                    >
                    <Scene key="investments_overview" tabBarLabel='OVERVIEW' hideNavBar component={InvestmentsOverview} icon={NoIcon} initial />
                    <Scene tabBarLabel='POOLS' hideNavBar icon={NoIcon} >
                      <Scene key="investments_pools" component={InvestmentsPools} navBar={InvestmentsNavBar} initial/>
                      <Scene key="investments_pool" component={InvestmentsPool} navBar={InvestmentsPoolNavBar} />
                    </Scene>
                    <Scene key="investments_stakes" tabBarLabel='STAKES' hideNavBar component={InvestmentsStakes} icon={NoIcon}  />
                    <Scene key="investments_rewards" tabBarLabel='REWARDS' hideNavBar component={InvestmentsRewards} icon={NoIcon}  />
                    <Scene key="investments_icos" tabBarLabel='ICOs' hideNavBar component={InvestmentsICOs} icon={NoIcon}  />
                  </Tabs>
                </Scene>
                <Scene key="nuke" component={Nuke} icon={NukeIcon} tabBarLabel='NUKE' title='NUKE' />
              </Tabs>
            </Scene>
            <Scene key="quickStart" component={QuickStart} navBar={QuickStartNavBar} />
            <Scene key="paymentOverview" component={WalletPaymentOverview} navBar={WalletPaymentOverviewNavBar} />
            <Scene key="paymentThankYou" component={WalletPaymentThankYou} navBar={WalletPaymentThankYouNavBar} />
            <Scene key="drawer" component={Drawer} drawer={true} navBar={DrawerNavBar} />
          </Modal>
        </RouterWithRedux>
      </Provider>
    )
  }
}
