import React from "react";
import background from "../images/2022year_pc.svg";
import {Typography, Button} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Container from '@material-ui/core/Container';
import Grid from '@mui/material/Grid';
import pic1 from '../images/hero_web.webp';
import English from '../images/english.svg';
import Japanees from '../images/japanese.svg';
import Chinese from '../images/chinese.svg';
import Spanish from '../images/spanish.svg';
import French from '../images/french.svg';
import Italian from '../images/italian.svg';
import German from '../images/german.svg';
import More from '../images/all.svg';
import Banner from '../images/la_banner_pc.svg';
import Bg from '../images/bg.svg';
import Practice from '../images/practice1.webp';
import Methods from '../images/methods.jpg';
import Teachers from '../images/teachers.jpg';
import Learn from '../images/learn.webp';
import { Link } from "react-router-dom";
import RightArrow from '@mui/icons-material/ArrowRightAlt';
import SvgIcon from '@material-ui/core/SvgIcon';
import Rating from '@mui/material/Rating';
import Avatar from '@material-ui/core/Avatar';
import Andy from "../images/andy.jpg";
import Cassie from "../images/cassie.jpg";
import Celso from "../images/celso.jpg";
import Lindalva from "../images/lindalva.jpg";
import Br from "../images/br.svg";
import Cn from "../images/cn.svg";
import Au from "../images/au.svg";
import Rate from '../images/rate.svg';
import '../Style/style.css';


const useStyle =  makeStyles({

    buttonStyle :{
        margin:'50px 30px 50px 30px',
        backgroundColor: '#ff4438',
        color: '#fff',
        padding: '13px 60px 13px 60px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
        textTransform: 'initial',
        display:'block',
        '&:hover': {
            backgroundColor: '#ff4438',
          }
    },


    buttonStyle1 :{
        margin:'50px 30px 50px 30px',
        backgroundColor: '#fff',
        color: '#ff4438',
        padding: '13px 60px 13px 60px',
        borderRadius: '8px',
        fontSize: '13px',
        fontWeight: '600',
        textTransform: 'initial',
        '&:hover': {
            backgroundColor: '#fff',
          }
    },

    bannerButton : {
        position: 'relative',
        left: '61.3%',
        backgroundColor: '#fff',
        color: '#FFC400',
        minWidth: '80px',
        height: '40px',
        padding: '10px 16px',
        fontSize: '14px',
        borderRadius: '8px',
        fontWeight: '600',
        marginTop:'50px',
        textTransform: 'initial',
        '&:hover': {
            backgroundColor: '#fff',
          }
    },

    buttonLink : {
        textDecoration: 'none',
        color: '#00b3bd',
        fontSize: '14px',
        fontWeight: '600',
        textTransform: 'initial',
        padding: '0',
        '&:hover': {
            backgroundColor: 'transparent',
          }
    }, 

    ContainerBox : {
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '1176px',
    }, 

    large : {
        width: '76px', 
        height: '76px',
        position: 'relative',
        left: '20px',
        bottom: '30px',
    }
});

const Home = () => {

    const classes = useStyle();

    return (
        <Grid>
            <Grid item xs={12} style={{paddingBottom:'24px'}}>
                <Grid item xs={12} style={{ backgroundImage: `url(${background})`, textAlign:"center" }}>
                    <Typography className='title' variant="subtitle1">
                    Time to sparkle! Set your New Year's Resolution now and get the chance to win 1 year of FREE lessons.
                    </Typography>
                </Grid>
            </Grid>

            <Container className={classes.ContainerBox} style={{ paddingTop: "32px", paddingBottom: "72px"}}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <Typography className='sec1' variant="h3">
                            Become fluent in any language
                        </Typography>
                        <Typography className='sec2' variant="subtitle1">
                            <SvgIcon className="icon1">
                            <path
                                d="M1 12C1 6.47715 5.47715 2 11 2H13C18.5228 2 23 6.47715 23 12V12C23 17.5228 18.5228 22 13 22H1V12Z"
                                stroke="#FF4338" strokeWidth="2"/>
                            <path 
                                d="M14.3424 9.60005C14.979 9.60005 15.4997 9.09552 15.4997 8.45743C15.4997 7.81937 14.979 7.30005 14.3424 7.30005C13.7061 7.30005 13.1997 7.81937 13.1997 8.45743C13.1997 9.09552 13.7061 9.60005 14.3424 9.60005Z" 
                                fill="#FF4338"/>
                            <path 
                                d="M13.2974 11.3128V17.02H15.2974V10.0184H14.5758C13.8698 10.0184 13.2974 10.598 13.2974 11.3128Z" 
                                fill="#FF4338"/>
                            <path 
                                d="M9.65707 9.59999C9.02056 9.59999 8.4998 9.09546 8.4998 8.45737C8.4998 7.81931 9.02056 7.29999 9.65707 7.29999C10.2934 7.29999 10.7998 7.81931 10.7998 8.45737C10.7998 9.09546 10.2934 9.59999 9.65707 9.59999Z" 
                                fill="#FF4338"/>
                            <path 
                                d=" M10.7021 11.3127V17.02H8.70215V10.0183H9.42368C10.1297 10.0183 10.7021 10.5979 10.7021 11.3127Z" 
                                fill="#FF4338"/>
                            </SvgIcon>
                        1-on-1 lessons in more than 150 languages
                        </Typography>
                        <Typography className='sec2' variant="subtitle1">
                            <SvgIcon className="icon1">
                                <path
                                    d="M1 12C1 6.47715 5.47715 2 11 2H13C18.5228 2 23 6.47715 23 12V12C23 17.5228 18.5228 22 13 22H1V12Z"
                                    stroke="#FF4338" stroke-width="2"/>
                                <path 
                                    d="M14.3424 9.60005C14.979 9.60005 15.4997 9.09552 15.4997 8.45743C15.4997 7.81937 14.979 7.30005 14.3424 7.30005C13.7061 7.30005 13.1997 7.81937 13.1997 8.45743C13.1997 9.09552 13.7061 9.60005 14.3424 9.60005Z" 
                                    fill="#FF4338"/>
                                <path 
                                    d="M13.2974 11.3128V17.02H15.2974V10.0184H14.5758C13.8698 10.0184 13.2974 10.598 13.2974 11.3128Z" 
                                    fill="#FF4338"/>
                                <path 
                                    d="M9.65707 9.59999C9.02056 9.59999 8.4998 9.09546 8.4998 8.45737C8.4998 7.81931 9.02056 7.29999 9.65707 7.29999C10.2934 7.29999 10.7998 7.81931 10.7998 8.45737C10.7998 9.09546 10.2934 9.59999 9.65707 9.59999Z" 
                                    fill="#FF4338"/>
                                <path 
                                    d=" M10.7021 11.3127V17.02H8.70215V10.0183H9.42368C10.1297 10.0183 10.7021 10.5979 10.7021 11.3127Z" 
                                    fill="#FF4338"/>
                                </SvgIcon>
                        Practice for free with the italki community
                        </Typography>
                        <Typography className='sec2' variant="subtitle1">
                            <SvgIcon className="icon1">
                            <path
                                d="M1 12C1 6.47715 5.47715 2 11 2H13C18.5228 2 23 6.47715 23 12V12C23 17.5228 18.5228 22 13 22H1V12Z"
                                stroke="#FF4338" stroke-width="2"/>
                            <path 
                                d="M14.3424 9.60005C14.979 9.60005 15.4997 9.09552 15.4997 8.45743C15.4997 7.81937 14.979 7.30005 14.3424 7.30005C13.7061 7.30005 13.1997 7.81937 13.1997 8.45743C13.1997 9.09552 13.7061 9.60005 14.3424 9.60005Z" 
                                fill="#FF4338"/>
                            <path 
                                d="M13.2974 11.3128V17.02H15.2974V10.0184H14.5758C13.8698 10.0184 13.2974 10.598 13.2974 11.3128Z" 
                                fill="#FF4338"/>
                            <path 
                                d="M9.65707 9.59999C9.02056 9.59999 8.4998 9.09546 8.4998 8.45737C8.4998 7.81931 9.02056 7.29999 9.65707 7.29999C10.2934 7.29999 10.7998 7.81931 10.7998 8.45737C10.7998 9.09546 10.2934 9.59999 9.65707 9.59999Z" 
                                fill="#FF4338"/>
                            <path 
                                d=" M10.7021 11.3127V17.02H8.70215V10.0183H9.42368C10.1297 10.0183 10.7021 10.5979 10.7021 11.3127Z" 
                                fill="#FF4338"/>
                            </SvgIcon>
                        Take learning beyond the classroom
                        </Typography>
                        <Button className= {classes.buttonStyle} variant="contained" size="small">
                            Get Started
                        </Button>
                        <Rating style={{paddingLeft:'30px'}} name="half-rating" defaultValue={4.5} precision={0.5} />
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <img className='picture' src={pic1} width='450' heigh='463'/>
                    </Grid>
                </Grid>
            </Container>

            <Grid style={{ backgroundColor: "#F5F6F9" }} >
                <Container className={classes.ContainerBox} style={{paddingTop:'56px', paddingBottom:'56px'}}>
                    <Typography style={{paddingBottom:'40px'}} className='sec3' variant="h2">
                            I want to learn ...
                    </Typography>

                    <Grid container spacing={2} style={{ paddingLeft:'94px', paddingRight:'94px' }}> 
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={English} style={{marginRight:'8px'}} />
                                        English
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={Japanees} style={{marginRight:'8px'}} />
                                        Japanees
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={Spanish} style={{marginRight:'8px'}} />
                                        Spanish
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={Chinese} style={{marginRight:'8px'}} />
                                        Chinese
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={French} style={{marginRight:'8px'}} />
                                        French
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={Italian} style={{marginRight:'8px'}} />
                                        Italian
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={German} style={{marginRight:'8px'}} />
                                        German
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                        <Grid item xs={3}>
                            <Grid className='card' xs={12}>
                                <Link to="/">
                                    <Grid style={{ display: 'flex', alignItems: 'center'}}>
                                        <img src={More} style={{marginRight:'8px'}} />
                                        More
                                    </Grid>
                                </Link>
                            </Grid>
                        </Grid>
                    </Grid>
                </Container>
           </Grid>

           <Grid>
                <Grid item xs={12} style={{ backgroundImage: `url(${Banner})` , padding:"0 0 60px 0"}}>
                    <Typography item xs={12} variant="h4" className="style banner">
                    Language Assessment
                    </Typography>

                    <Typography item xs={12} variant="h6" className="style banner1">
                    Test your level with a free language assessment
                    </Typography>

                    <Button className= {classes.bannerButton} variant="contained" size="small">
                           Try it now
                        </Button>
                </Grid>
            </Grid>

            <Container className={classes.ContainerBox} style={{ paddingTop: "72px", paddingBottom: '72px'}}>
                <Grid container spacing={2} style={{paddingBottom:"96px"}}>
                    <Grid item xs={6}>
                        <Typography className='sec5' variant="h3">
                        1-on-1 lessons in more than 150 languages
                        </Typography>
                        <ul className='items'>
                            <li className='list'>Learn from certified teachers with proven experience</li>
                            <li className='list'>Find teachers from all over the world sharing their languages, dialects, and cultures</li>
                            <li className='list'>Study at your own pace without worrying about rigid schedules or fixed fees</li>
                        </ul>
                        <Button 
                        className={classes.buttonLink} 
                        href="/" 
                        endIcon={<RightArrow />}>
                            Find my teacher
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img style={{float:'right'}}src={Teachers} width='457' heigh='320'/>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.ContainerBox} style={{ paddingBottom: "96px" }}>
                <Grid container spacing={2}>
                <Grid item xs={6}>
                        <img src={Practice} width='457' heigh='321'/>
                    </Grid>
                    <Grid item xs={6} style={{paddingLeft:'10%'}}>
                        <Typography className='sec6' variant="h3">
                        Practice for free with the italki community
                        </Typography>
                        <ul className='items1'>
                            <li className='list'>Develop your language skills by building connections with others</li>
                            <li className='list'>Receive feedback from native speakers and professional teachers</li>
                            <li className='list'>Meet and share experiences with millions of language learners from more than 190 countries</li>
                        </ul>
                        <Button 
                        className={classes.buttonLink} 
                        href="/" 
                        endIcon={<RightArrow />}>
                            Explore our community
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            <Container className={classes.ContainerBox} style={{ paddingTop: "72px", paddingBottom: '72px'}}>
                <Grid container spacing={2} style={{paddingBottom:"96px"}}>
                    <Grid item xs={6}>
                        <Typography className='sec5' variant="h3">
                        Take learning beyond the classroom
                        </Typography>
                        <ul className='items'>
                            <li className='list'>Test your level with a free language assessment</li>
                            <li className='list'>Get a little help creating topics with language prompts</li>
                            <li className='list'>Motivate yourself by taking part in the italki Language Challenge</li>
                        </ul>
                        <Button 
                        className={classes.buttonLink} 
                        href="/" 
                        endIcon={<RightArrow />}>
                            See what’s available
                        </Button>
                    </Grid>
                    <Grid item xs={6}>
                        <img style={{float:'right'}}src={Methods} width='457' heigh='320'/>
                    </Grid>
                </Grid>
            </Container>


            <Grid style={{ backgroundColor: "#F5F6F9" }} >
                <Container className={classes.ContainerBox} style={{paddingTop:'72px', paddingBottom:'159px'}}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} style={{paddingRight:'100px'}}>
                            <Typography className='sec7' variant="h3">
                            Business
                            </Typography>
                            <Typography className='sec8' variant="h6">  
                            Develop your vocabulary and pass job interviews with teachers who have industry experience
                            </Typography>
                            <Button style={{marginBottom: '40px'}}
                            className={classes.buttonLink} 
                            href="/" 
                            endIcon={<RightArrow />}>
                                Expand your vocabulary
                            </Button>

                            <Typography className='sec7' variant="h3">
                            Exam preparation
                            </Typography>
                            <Typography className='sec8' variant="h6">  
                            Get the score you need for exams like IELTS, Goethe Certificates, DELF, JLPT, and more
                            </Typography>
                            <Button style={{marginBottom: '40px'}}
                            className={classes.buttonLink} 
                            href="/" 
                            endIcon={<RightArrow />}>
                                Get ready for test day
                            </Button>

                            <Typography className='sec7' variant="h3">
                            Conversation practice
                            </Typography>
                            <Typography className='sec8' variant="h6">  
                            Speak confidently about topics you love and reach fluency through conversation
                            </Typography>
                            <Button style={{marginBottom: '40px'}}
                            className={classes.buttonLink} 
                            href="/" 
                            endIcon={<RightArrow />}>
                                Practice 1-on-1
                            </Button>
                        </Grid>
                        <Grid item xs={6}>
                            <Grid className="fixedSection" style={{paddingBottom:'68px'}}>
                                <Typography className='sec9' variant="h6">  
                                Adaptive learning that meets your needs
                                </Typography>
                                <img src={Learn} width='450' heigh='337'/>
                            </Grid>
                            
                    </Grid>
                    </Grid>
                </Container>
           </Grid>

           <Container className={classes.ContainerBox} style={{ paddingTop: "72px", paddingBottom: '72px'}}>
                <Grid container spacing={2} style={{paddingBottom:"10px"}}>
                        <Grid item xs={12}>
                            <Typography className='sec5' variant="h3" style={{textAlign:"center", paddingBottom:'48px'}}>
                            Hear from other language learners
                            </Typography>
                        </Grid>
                </Grid>

                <Grid container spacing={2}> 
                    <Grid item xs={3}>
                        <Grid xs={12} className='portfolio'>
                                <Grid>
                                    <Avatar alt="Celso" src={Celso} className={classes.large}/>
                                    <i className='flag' style={{backgroundImage: `url(${Br})`}}></i>
                                    <img src={Rate} style={{position:'relative', bottom:'60px', left:'100px'}}  />
                                </Grid>
                                <Grid style={{paddingRight:'16px', paddingLeft:'16px'}}>
                                    <Typography style={{display:'block', marginBottom:'10px', fontSize:'15px', color:'#515164', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            Yonathan
                                        </Typography>
                                    <Typography style={{display:'block', marginBottom:'12px', fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            LEARNING Japanese
                                        </Typography>
                                    <Typography style={{fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                    lineHeight: '18px', display:'block', paddingBottom:'33px',}} variant="subtitle3">
                                        Two months have passed since I first started and I can say that I have seen great leaps forward in my Japanese. Since my first lesson with my tutor, 
                                        I realized that he would help me improve exponentially.
                                    </Typography>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid xs={12} className='portfolio'>
                                <Grid>
                                <Avatar alt="Lindalva" src={Lindalva} className={classes.large}/>
                                    <i className='flag' style={{backgroundImage: `url(${Br})`}}></i>
                                    <img src={Rate} style={{position:'relative', bottom:'60px', left:'100px'}}  />
                                </Grid>
                                <Grid style={{paddingRight:'16px', paddingLeft:'16px'}}>
                                    <Typography style={{display:'block', marginBottom:'10px', fontSize:'15px', color:'#515164', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            Lindalva
                                        </Typography>
                                    <Typography style={{display:'block', marginBottom:'12px', fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            LEARNING French
                                        </Typography>
                                    <Typography style={{fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                    lineHeight: '18px', display:'block', paddingBottom:'50px',}} variant="subtitle3">
                                       I was a little bit skeptical in the beginning. I was used to studying with books and I was missing this. However, 
                                       I quickly realized that it was the best tool I have ever found.
                                    </Typography>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid xs={12} className='portfolio'>
                                <Grid>
                                <Avatar alt="Andy" src={Andy} className={classes.large}/>
                                    <i className='flag' style={{backgroundImage: `url(${Br})`}}></i>
                                    <img src={Rate} style={{position:'relative', bottom:'60px', left:'100px'}}  />
                                </Grid>
                                <Grid style={{paddingRight:'16px', paddingLeft:'16px'}}>
                                    <Typography style={{display:'block', marginBottom:'10px', fontSize:'15px', color:'#515164', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                          Andy
                                        </Typography>
                                    <Typography style={{display:'block', marginBottom:'12px', fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            LEARNING Japanese
                                        </Typography>
                                    <Typography style={{fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                    lineHeight: '18px', display:'block', paddingBottom:'50px',}} variant="subtitle3">
                                       italki is perfect for people who have little time, not enough budget to pay for a private tutor, 
                                       and especially people who like the idea of talking with people from all around the world.
                                    </Typography>
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={3}>
                        <Grid xs={12} className='portfolio'>
                                <Grid>
                                <Avatar alt="Cassie" src={Cassie} className={classes.large}/>
                                    <i className='flag' style={{backgroundImage: `url(${Br})`}}></i>
                                    <img src={Rate} style={{position:'relative', bottom:'60px', left:'100px'}}  />
                                </Grid>
                                <Grid style={{paddingRight:'16px', paddingLeft:'16px'}}>
                                    <Typography style={{display:'block', marginBottom:'10px', fontSize:'15px', color:'#515164', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            Casseie
                                        </Typography>
                                    <Typography style={{display:'block', marginBottom:'12px', fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                        lineHeight: '18px'}} variant="subtitle3">
                                            LEARNING English
                                        </Typography>
                                    <Typography style={{fontSize:'13px', color:'#9c9cac', fontWeight: '500',
                                    lineHeight: '18px', display:'block', paddingBottom:'50px',}} variant="subtitle3">
                                       The results were exciting, I saw improvement in my ability to speak and understand 
                                       exponentially and now I feel much more comfortable when I have to speak English.
                                    </Typography>
                                </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>

           <Grid style={{ background: `url(${Bg}) #FF4338 repeat`}} >
                <Container className={classes.ContainerBox} style={{paddingTop:'30px'}}>
                    <Grid container spacing={2} style={{display: 'flex' , justifyContent: 'center'}}>
                        <Grid item xs={6} style={{textAlign:'center'}}>
                            <Typography className='sec10' variant="h3">
                            Learn more than just a language
                            </Typography>
                            <Typography className='sec11' variant="h3">
                            On italki it's about mastering a timeless skill, cultivating new perspectives, 
                            and connecting with fascinating people from around the world.
                            </Typography>
                            <Button className= {classes.buttonStyle1} variant="contained" size="small">
                            Get Started
                        </Button>
                        </Grid>
                    </Grid>
                </Container>
           </Grid>
        </Grid>
    )

}

export default Home;