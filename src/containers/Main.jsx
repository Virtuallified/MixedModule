import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Main.style'
import Contact from '../components/Contact'
import ShowContacts from '../components/ShowContacts'
import { addTask, deleteTask, statusTask } from '../redux/actions'

let containerStyle = {
    textAlign: 'center', 
    paddingTop: "1em"
}

export class Main extends Component {
    // static propTypes = {
    //     prop: PropTypes
    // }

    render() {
        // console.log("redux store: " + JSON.stringify(this.props.taskItems))
        // redux store data
        console.log(this.props.taskItems)
        return (
            <>
                <div style={styles.appContainer}>
                    <div style={containerStyle}>
                        Data will be saved in redux store via reducers and action payload and will be fetched somewhere else.
                    </div>
                    <Contact addContact={(cont) => {this.props.addContact(cont)}}/>
                </div>
                {/* {this.props.taskItems.map((cont) => {
                    return ( */}
                        <ShowContacts contacts={this.props.taskItems} deleteCon={(task) => {console.log(this.props.deleteContact(task))}} compOrder={(task) => {this.props.completeOrder(task)}} />
                    {/* )
                })} */}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    taskItems: state.taskItems
})

const mapDispatchToProps = (dispatch) => ({
    addContact: (cont) => dispatch(addTask(cont)),
    deleteContact: (cont) => dispatch(deleteTask(cont)),
    completeOrder: (cont) => dispatch(statusTask(cont))
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
