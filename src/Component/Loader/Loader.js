import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  loadingContainer: {
    width: '100%',
    display: 'flex',
    position:'fixed',
    zIndex:'1000',
    flex: '0 1 auto',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingBottom:'30px',
    backgroundColor: '#fff',
  },
  centered: {
    display: 'flex',
    flex: '0 1 auto',
    flexDirection: 'column',
    flexGrow: '1',
    flexShrink: '0',
    flexBasis: '33.33%',
    maxWidth: '33.33%',
    height: '200px',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:'auto',
    marginRight:'auto',
    paddingBottom:'30px'
  },
});

class Loader extends React.Component {
  render() {
    const { classes } = this.props;
    const loadText = this.props.loadText
      ? this.props.loadText
      : 'Loading Please wait!!';
    return (
      <div className={classes.loadingContainer}>
        <div className={classes.centered}>
          <CircularProgress color="secondary" />
          <br />
          <br />
          <Typography variant="headline">{loadText}</Typography>
        </div>
      </div>
    );
  }
}

Loader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Loader);