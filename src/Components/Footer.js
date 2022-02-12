import React from 'react';
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import GoogleDownlode from '../images/GoogleDownload.svg';
import AppStoreDownload from '../images/AppStoreDownload.svg';
import Grid from '@mui/material/Grid';
import SvgIcon from '@material-ui/core/SvgIcon';

const useStyle =  makeStyles({

    ContainerBox : {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1176px',
    }, 

    menuStyle : {
        boxShadow: "inherit",
        backgroundColor:'transparent',
    }, 

    linkStyle :{
        color: "#9c9cac",
        textDecoration:"none",
        marginRight: "24px",
        fontSize: '12px',
        fontWeight: '500',
        lineHeight: '18px',
    },

    toolbar : {
        paddingLeft: "0",
        paddingRight:'0',
    }, 

});

const Footer = () => {
    const classes = useStyle();
    return (
       
        <div style={{ backgroundColor: '#000'}} >
                <Container className={classes.ContainerBox} style={{paddingTop:'32px' , paddingBottom:'32px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={3}>
                            <Typography className='menuTitle' variant="h3">
                            Language teachers
                            </Typography>
                            <Link className='footerLink' to="/">English teachers</Link>
                            <Link className='footerLink' to="/">Chinese (Mandarin) teachers</Link>
                            <Link className='footerLink' to="/">French teachers</Link>
                            <Link className='footerLink' to="/">Spanish teachers</Link>
                            <Link className='footerLink' to="/">Portuguese teachers</Link>
                            <Link className='footerLink' to="/">German teachers</Link>
                            <Link className='footerLink' to="/">Japanese teachers</Link>
                            <Link className='footerLink' to="/">Korean teachers</Link>
                            <Link className='footerLink' to="/">Arabic teachers</Link>
                            <Link className='footerLink' to="/">Hindi teachers</Link>
                            <Link className='footerLink' to="/">Italian teachers</Link>
                            <Link className='footerLink' to="/">Russian teachers</Link>
                            <Link className='footerLink' to="/">Other teachers</Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='menuTitle' variant="h3">
                            Learn a Language
                            </Typography>
                            <Link className='footerLink' to="/">Learn English</Link>
                            <Link className='footerLink' to="/">Learn Chinese (Mandarin)</Link>
                            <Link className='footerLink' to="/">Learn French</Link>
                            <Link className='footerLink' to="/">Learn Spanish</Link>
                            <Link className='footerLink' to="/">Learn Portuguese</Link>
                            <Link className='footerLink' to="/">Learn German</Link>
                            <Link className='footerLink' to="/">Learn Japanese</Link>
                            <Link className='footerLink' to="/">Learn Korean</Link>
                            <Link className='footerLink' to="/">Learn Arabic</Link>
                            <Link className='footerLink' to="/">Learn Hindi</Link>
                            <Link className='footerLink' to="/">Learn Italian</Link>
                            <Link className='footerLink' to="/">Learn Russian</Link>
                            <Link className='footerLink' to="/">Learn More Languages</Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='menuTitle' variant="h3">
                            Teaching
                            </Typography>
                            <Link className='footerLink' to="/">Become a teacher</Link>
                            <Link className='footerLink' to="/">Teaching Code of Conduct</Link>
                            <Typography className='menuTitle' variant="h3" style={{marginTop:'24px', marginBottom:'16px'}}>
                            More
                            </Typography>
                            <Link className='footerLink' to="/">italki Apps</Link>
                            <Link className='footerLink' to="/">Refer a Friend and get $15</Link>
                            <Link className='footerLink' to="/">Buy a Gift Card</Link>
                            <Link className='footerLink' to="/">italki Business</Link>
                            <Link className='footerLink' to="/">Partnership Program</Link>
                            <Link className='footerLink' to="/">Affiliate Program</Link>
                            <Link className='footerLink' to="/">italki Language Test</Link>
                            <Link className='footerLink' to="/">italki Language Challenge</Link>
                            <Link className='footerLink' to="/">Language Hacking</Link>
                            <Link className='footerLink' to="/">italki Blog</Link>
                        </Grid>
                        <Grid item xs={3}>
                            <Typography className='menuTitle' variant="h3">
                            italki Apps
                            </Typography>
                            <Link className='footerLink' to="/">
                                <img src={GoogleDownlode}/>
                            </Link>
                            <Link className='footerLink' to="/">
                                <img src={AppStoreDownload}/>
                            </Link>
                            <Typography className='menuTitle' variant="h3" style={{marginTop:'24px', marginBottom:'16px'}}>
                            Follow us
                            </Typography>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <path
                                d="M24 12c0-6.627-5.373-12-12-12S0 5.373 0 12c0 5.99 4.388 10.954 10.125 
                                11.854V15.47H7.078V12h3.047V9.356c0-3.007 1.791-4.668 4.533-4.668 1.313 
                                0 2.686.234 2.686.234v2.953H15.83c-1.491 0-1.956.925-1.956 1.874V12h3.328l-.532 
                                3.469h-2.796v8.385C19.612 
                                22.954 24 17.99 24 12z"
                                fill="#9C9CAC"/>
                            <path
                                d="M16.671 15.469L17.203 12h-3.328V9.749c0-.949.465-1.874 
                                1.956-1.874h1.513V4.922s-1.374-.234-2.686-.234c-2.742 0-4.533 
                                1.66-4.533 4.668V12H7.078v3.469h3.047v8.385a12.084 12.084 0 003.75 
                                0V15.47h2.796z"
                                fill="#313140"/>
                            </SvgIcon>
                            </Link>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <path
                                d="M18.257 9.84c.175 3.89-2.727 8.229-7.863 8.229a7.835 7.835 0 01-4.24-1.243 5.562 5.562 0 004.096-1.145 2.77 2.77 0 01-2.584-1.923c.432.084.859.06 1.248-.046a2.77 2.77 0 01-2.218-2.748c.373.207.8.332 1.253.346a2.77 2.77 0 01-.856-3.692 7.854 7.854 0 005.701 2.89 2.769 2.769 0 014.714-2.523 5.56 5.56 0 001.757-.672 2.772 2.772 0 01-1.216 1.53 5.558 5.558 0 001.589-.435 5.609 5.609 0 01-1.381 
                                1.432zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
                                fill="#9C9CAC"/>
                            </SvgIcon>
                            </Link>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <circle cx="12" cy="12" r="12" fill="#9C9CAC"></circle>
                            <path
                                d="M11.998 6.004c-1.629 0-1.833.007-2.473.036-.638.029-1.074.13-1.456.279a2.94
                                2.94 0 00-1.062.692 2.94 2.94 0 00-.692 1.062c-.148.381-.25.817-.279 
                                1.456-.03.64-.036.844-.036 2.473s.007 1.833.036 2.473c.03.638.13 
                                1.074.279 1.456.153.394.358.729.692 1.062.333.334.668.539 
                                1.062.692.382.148.818.25 1.456.279.64.03.844.036 2.473.036 1.63 
                                0 1.833-.007 2.473-.036.639-.03 1.075-.13 1.456-.279a2.942 2.942 
                                0 001.063-.692 2.94 2.94 0 00.691-1.062c.149-.382.25-.818.28-1.456.028-.64.035-.844.035-2.473 0-1.63-.007-1.833-.036-2.473-.029-.639-.13-1.075-.279-1.456a2.94 2.94 0 00-.692-1.063 2.94 2.94 0 00-1.062-.691c-.381-.149-.817-.25-1.456-.28-.64-.028-.844-.035-2.473-.035zm0 1.08c1.602 0 1.791.007 2.424.036.585.026.902.124 1.114.206.28.109.48.239.69.449.21.21.34.41.448.69.082.21.18.528.207 1.113.028.633.035.822.035 2.424 0 1.601-.007 1.791-.035 2.424-.027.585-.125.902-.207 
                                1.113-.109.28-.239.48-.449.69-.21.21-.41.34-.69.449-.21.082-.528.18-1.113.206-.633.03-.822.035-2.424.035-1.602 0-1.791-.006-2.424-.035-.584-.026-.902-.124-1.113-.206a1.858 1.858 0 01-.69-.449c-.21-.21-.34-.41-.449-.69-.082-.211-.18-.528-.206-1.113-.03-.633-.035-.822-.035-2.424 0-1.602.006-1.791.035-2.424.026-.585.124-.902.206-1.114.109-.28.239-.48.449-.69.21-.21.41-.34.69-.448.211-.082.529-.18 1.113-.206.633-.03.822-.035 2.424-.035z"
                                fill="#282829"/>
                            <path
                                d="M11.999 14.001a2 2 0 110-3.998 2 2 0 010 3.998zm0-5.08a3.08 3.08 0 100 6.161 3.08 
                                3.08 0 000-6.16zM15.92 8.8a.72.72 0 11-1.44 0 .72.72 0 011.44 0z"
                                fill="#282829"/>
                            </SvgIcon>
                            </Link>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <path
                                d="M14.318 12.321l-3.702-1.905a.15.15 
                                0 00-.216.136v3.697c0 .11.114.184.214.136l3.701-1.792a.152.152 0 00.003-.272z"
                                fill="#9C9CAC"/>
                            <path
                                d="M18.867 14.007a2.852 2.852 0 01-2.852 2.852h-8.03a2.852 2.852 0 01-2.852-2.852V9.993A2.853 2.853 0 017.985 7.14h8.03a2.853 2.853 0 012.852 2.852v4.014zM12 0C5.373 
                                0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0z"
                                fill="#9C9CAC"/>
                            </SvgIcon>
                            </Link>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <path
                                d="M18.087 13.297c.56.547 1.152 1.061 1.654 1.663.221.268.432.544.592.854.228.442.021.927-.374.953l-2.458-.002c-.634.054-1.14-.202-1.567-.636-.34-.346-.656-.715-.983-1.074a2.322 2.322 0 00-.443-.393c-.334-.218-.626-.151-.818.199-.195.356-.24.75-.259 1.148-.026.578-.202.73-.782.756-1.244.06-2.424-.129-3.52-.756-.966-.553-1.715-1.333-2.367-2.217-1.27-1.72-2.242-3.61-3.116-5.554-.197-.438-.053-.673.43-.68a65.042 65.042 0 012.407-.002c.327.005.543.192.668.5a14.93 14.93 0 001.632 
                                3.023c.177.252.358.501.616.678.285.195.503.13.637-.187.085-.2.122-.418.142-.633.063-.743.071-1.484-.04-2.224-.068-.461-.329-.76-.79-.848-.234-.044-.2-.132-.085-.266.197-.231.383-.375.754-.375h2.779c.437.086.534.283.594.723l.003 
                                3.087c-.004.17.085.675.392.789.245.08.407-.116.555-.273.665-.706 1.14-1.54 1.564-2.404.189-.38.351-.775.508-1.169.116-.293.298-.437.628-.43l2.674.002c.08 0 
                                .16.001.237.014.45.077.574.271.435.711-.22.691-.646 1.266-1.064 1.844-.445.618-.922 1.213-1.365 1.834-.407.567-.374.853.13 1.345zM12.001 0C5.373 0 0 5.372 0 12s5.373 
                                12 12 12c6.628 0 12-5.372 12-12S18.628 0 12 0z"
                                fill="#9C9CAC"/>
                            </SvgIcon>
                            </Link>
                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <path
                                d="M10 15.366c-1.065.213-2.073-.334-2.252-1.222-.179-.888.54-1.782 1.606-1.996 
                                1.065-.215 2.075.331 2.253 1.22.178.889-.541 1.783-1.606 
                                1.998zm.09-4.93c-2.645.264-4.65 1.893-4.48 3.64.173 1.748 2.456 2.95 5.1 
                                2.688 2.647-.264 4.651-1.893 4.48-3.64-.172-1.748-2.454-2.951-5.1-2.688z"
                                fill="#9C9CAC"/>
                                <path
                                d="M20.358 9.092a.588.588 0 11-1.177 0 3.863 3.863 0 00-3.863-3.862.589.589 
                                0 010-1.177 5.04 5.04 0 015.04 5.037v.002zm-2.794.606a.59.59 0 01-.695-.456 
                                2.184 2.184 0 00-1.7-1.7.588.588 0 01.237-1.152 3.365 3.365 0 012.615 
                                2.615.588.588 0 01-.457.693zm-7.056 8.803c-3.396 0-6.866-1.844-6.866-4.6 
                                0-1.44.895-3.105 2.44-4.677 2.062-2.097 4.466-3.053 5.37-2.133.398.407.438 
                                1.109.182 1.948-.135.422.388.188.388.188 1.666-.71 3.122-.751 
                                3.653.021.282.412.255.99-.007 1.66-.12.308.038.356.269.426.939.296 
                                1.985 1.013 1.985 2.277 0 2.089-2.962 4.89-7.414 4.89zM12 0C5.373 0 0 5.372 0 12.001 
                                0 18.63 5.373 24 12 24c6.628 0 12-5.371 12-11.999C24 5.372 18.628 0 12 0z"
                                fill="#9C9CAC"/>
                            </SvgIcon>
                            </Link>

                            <Link to="/">
                            <SvgIcon className='appicon'>
                            <circle cx="12" cy="12" r="12" fill="#9C9CAC"></circle>
                            <path
                                d="M16.183 12.816a.57.57 0 01-.571-.571.57.57 0 01.571-.571.57.57 0 01.572.57.58.58 0 
                                01-.572.572zm-2.816 0a.57.57 0 01-.572-.571.57.57 0 01.572-.571.57.57 0 01.571.57.58.58 
                                0 01-.571.572zm4.18 3.208c.89-.642 1.453-1.595 1.453-2.643 0-1.94-1.875-3.503-4.204-3.503-2.329 0-4.204 
                                1.563-4.204 3.503 0 1.939 1.875 3.503 4.204 3.503.484 0 .938-.063 1.375-.188.032-.015.078-.015.125-.015a.51.51 0 01.219.062l.922.532c.031.016.047.031.078.031a.14.14 0 00.14-.14c0-.032-.015-.063-.015-.11 
                                0-.016-.125-.438-.187-.704-.016-.031-.016-.062-.016-.094a.221.221 0 01.11-.234z"
                                fill="#282829"/>
                            <path
                                d="M11.694 9.51a.648.648 0 01-.654-.653c0-.364.289-.653.654-.653.364 0 
                                .652.289.652.653 0 .35-.288.653-.652.653zm-3.347 0a.648.648 0 01-.653-.653c0-.364.289-.653.653-.653.365
                                 0 .653.289.653.653 0 .35-.288.653-.653.653zM10.06 6C7.27 6 5 7.873 5 10.2c0 1.264.674 
                                 2.403 1.754 3.168a.354.354 0 01.141.281c0 .031-.015.078-.015.11-.079.312-.22.827-.235.842-.016.047-.032.078-.032.125 0 .094.079.172.173.172a.223.223 0 00.094-.031l1.112-.64a.53.53 0 01.407-.063 6.34 6.34 0 001.645.234h.282a3.23 
                                3.23 0 01-.172-1.03c0-2.107 2.067-3.824 4.605-3.824h.282C14.68 7.53 12.58 6 10.06 6z"
                                fill="#282829"/>
                            </SvgIcon>
                            </Link>
                            
                            
                        </Grid>
                    </Grid>
                </Container>
                <div className='border'></div>
                <Container className={classes.ContainerBox}>
                    <Grid container spacing={2}>
                            <Grid item xs={6}>
                                <AppBar className={classes.menuStyle} position="static">
                                    <Toolbar className={classes.toolbar}>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/">Company</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/find-a-teacher">Careers</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/community">Press</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/become-a-teacher">Support</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/login">Legal</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/signup">Privacy</Link>
                                        </Typography>
                                        <Typography variant="subtitle2">
                                            <Link className={classes.linkStyle} to="/signup">Contact</Link>
                                        </Typography>
                                    </Toolbar>
                                </AppBar>
                            </Grid>
                            <Grid item xs={6}>
                                <Typography className='copywrite' variant="subtitle2">
                                © 2021 italki HK Limited.
                                </Typography>
                            </Grid>
                    </Grid>
                </Container>
        </div>
    )
}

export default Footer;