import { makeStyles } from '@material-ui/core/styles'
import background from './assets/img/background1.jpg'
import akvarium from './assets/img/akvarium.png'
import akvariumMarket from './assets/img/akvarium-mark.png'

export const useStyles = makeStyles((theme) => ({
    header : {
        backgroundColor: '#000',
        display: 'flex',
        alignItems: 'center',
        padding: '20px 0 10px',
        borderBottom: '1px solid #2effff'
    },
    headerLogo : {
        display: 'flex',
        alignItems: 'center'
    },
    headerMenu : {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#75ec9b'
    },
    headerMenuItem : {
        display: 'flex'
    },
    headerMenuItems : {
        marginLeft: '34px',
        fontSize: '20px',
        whiteSpace: 'nowrap'
    },
    headerMenuAuth : {
        display: 'flex'
    },
    headerMenuItemsLi : {
        marginLeft: '34px',
        fontSize: '20px'
    },
    headerMenuItemsLink : {
        display: 'none',
        transition: 'all .5s',
        '&:hover' : {
            color: '#fff'
        }
    },

    wrapper : {
        minHeight: 'calc(100vh - 90px)',
        backgroundImage: 'url('+ background +')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
    },


    mainBar : {
        backgroundColor: '#070B15',
        padding: '10px 0'
    },
    mainBarItem : {
        display: 'none',
        width: '40px',
        height: '40px',
        marginRight: '20px'
    },
    mainBarLeft : {
        display: 'flex'
    },
    mainBarRight : {
        display: 'flex'
    },
    mainFormInput : {
        width: '480px',
        minWidth: '200px',
        backgroundColor: '#000',
        border: '2px solid #75ec9b',
        borderRadius: '2px',
        padding: '10px 10px',
        color: '#75ec9b'
    },
    mainFormInputRight : {
        width: '350px',
        minWidth: '100px',
        backgroundColor: '#000',
        border: '2px solid #75ec9b',
        borderRadius: '2px',
        padding: '10px 10px',
        color: '#75ec9b'
    },
    mainFormBtn : {
        width: '130px',
        backgroundColor: '#000',
        border: '2px solid #75ec9b',
        color: '#75ec9b',
        borderRadius: '2px',
        marginLeft: '20px',
        transition: 'all .5s',
        padding: '10px 20px',
        cursor: 'pointer',
        textTransform: 'uppercase',
        '&:hover' : {
            backgroundColor: '#75ec9b',
            color: '#fff'
        }
    },
    mainFormLabel : {
        color: '#fff',
        marginRight: '10px'
    },

    // Animation start
    fishPicture : {
        marginTop: '60px',
        animationName: '$moving',
        animationDuration: '32s',
        animationTimingFunction: 'ease',
        animationIterationCount:'infinite',
    },
    animationTwo : {
        marginTop: '60px',
        animationName: '$moving-two',
        animationDuration: '30s',
        animationTimingFunction: 'ease',
        animationIterationCount:'infinite',
    },
    animationThree : {
        marginTop: '70px',
        animationName: '$moving-three',
        animationDuration: '38s',
        animationTimingFunction: 'ease',
        animationIterationCount:'infinite',
    },
    animationFour : {
        marginTop: '40px',
        animationName: '$moving-four',
        animationDuration: '34s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationFive : {
        marginTop: '80px',
        animationName: '$moving-five',
        animationDuration: '46s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationSix : {
        marginTop: '80px',
        animationName: '$moving-six',
        animationDuration: '34s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationSeven : {
        marginTop: '40px',
        animationName: '$moving-seven',
        animationDuration: '25s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationEight : {
        marginTop: '80px',
        animationName: '$moving-eight',
        animationDuration: '36s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationNine : {
        marginTop: '80px',
        animationName: '$moving-nine',
        animationDuration: '40s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationTen : {
        marginTop: '70px',
        animationName: '$moving-ten',
        animationDuration: '38s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationEleven : {
        marginTop: '40px',
        animationName: '$moving-eleven',
        animationDuration: '48s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationTwelve : {
        marginTop: '100px',
        animationName: '$moving-twelve',
        animationDuration: '50s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    animationBigFish : {
        marginTop: '140px',
        animationName: '$moving-bigfish',
        animationDuration: '50s',
        animationTimingFunction: 'infinite',
        animationIterationCount:'infinite',
    },
    
    '@keyframes moving' : {
        '0%' : {
            transform:  'translate(0, 0)'
        },
        '20%' : {
            transform:  'translateX(-40px)'
        },
        '30%' : {
            transform:  'translateX(-40px) rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateY(-40px) rotateY(180deg)'
        },
        '50%' : {
            transform:  'translateY(-40px) rotateY(180deg)'
        },
        '60%' : {
            transform:  'translateX(60px) rotateY(180deg)'
        },
        '70%' : {
            transform:  'translateX(60px)'
        },
        '80%' : {
            transform:  'translateY(60px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },
    '@keyframes moving-two' : {
        '0%' : {
            transform:  'translate(0, 0) '
        },
        '20%' : {
            transform:  'translateY(-30px)'
        },
        '40%' : {
            transform:  'translateX(-40px)'
        },
        '50%' : {
            transform:  'translateX(-40px) rotateY(180deg)'
        },
        '60%' : {
            transform:  'translateX(40px) rotateY(180deg)'
        },
        '70%' : {
            transform:  'translateX(40px)'
        },
        '80%' : {
            transform:  'translateY(60px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },
    '@keyframes moving-three' : {
        '0%' : {
            transform:  'translate(0, 0)'
        },
        '20%' : {
            transform:  'translateY(50px)'
        },
        '30%' : {
            transform:  'translateY(50px) rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateX(60px) rotateY(180deg)'
        },
        '50%' : {
            transform:  'translateX(60px)'
        },
        '60%' : {
            transform:  'translateY(-50px)'
        },
        '70%' : {
            transform:  'translateY(-50px) rotateY(180deg)'
        },
        '80%' : {
            transform:  'translateX(70px)  rotateY(180deg)'
        },
        '90%' : {
            transform:  'translateX(70px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },
    '@keyframes moving-four' : {
        '0%' : {
            transform:  'translate(0, 0)'
        },
        '20%' : {
            transform:  'translateX(-50px)'
        },
        '30%' : {
            transform:  'translateX(-50px) rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateX(50px) rotateY(180deg)'
        },
        '60%' : {
            transform:  'translateX(50px) '
        },
        '80%' : {
            transform:  'translateY(50px)'
        },
        '100%' : {
            transform:  'translate(0,0) '
        }
    },
    '@keyframes moving-five' : {
        '0%' : {
            transform:  'translate(0, 0)'
        },
        '20%' : {
            transform:  'translateY(-50px)'
        },
        '30%' : {
            transform:  'translateY(-50px)  rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateX(50px) rotateY(180deg)'
        },
        '50%' : {
            transform:  'translateX(50px)'
        },
        '60%' : {
            transform:  'translateY(50px)'
        },
        '70%' : {
            transform:  'translateY(50px)'
        },
        '80%' : {
            transform:  'translateX(-50px)'
        },
        '90%' : {
            transform:  'translateX(-50px) rotateY(180deg)'
        },
        '95%' : {
            transform:  'translateX(0) rotateY(180deg)'
        },
        '100%' : {
            transform:  'translate(0,0)'
        }
    },
    '@keyframes moving-six' : {
        '0%' : {
            transform:  'translate(0, 0)'
        },
        '10%' : {
            transform:  'translateY(50px)'
        },
        '20%' : {
            transform:  'translateY(50px) rotateY(180deg)'
        },
        '30%' : {
            transform:  'translateX(50px) rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateX(50px)'
        },
        '50%' : {
            transform:  'translateY(-50px)'
        },
        '60%' : {
            transform:  'translateX(-50px)'
        },
        '70%' : {
            transform:  'translateX(-50px) rotateY(180deg)'
        },
        '80%' : {
            transform:  'translateY(50px) rotateY(180deg)'
        },
        '90%' : {
            transform:  'translateY(50px)'
        },
        '100%' : {
            transform:  'translate(0,0) '
        }
    },
    '@keyframes moving-seven' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'translate(-20px, -20px)'
        },
        '20%' : {
            transform: 'translate(-20px, -20px) rotateY(180deg)'
        },
        '30%' : {
            transform: 'translateY(40px) rotateY(180deg)'
        },
        '40%' : {
            transform: 'translateY(50px)'
        },
        '50%' : {
            transform: 'translateY(50px)'
        },
        '60%' : {
            transform: 'translateX(-40px)'
        },
        '70%' : {
            transform: 'translateX(-40px) rotateY(180deg)'
        },
        '80%' : {
            transform: 'translateY(40px) rotateY(180deg)'
        },
        '90%' : {
            transform: 'translateY(40px)'
        },
        '100%' : {
            transform: 'translate(0, 0)'
        }
    },
    '@keyframes moving-eight' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'translate(0, 0) rotateY(180deg)'
        },
        '20%' : {
            transform: 'translate(40px, 40px) rotateY(180deg)'
        },
        '30%' : {
            transform: 'translate(40px,40px)'
        },
        '40%' : {
            transform: 'translate(-40px,40px)'
        },
        '50%' : {
            transform: 'translateX(-40px)'
        },
        '60%' : {
            transform: 'translateX(-40px) rotateY(180deg)'
        },
        '70%' : {
            transform: 'translateY(-60px) rotateY(180deg)'
        },
        '80%' : {
            transform: 'translateY(-60px) rotateY(180deg)'
        },
        '100%' : {
            transform: 'translate(0, 0)'
        }
    },
    '@keyframes moving-nine' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'translateY(50px)'
        },
        '20%' : {
            transform: 'translateY(-30px)'
        },
        '30%' : {
            transform: 'translateY(30px)'
        },
        '40%' : {
            transform: 'translateX(-40px)'
        },
        '50%' : {
            transform: 'translateX(-40px) rotateY(180deg)'
        },
        '60%' : {
            transform: 'translateX(40px) rotateY(180deg)'
        },
        '70%' : {
            transform: 'translate(40px,-40px) rotateY(180deg)'
        },
        '80%' : {
            transform: 'translate(40px,-40px) rotateY(180deg)'
        },
        '90%' : {
            transform: 'translateX(40px) rotateY(180deg)'
        },
        '95%' : {
            transform: 'translateX(40px)'
        },
        '100%' : {
            transform: 'translate(0, 0)'
        }
    },
    '@keyframes moving-ten' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'translateX(-50px)'
        },
        '20%' : {
            transform: 'translateX(-50px) rotateY(180deg)'
        },
        '30%' : {
            transform:  'translateX(50px) rotateY(180deg)'
        },
        '40%' : {
            transform:  'translateX(50px)'
        },
        '50%' : {
            transform:  'translateY(50px)'
        },
        '70%' : {
            transform:  'translateY(-50px)'
        },
        '80%' : {
            transform:  'translateY(20px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },
    '@keyframes moving-eleven' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'translate(-40px, 40px)'
        },
        '20%' : {
            transform: 'translate(-40px, 40px) rotateY(180deg)'
        },
        '30%' : {
            transform: 'translate(40px, -5px) rotateY(180deg)'
        },
        '40%' : {
            transform: 'translate(40px, -5px)'
        },
        '50%' : {
            transform: 'translateY(80px)'
        },
        '60%' : {
            transform: 'translateY(80px) rotateY(180deg)'
        },
        '70%' : {
            transform: 'translateX(40px) rotateY(180deg)'
        },
        '80%' : {
            transform: 'translateX(40px)'
        },
        '90%' : {
            transform: 'translateX(40px)'
        },
        '100%' : {
            transform: 'translate(0, 0)'
        }
    },
    '@keyframes moving-twelve' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'rotateY(180deg)'
        },
        '20%' : {
            transform: 'translateX(50px) rotateY(180deg)'
        },
        '30%' : {
            transform:  'translateX(50px)'
        },
        '40%' : {
            transform:  'translateX(-50px)'
        },
        '50%' : {
            transform:  'translateX(-50px) rotateY(180deg)'
        },
        '60%' : {
            transform:  'translate(50px, -50px) rotateY(180deg)'
        },
        '70%' : {
            transform:  'translate(50px, -50px)'
        }, 
        '80%' : {
            transform:  'translateY(50px)'
        },
        '90%' : {
            transform:  'translateY(-30px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },
    '@keyframes moving-bigfish' : {
        '0%' : {
            transform: 'translate(0, 0)'
        },
        '10%' : {
            transform: 'rotateY(180deg)'
        },
        '20%' : {
            transform: 'translateX(90px) rotateY(180deg)'
        },
        '30%' : {
            transform:  'translateX(90px)'
        },
        '40%' : {
            transform:  'translateX(-90px)'
        },
        '50%' : {
            transform:  'translateX(-90px) rotateY(180deg)'
        },
        '60%' : {
            transform:  'translate(50px, -50px) rotateY(180deg)'
        },
        '70%' : {
            transform:  'translate(90px, -50px)'
        }, 
        '80%' : {
            transform:  'translateX(20px)'
        },
        '90%' : {
            transform:  'translateY(90px)'
        },
        '100%' : {
            transform:  'translate(0, 0)'
        }
    },

    //Animation end
    
    fishMarket : {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gridGap: '80px 30px',
        padding: '50px 0'
    },
    mainFishesBlockImg : {
        height: '240px',
        width: '255px',
        margin: '0 auto',
        backgroundImage: 'url('+ akvarium +')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    mainFishes : {
        padding: '10px'
    },
    mainFishesTitle : {
        color: '#75ec9b',
        textTransform: 'uppercase',
        marginBottom: 0
    },
    mainFishesTitleText : {
        color: '#fff',
        marginTop: 0
    },
    mainFishesPriceText : {
        color: '#fff',
        margin: '0 auto'
    },
    mainFishesPriceTitle : {
        color: '#fff',
        margin: '0 auto'
    },

    marketItem : {
        display: 'flex',
        justifyContent: 'space-around'
    },
    marketItemImg : {
        width: '50%',
        height: '577px',
        backgroundImage: 'url('+ akvariumMarket +')',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    },
    marketItemDescr : {
        width: '50%',
        marginLeft: '50px',
        textAlign: 'left',
        color: '#fff'
    },
    marketItemTitle : {
        color: '#fff',
        marginBottom: 0,
        fontSize: '70px'
    },
    marketItemTitleItem : {
        color: '#75ec9b',
        marginTop: 0,
        fontSize: '35px',
        marginBottom: '12px'
    },
    marketItemLine : {
        display: 'block',
        height: '1px',
        border: 'none',
        backgroundColor: '#fff'
    },
    marketItemDescrText : {
        marginBottom: 0,
        fontSize: '15px'
    },
    marketItemDescrTitle : {
        fontSize: '25px'
    },
    marketItemBtn : {
        display: 'block',
        width: '100%',
        padding: '15px 20px',
        marginTop: '20px',
        border: '1px solid #75ec9b',
        backgroundColor: '#000',
        borderRadius: '2px',
        color: '#75ec9b',
        fontSize: '30px',
        textTransform: 'uppercase',
        outline: 'none',
        cursor: 'pointer',
        transition: 'all .5s',
        '&:hover' : {
            backgroundColor: '#75ec9b',
            color: '#fff'
        }
    },
    tableBlock : {
        marginTop: '150px'
    },
    marketTableTitle : {
        color: '#fff',
        textAlign: 'left',
        marginTop: '50px'
    },
    tdAvatar : {
        height: '20px',
        width: '20px',
        display: 'inline-block',
        verticalAlign: 'middle',
        backgroundColor: '#75ec9b',
        borderRadius: '50%',
        marginRight: '15px'
    },
    topSale : {
        backgroundColor: '#fff',
        color: '#000',
        padding: '2px',
        marginLeft: '5px',
        borderRadius: '2px',
        textTransform: 'uppercase',
        border: 'none'
    },
    aquaCreatures : {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gridGap: '80px 85px',
        marginTop: '60px'
    },
    

    footer : {
        padding: '10px 0 30px',
        backgroundColor: '#000'
    },
    footerSocials : {
        margin: 'auto 0'
    },
    footerSocialsTitle : {
        margin: '0 0 15px',
        textAlign: 'left',
        color: '#fff'
    },
    footerSocialsItems : {
        marginRight: '30px'
    },
    footerNav : {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end'
    },
    footerMenu : {
        display: 'flex',
        justifyContent: 'flex-end'
    },
    footerMenuItemsLink : {
        marginLeft: '50px',
        transition: 'all .5s',
        '&:hover' : {
            color: '#fff'
        }
    },
    footerForm : {
        display: 'none',
        // display: 'flex',
        justifyContent: 'flex-end'
    },
    footerFormLabel : {
        display: 'inline-block',
        marginRight: '10px',
        color: '#fff',
        textAlign: 'right'
    },
    footerFormInput : {
        width: '400px',
        minWidth: '100px',
        outline: 'none',
        padding: '0 10px',
        borderRadius: '2px'
    },
    footerFormInputBtn : {
        marginLeft: '5px',
        backgroundColor: '#75ec9b',
        outline: 'none',
        border: 'none',
        textTransform: 'uppercase',
        fontWeight: 'bold',
        color: '#fff',
        padding: '0 33px',
        transition: 'all .5s',
        borderRadius: '5px',
        cursor: 'pointer',
        '&:hover' : {
                backgroundColor: '#52a46c'
            }
    },
    footerCopyRights : {
        textAlign: 'right',
        margin: '5px 0 0',
        fontSize: '10px',
        color: '#fff'
    }
    
}))
