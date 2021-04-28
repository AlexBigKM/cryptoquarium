import { makeStyles } from '@material-ui/core/styles';
import background from './assets/img/background1.jpg';

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
        animationName: '$moving',
        animationDuration: '3s',
        animationTimingFunction: 'ease',
        animationIterationCount:'infinite',
    },
    animationTwo : {
        animationName: '$moving-two',
        animationDuration: '3.5s',
        animationTimingFunction: 'ease',
        animationIterationCount:'infinite',
    },
    '@keyframes moving' : {
        '0%' : {
            transform:  'translateY(0)',
        },
        '50%' : {
            transform:  'translateY(-10px)',
        },
        '100%' : {
            transform:  'translateY(0)',
        },
    },
    '@keyframes moving-two' : {
        '0%' : {
            transform:  'translateY(0)',
        },
        '50%' : {
            transform:  'translateY(-20px)',
        },
        '100%' : {
            transform:  'translateY(0)',
        },
    },
    //Animation end
    
    fishMarket : {
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(250px, 1fr))',
        gridGap: '80px 30px',
        padding: '50px 0'
    },
    mainFishes : {
        padding: '10px'
    },
    mainFishesTitle : {
        color: '#75ec9b',
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
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    marketItemImg : {
        width: '50%',
        '& > img' : {
            display: 'block',
            margin: '0 auto'
        },
    },
    marketItemDescr : {
        width: '50%',
        textAlign: 'left',
        color: '#fff'
    },
    marketItemTitle : {
        color: '#fff',
        marginBottom: 0,
        fontSize: '50px'
    },
    marketItemTitleItem : {
        color: '#75ec9b',
        marginTop: 0,
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
        fontSize: '12px'
    },
    marketItemDescrTitle : {
        fontSize: '20px'
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
        display: 'flex',
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