import styled from "styled-components";

export const RoutesDiv=styled.div`
position:relative;
background:red;
padding:1%;

.NavLinks{
padding:0.5%;
font-size:1.2vw;
a{
    opacity:0.6;
}
}
a{
    text-decoration:none;
    color:white;
    margin-left:1%;
}
img{
    width:5%;
    margin-left:25%;

}
b{
    font-size:2em;
    margin-left:1%;
}
span.items-cost{
    margin-left:32%;
    font-size:1vw;
    background:black;
    color:white;
    padding:0.5%;
    border-radius:5px;
}
a.active{
    opacity:1;


}

@media (max-width: 1500px) {
    img{
    margin-left:25%;
    }
    span.items-cost{
    font-size:1.3vw;
    }
    
}
@media (max-width: 1200px) {
    img{
    margin-left:20%;
    }
    span.items-cost{
    font-size:1.4vw;
    margin-left:25%;

    }
    
.NavLinks{
    font-size:1.6vw;
}
}
@media (max-width: 920px) {
    height:10vw;
    img{
    margin-left:2%;
    }
    span.items-cost{
        margin-left:60%;
        font-size:1.6vw;

    }
     span.NavLinks{
        position:absolute;
        margin-top:5%;
        margin-left:38%;
        a{
            margin-left:8%;
        }
     }

     .NavLinks{
        font-size:1.8vw;
    }
}
@media (max-width: 580px) {
    height:10vw;
    img{
    margin-left:2%;
    }
    span.items-cost{
        margin-left:45%;
        font-size:2.2vw;

    }
    .NavLinks{
        font-size:2 vw;
    }
}
`

export const PageNotFoundDiv=styled.div`
margin-top:5%;
font-size:2.5vw;
text-align:center;
margin-bottom:14%;
img{
    width:10%;
}

`


export const WelcomeDiv=styled.div`
h1{
    position:absolute;
    font-size:3vw;
    right:0%;
    background:#6e5656;
    padding:0.45%;
    width:70%;
}
h2{
    text-align:left;
    background:#6e5656;
    padding:1%;
    width:100%;
    color:white;
    margin-top:0%;
    font-size:2vw;
}
.steps{
    background: white;
    text-align:center;
    display:flex;
    padding:1%;

    h3{
        font-size:1.4vw;
    }
    img{
        margin-top:1%;
        border-radius:10%;
        width:60%;
        height:80%;
        transition:0.5s;
    }
    img:hover{
        opacity:0.7;
        box-shadow:2px 2px 10px gray;
    }
}
`

export const MensClothDiv=styled.div`
margin-top:0%;
background:rgba(49, 49, 49, 0.625);
color:white;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;
    opacity:0.6;

    button{
        background:transparent;
        color:white;
        font-size:2vw;
        margin-left:00%;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const MenCardDiv=styled.div`

width:50%;
display:flex;
margin-top:2%;
padding:1%;
background:white;
color:black;
height:20vw;

.men-div{
}
img{
    width:25%;
    height:80%;
}
.product-desc{
    margin-left:4%;
    position:relative;
    h3{
        font-size:1.4vw;
        width:90%;

        span{
            font-size:1vw;
            background:red;
            color:white;
            padding:0.5%;
            position:absolute;
            top:0%;
            border-radius:5px;
            right:0%;
        }
    }

    p{
        text-align: justify;
        margin-top:3%;
        width:80%;

    }

    div{
        width:40%;
        position:absolute;
        bottom:2%;
        font-size:1.2vw;
        font-weight:bold;
        button{
            background:black;
            color:white;
            padding:1% 4%;
            font-size:1vw;
            cursor:pointer;
            transition:0.5s;
        }
        button:hover{
            opacity:0.7;
        }
        span{
            margin-left:5%;
        }
    }

}
`

export const ElectronicsDiv=styled.div`
margin-top:0%;
background:rgba(48, 223, 0, 0.425);
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    opacity:0.7;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;
    
    button{
        background:transparent;
        color:black;
        color:white;
        font-size:2vw;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const FemaleClothDiv=styled.div`
margin-top:0%;
background:rgba(255, 14, 191, 0.425);
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:transparent;
        color:white;
        opacity:0.7;
        font-size:2vw;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const JeweleryDiv=styled.div`
margin-top:0%;
background:rgba(255, 217, 0, 0.597);
color:black;
padding:2%;
position:relative;
h1{
    font-size:5vw;
}
.explore{
    cursor:pointer;
    width:18%;
    margin-left:80%;
    animation: explore 5s linear 0s infinite;
    position:absolute;

    button{
        background:transparent;
        color:gray;
        font-size:2vw;
        opacity:0.7;
        border:0;
    }
    img{
        width:10%;
    }

    @keyframes explore {
        0%{
            margin-top: 0%;
        }
        45%{
            margin-top: 0%;
        }
        50%{
            margin-top: 1%;
        }
        55%{
            margin-top: 0%;
        }
        100%{
            margin-top: 0%;
        }
    }  
}
.explore:hover{
    opacity:0.7;    
}

`

export const FooterDiv=styled.footer`
margin-top:0%;
background:red;
color:white;
padding:2%;
.left-aside{
    text-align:center;
    font-size:1vw;
    img{
    width:5%;
    }
}
`

export const BuyCardDiv=styled.div`

width:50%;
display:flex;
margin-top:2%;
padding:1%;
background:white;
color:black;
height:20vw;
border-radius:20px;
box-shadow:1px 1px 2px gray;

.men-div{
}
img{
    width:25%;
    height:auto;
}
.product-desc{
    margin-left:4%;
    position:relative;
    h3{
        font-size:1.4vw;
        width:90%;

        span{
            font-size:1vw;
            background:red;
            color:white;
            padding:0.5%;
            position:absolute;
            top:0%;
            border-radius:5px;
            right:0%;
        }
    }

    p{
        text-align: justify;
        margin-top:3%;
        width:80%;

    }

    div{
        position:absolute;
        bottom:2%;
        right:5%;
        font-size:1.2vw;
        font-weight:bold;
        button{
            background:black;
            color:white;
            padding:1% 4%;
            font-size:1vw;
            cursor:pointer;
            transition:0.5s;
        }
        button:hover{
            opacity:0.7;
        }
        span{
            margin-left:5%;
            font-size:1vw;
        }
    }

}
`

export const CategoryDiv=styled.div`
display:flex;


.filters{
    background:red;
    width:20%;
}

.outlet{
    width:80%;
    background:white;
    padding:2%;

    div{
        margin-top:2%;
        h1{
            text-align:left;
            margin-bottom:1%;
            font-size:4vw;
            color:red;
            text-shadow:2px 2px 4px black;
            cursor:context-menu;
        }
        div{
            width:80%;
        }
    }

}
`

export const IsLoadinDiv=styled.div`
text-align:center;
margin-bottom:15%;
`

export const CheckOutPriceCardDiv=styled.div`
display:flex;
padding:1%;
background:;
border-left:5px solid rgba(49, 49, 49, 0.325);
border-top:5px solid rgba(49, 49, 49, 0.325);
border-right:5px solid rgba(49, 49, 49, 0.325);
width:70%;
margin-left:15%;
img{
    width:5%;
}

.product-info{
width:40%; 
margin-left:5%;
margin-top:2%;

}

.input-change{
    width:30%;
    margin-top:2%;
    margin-left:2%;
    .items{
        width:15%;
        font-size:1.2vw;
        padding:0.5% 2%;
    }
    .plus{
        width:15%;
        border:0;
        font-size:1.2vw;
        padding:0.5% 3%;
        background :lightgreen;
        color:black;
        cursor:pointer;

    }
    .minus{
        width:15%;
        border:0;
        font-size:1.2vw;
        padding:0.5% 3%;
        background :red;
        color:white;
        cursor:pointer;

    }
    .confirm-items{
        padding:1% 3%;
        border:2px solid green;
        font-size:1vw;
        background:green;
        margin-left:10%;
        color:white;
        cursor:pointer;
        transition:0.5s;
    }
    .confirm-items:hover{
        background:darkgreen;
        color:white;
    }
}
.price{
    width:15%;
    padding-left:3%;
    padding-top:2%;
    text-align:left;
    font-size:0.8vw;
    font-weight:bold;
    border-left:3px solid gray;
}

`

export const FilterDiv=styled.div`
position:fixed;
width:20%;
padding:1% 2% 1% 3%;
border-radius:20px;
font-size:1.2vw;
display:flex;
flex-direction: column;
a{
    color:white;
    text-decoration:none;
    margin-top:5%;
    transition:0.5s;
}
a:hover{
    color:black;
}
a.active{
    opacity:0.7;
}

`

export const ModalDiv=styled.div`
background:rgba(177, 177, 177, 0.499);
width:100%;
height:40vw;
position:relative;
margin-top:-23%;
div{
    position:absolute;
    background:white;
    margin-left:35%;
    margin-top:5%;
    width:30%;
    height:40%;
    padding:2%;
    img{
        width:50%;
    }
    span{
        font-size:2vw;
        position:absolute;
        top:50%;
    }
    

}

`