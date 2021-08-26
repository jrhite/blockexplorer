import React from "react";
import { Link as RouterLink } from "react-router-dom";

import PropTypes from "prop-types";

import { makeStyles } from "@material-ui/core/styles";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import DashboardIcon from "@material-ui/icons/Dashboard";

const useStyles = makeStyles({});

function ListItemLink(props) {
  const { icon, primary, to } = props;
  const classes = useStyles(props);

  const renderLink = React.useMemo(
    () =>
      React.forwardRef((itemProps, ref) => (
        <RouterLink to={to} ref={ref} {...itemProps} />
      )),
    [to]
  );

  return (
    <li>
      <ListItem button component={renderLink}>
        {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
        <ListItemText primary={primary} />
      </ListItem>
    </li>
  );
}

ListItemLink.propTypes = {
  icon: PropTypes.element,
  primary: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemLink to="/" primary="Dashboard" icon={<DashboardIcon />} />
    </ListItem>
    {/* <ListItem button>
      <ListItemLink to="/blocks" primary="Blocks" icon={<WidgetsIcon/>} />
    </ListItem>
    <ListItem button>
      <ListItemLink to="/transactions" primary="Transactions" icon={<BarChartIcon/>} />
    </ListItem>
    <ListItem button>
      <ListItemLink to="/accounts" primary="Accounts" icon={<PeopleIcon/>} />
    </ListItem> */}
  </div>
);
