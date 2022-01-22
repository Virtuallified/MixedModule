import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

const Alerts = ({ alerts }) => alerts !== null && alerts.length > 0 && alerts.map(alert => (
    <div key={alert.id} className={`alert alert-${alert.alertType}`} role="alert">
        {alert.msg}
    </div>
    // console.log(alert.msg)
))

Alerts.propTypes = {
    alerts: PropTypes.array.isRequired
}

const mapStateToProps = state => ({
    alerts: state.alertReducer
})

// const mapDispatchToProps = {

// }

export default connect(mapStateToProps)(Alerts)
