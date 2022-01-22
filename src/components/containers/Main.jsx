import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styles from './Main.style'
import Contact from '../layouts/Contact'
import ShowContacts from '../layouts/ShowContacts'
import { addTask, deleteTask, statusTask } from '../../redux/actions/taskAction'

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
                    <Contact addContact={(cont) => { this.props.addContact(cont) }} />
                </div>
                {/* {this.props.taskItems.map((cont) => {
                    return ( */}
                <ShowContacts contacts={this.props.taskItems} deleteCon={(task) => { console.log(this.props.deleteContact(task)) }} compOrder={(task) => { this.props.completeOrder(task) }} />
                {/* )
                })} */}
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    taskItems: state.taskReducer
})

const mapDispatchToProps = (dispatch) => ({
    // Dispatch action without use of Redux-Thunk middleware
    addContact: (cont) => dispatch(addTask(cont)),
    deleteContact: (cont) => dispatch(deleteTask(cont)),
    completeOrder: (cont) => dispatch(statusTask(cont))
    // above ways dispatching from here insted of Actions unlike thunk
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)