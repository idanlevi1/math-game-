import React, { Component } from 'react'
//import { connect } from 'react-redux'
import SplashView from './SplashView'
//import {authorize,splash} from '../../store/modules/user'
//import { getInstitutes } from '../../store/modules/Institutes'
import AppNav from '../../nav/AppNav'
//import RegisterNav from '../../nav/RegisterNav'

class Splash extends Component{
    state = {splash: true}
    async componentDidMount(){
        //this.props.splash(true)
//        await this.props.getInstitutes()

        setTimeout( () => this.setState({splash:false}), 2000)
    }

    render(){
        // const {status,userStatus} = this.props
        // if (status){
        //     if (userStatus=='user')
        //         return (
        //             <AppNav />
        //         )
        //     if (userStatus=='no_user')
        //         return (
        //             <RegisterNav/>
        //         )
        // }
        return (
            this.state.splash ?
            <SplashView/>      
            :
            <AppNav/>   
        )
    }
}

// const mapStateToProps = state => ({
//     status: state.user.status,
//     userStatus: state.user.authStatus
// })
export default Splash
//export default connect(mapStateToProps,{authorize,splash,getInstitutes})(Splash)