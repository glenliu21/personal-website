import React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import HarvardIcon from "./HarvardIcon";
import OjoIcon from './OjoIcon';
import useMediaQuery from '@mui/material/useMediaQuery';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography component="span">{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function HomeTabBar() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const mdOnly = useMediaQuery('(min-width: 992px) and (max-width:1300px)');
    const smOnly = useMediaQuery("(max-width: 450px)");

    return (
        <div className="home-tab-bar">
            <h1>What I'm Up To</h1>
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: mdOnly ? "block" : (smOnly ? "block" : "flex") }}
            >
                <Tabs
                    orientation={mdOnly ? "horizontal" : (smOnly ? "horizontal" : "vertical")}
                    value={value}
                    onChange={handleChange}
                    TabIndicatorProps={{
                        style: {
                            backgroundColor: "#1D1D1D"
                        }
                    }}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: mdOnly ? 0 : (smOnly ? 0 : 1), borderColor: "#7F8487" }}
                >
                    <Tab disableRipple icon={<HarvardIcon />} {...a11yProps(0)} />
                    <Tab disableRipple icon={<OjoIcon />}  {...a11yProps(1)} />
                </Tabs>
                <TabPanel className="tab-desc" value={value} index={0}>
                    <h1>Undergrad @ <a className="tab-desc-title" href="https://college.harvard.edu/" target="_blank" rel="noopener noreferrer">Harvard College</a></h1>
                    <h2>Class of 2025</h2>
                    <ul>
                        <li>Studying CS and Philosophy</li>
                        <li>Co-social chair for <a className="tab-desc-link" href="https://www.harvardcsa.org/" target="_blank" rel="noopener noreferrer">
                            HRCSA
                        </a>
                        </li>
                        <li>Sourcing principal for <a className="tab-desc-link" href="https://www.harvardcap.org/" target="_blank" rel="noopener noreferrer">
                            HUCP
                        </a>
                        </li>
                    </ul>
                </TabPanel>
                <TabPanel className="tab-desc" value={value} index={1}>
                    <h1>Data Science Intern @ <a className="tab-desc-title" href="https://ojolabs.com/" target="_blank" rel="noopener noreferrer">OJO Labs</a></h1>
                    <h2>June 2022-August 2022</h2>
                    <ul>
                        <li>Developed a location embedding model using the Skip-Gram Word2Vec algorithm trained on user clickstream data (see "Projects")</li>
                    </ul>
                </TabPanel>
            </Box>
        </div>
    );
}


