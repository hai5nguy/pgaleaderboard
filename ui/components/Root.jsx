import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
    root: {
    },
};

class Root extends React.Component {
    render() {
        const { classes  } = this.props

        return (
            <div className={classes.root}>
                i am root
            </div>
        )
    }
}
export default Root
