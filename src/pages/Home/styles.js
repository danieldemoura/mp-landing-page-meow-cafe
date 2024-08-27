import styled from 'styled-components';

import bgCoffe from '../../assets/background/bg-coffe.png';
import bgCroissants from '../../assets/background/bg-croissants.png';
import bgCoffes from '../../assets/background/bg-coffes.png';
import bgCoffe2 from '../../assets/background/bg-coffe-2.png';

export const NavContainer = styled.nav`
    width: 100%;
    max-width: ${(props) => props.theme['max-container']};

    display: flex;
    align-items: center;
    margin: 0 auto;

    img {
        @media(max-width: 390px) {
            max-width: 117px;
        }
    }

    .btn-menu {
        display: none;

        @media(max-width: 390px) {
            display: block;
        }
    }

    ul {
        display: flex;
        align-items: flex-start;
        gap: 3.3rem;
        list-style: none;

        li:first-child a {
            font-size: 2.4rem;
            color: ${(props) => props.theme['text-850']};

            @media(max-width: 390px) {
                font-size: 1.6rem;
                font-weight: 700;
            }
        }

        a {
            font-size: 2rem;
            font-weight: 500;
            color: ${(props) => props.theme['brand-800']};
        }

        li:not(:first-child) {
            @media(max-width: 390px) {
                display: none;
            }
        }

        .active::after {
            content: '';
            display: block;
            width: 5.4rem;
            height: .5rem;
            background-color: ${(props) => props.theme['brand-800']};
        }
    }

    div {
        margin-left: 26rem;
        display: flex;
        align-items: center;
        gap: 2.5rem;

        @media(max-width: 390px) {
            margin-left: 10px;

        }

        a {
            font-size: 2rem;
            font-weight: 500;
        }

        a:first-child {
            display: block;
            color: ${(props) => props.theme['brand-800']};

            @media(max-width: 390px) {
                display: none; 
            }
        }

        a:last-child {
            color: ${(props) => props.theme['text-10']};
            background-color: ${(props) => props.theme['brand-750']};
            padding: 1rem 3.2rem;
            border-radius: 3.2rem;

            @media(max-width: 390px) {
                font-size: 1.5rem;   
                padding: 1rem 2.5rem;
                margin-right: 12px;
            }
        }
        
    }
`

export const HeaderContainer = styled.header`
    width: 100%;
    min-height: 361px;
    max-width: ${(props) => props.theme['max-container']};
    margin: 0 auto;

    display: flex;
    overflow-x: clip;
    position: relative;

    .headline {
        max-width: 35.2rem;
        margin-left: 4.2rem;

        @media(max-width: 390px) {
            margin-top: 45px;
            margin-left: 3rem;
        }

        strong {
            font-weight: 700;
            font-size: 2.4rem;
            line-height: 3.6rem;
            color: ${(props) => props.theme['brand-800']};
        }

        h1 {
            font-weight: 700;
            font-size: 8rem;
            line-height: 8.4rem;
            color: ${(props) => props.theme['brand-800']};

            @media(max-width: 390px) {
                font-size: 3.2rem;
                max-width: 100px;
                line-height: 104.5%;
                margin: 11px 0 18px;
            }
        }

        p {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 157%;
            color: ${(props) => props.theme['brand-800']};

            @media(max-width: 390px) {
                max-width: 167px;
            }
        }
    }

    .bg-header {
        position: absolute;
        top: -17rem;
        right: 4rem;
        z-index: -1;
        display: block;

        @media(max-width: 390px) {
            display: none;
        }
    }

    .bg-header-mb {
        display: none;

        @media(max-width: 390px) {
            display: block;

            position: absolute;
            top: -11rem;
            right: -15px;
            z-index: -1;
        }
    }
`

export const SectionCoffesContainer = styled.section`
    min-height: 79.5rem;
    margin: 57px auto 0;
    background: url(${bgCoffe}) no-repeat center 0px / 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 7.2rem 0 0;

    .title {
        font-weight: 600;
        font-size: 4rem;
        line-height: 157%;
        color: ${(props) => props.theme['brand-800']};

        position: relative
    }

    .title::after {
        content: '';
        display: block;
        width: 65px;
        height: 1px;
        background-color: ${(props) => props.theme['brand-800']};

        position: absolute;
        top: 6rem;
        left: 50%;
        transform: translate(-50%, 0px);

        @media(max-width: 390px) {
            top: 8rem;
        }
    }

    p {
        max-width: 54.4rem;
        text-align: center;
        margin: 15px 0 36px;

        @media(max-width: 390px) {
            margin: 32px 0 36px;
            max-width: 33rem;
        }
    }
`

export const CoffesContainer = styled.div`
    display: flex;
    gap: 70px;
    margin-top: 50px;

    @media(max-width: 390px) {
        flex-direction: column;
        justify-content: center;
        gap: 19px;
    }

    .coffe {
        max-width: 32.3rem;
        min-height: 468px;
        border-radius: 48px;
        padding: 2.6rem 0;

        color: #FFFFFF;

        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;

        strong {
            font-weight: 600;
            font-size: 2rem;
            line-height: 157%;
        }

        h3 {
            font-weight: 600;
            font-size: 3.2rem;
            line-height: 157%;
        }

        p {
            max-width: 26.3rem;
            margin: 1.2rem auto 2.9rem;
        }
    }

    .coffe:nth-child(1) {
        background: linear-gradient(202.65deg, #F6C7C5 4.72%, #C27D7A 102.83%);
    }

    .coffe:nth-child(2) {
        background: linear-gradient(202.65deg, 
            rgba(250, 250, 250, 0.95) 4.72%, 
            rgba(84, 21, 17, 0.58) 102.83%
        );
    }

    .coffe:nth-child(3) {
        background: linear-gradient(202.65deg, 
            rgba(10, 9, 9, 1) 4.72%, 
            rgba(84, 21, 17, 1) 102.83%
        );
    }
`

export const SectionCroissantsContainer = styled.section`
    max-width: ${(props) => props.theme['max-container']};
    min-height: 44.9rem;
    margin: 9rem auto 0;

    padding: 64px 0 0 42px;
    background: url(${bgCroissants}) no-repeat right 0px top 0px;

    @media(max-width: 390px) {
        padding: 0;
        margin: 3rem auto 0; 
        text-align: center;

        min-height: 51rem;
        background: url(${bgCroissants}) no-repeat right 50px top 250px / 296px;
    }

    strong {
        font-weight: 600;
        font-size: 2rem;
        line-height: 4rem;

        color: ${(props) => props.theme['pink-100']};
        background-color: #FFFFFF;
        border-radius: 47px;
        padding: 5px 14px 3px;

        @media(max-width: 390px) {
            display: none;   
        }
    }

    h2 {
        font-weight: 700;
        font-size: 8rem;
        line-height: 84px;

        color: ${(props) => props.theme['brand-700']};
        position: relative;

        @media(max-width: 390px) {
            font-size: 3.6rem;
        }

        &::after {
            content: '';
            width: 40px;
            height: 1px;
            background-color: ${(props) => props.theme['brand-800']};

            position: absolute;
            bottom: -10px;
            left: 0;

            @media(max-width: 390px) {
                left: 50%;
                transform: translate(-50%, 0);
            }
        }
    }

    h3 {
        font-weight: 500;
        font-size: 4rem;
        line-height: 104.5%;
        margin-top: 30px;

        color: ${(props) => props.theme['brand-800']};

        @media(max-width: 390px) {
            display: none;
        }   
    }

    p {
        max-width: 30.7rem;
        margin: 13px 0 10px;

        font-weight: 400;
        font-size: 1.6rem;
        line-height: 157%;
        color: ${(props) => props.theme['brand-800']};

        @media(max-width: 390px) {
            margin: 38px auto 26px;   
        }
    }
`

export const SectionDeliveryContainer = styled.section`
    max-width: 111.5rem;
    height: 36.8rem;
    margin: 126px auto 0;

    padding-right: 3rem;
    border-radius: 48px;
    color: #FFF;

    background: linear-gradient(202.65deg, 
        rgba(243, 199, 196, 0.95) 4.72%, 
        rgba(84, 21, 17, 0.95) 81.94%
    );

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    position: relative;

    @media(max-width: 390px) {
        max-width: 32.6rem;
        padding: 4.4rem 2.6rem;
        margin: 50px auto 0;
    }

    h2 {
        font-weight: 700;
        font-size: 4.8rem;
        line-height: 104.5%;

        @media(max-width: 390px) {
            font-size: 3.6rem;
            text-align: center;
        }
    }

    p {
        font-size: 16px;
        line-height: 157%;
        margin: 29px 0 64px;

        @media(max-width: 390px) {
            text-align: center;
        }
    }

    .btn-primary {
        min-width: 28.1rem;

        @media(max-width: 390px) {
            min-width: initial;
        }
    }

    img {
        position: absolute;
        left: 0;
        bottom: 47px;

        @media(max-width: 390px) {
            display: none;
        }
    }
`

export const SectionAboutUsContainer = styled.section`
    margin: 0 auto;
    padding: 181px 4.2rem 0;

    display: grid;
    grid-template-columns: 449px 338px;
    gap: 0 150px;
    justify-content: center;

    position: relative;

    strong, h2, h3 {
        color: ${(props) => props.theme['brand-700']};
    }

    @media(max-width: 390px) {
        grid-template-columns: 1fr;
        gap: 14px 0;
    }

    div {
        strong {
            font-weight: 500;
            font-size: 2rem;
            line-height: 104.5%;
        }

        h2 {
            font-weight: 700;
            font-size: 4.8rem;
            line-height: 104.5%;

            @media(max-width: 390px) {
                font-size: 3.2rem;
            }
        }
    }

    div {
        h3 {
            font-weight: 700;
            font-size: 1.6rem;
            line-height: 104.5%;
            margin-bottom: 28px;

            @media(max-width: 390px) {
                margin-bottom: 21px;
            }
        }

        div {
            display: grid;
            gap: 32px;
        }

        p {
            font-size: 1.6rem;
            line-height: 157%;

            color: ${(props) => props.theme['brand-800']};
        }
    }

    .bg-coffes {
        position: absolute;
        top: -100px;
        left: 0;
        z-index: -1;

        width: 100%;

        @media(max-width: 390px) {
            top: 208px;
        }
    }
`

export const SectionAddressContainer = styled.section`
    max-width: 111.7rem;
    height: 45.7rem;

    color: #FFFFFF;
    background: linear-gradient(202.65deg, rgba(84, 21, 17, 0.66) 4.72%, #F3C7C4 102.83%);
    border-radius: 48px;
    margin: 226px auto 0;

    display: grid;
    grid-template-columns: 1fr 373px;
    position: relative;

    @media(max-width: 390px) {
        margin: 60px auto 0;
        grid-template-columns: 1fr;
        max-width: 33.7rem;
        height: initial;
        border-radius: 48px;
        overflow: hidden;
    }

    &::after {
        content: '';
        display: block;
        width: 100%;
        max-width: 630px;
        height: 562px;

        position: absolute;
        top: -75px;
        left: 22%;

        background: url(${bgCoffe2}) no-repeat;

        @media(max-width: 390px) {
            max-width: 16.5rem;
            height: 13.7rem;
            background: url(${bgCoffe2}) no-repeat center / 100%;

            bottom: 90px;
            right: -10px;
            top: 265px;
            left: unset;
        }
    }

    h2 {
        font-weight: 700;
        font-size: 8rem;
        line-height: 84px;
        max-width: 300px;
        margin-bottom: 26px;

        position: relative;

        @media(max-width: 390px) {
            font-size: 6.4rem;
            line-height: 104%;
        }
    }

    h2::after {
        content: '';
        display: block;
        position: absolute;
        bottom: -10px;
        left: 0;

        width: 51px;
        height: 1px;
        background-color: #FFF;
    }

    > div {
        padding: 52px 0px 63px 42px;

        @media(max-width: 390px) {
            padding: 52px 30px 60px 42px;
        }

        p:nth-of-type(1) {
            font-weight: 500;
            font-size: 2rem;
            line-height: 157%;

            margin-bottom: 10px;

            @media(max-width: 390px) {
                font-size: 1.6rem;
            }
        }

        p:nth-of-type(2) {
            font-size: 1.6rem;
            line-height: 157%;
            max-width: 304px;

            margin-bottom: 32px;
        }
    }

    section {
        background-image: linear-gradient(202.65deg, #8F423D 4.72%, #FFFFFF 102.83%);
        border-radius: 0px 48px 48px 0px;

        padding: 52px 32px 63px 40px;

        @media(max-width: 390px) {
            border-radius: 0 0 48px 48px;
            padding: 52px 25px 63px 36px;
            height: 45.7rem;
        }

        h3 {
            font-weight: 700;
            font-size: 4rem;
            line-height: 104.5%;

            position: relative;

            @media(max-width: 390px) {
                font-size: 3.6rem;
            }
        }

        h3::after {
            content: '';
            display: block;
            position: absolute;
            bottom: -34px;
            left: 0;

            width: 100%;
            height: 1px;
            background-color: #FFF;
        }

        p {
            margin: 59px 0 32px;
        }

        div {
            display: flex;
            align-items: center;
            gap: 20px;

            strong {
                font-weight: 400;
            }
        }
    }
`

export const FooterContainer = styled.footer`
    .content {
        max-width: 111.7rem;
        margin: 0 auto;

        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        padding: 72px 0 100px;
        border-top: 1px solid rgba(0 0 0 / 0.08);

        margin-top: 112px;

        @media(max-width: 390px) {
            flex-direction: column;
            max-width: 33rem;
            gap: 4rem;

            padding: 72px 0 40px;
        }

        h4 {

            font-weight: 500;
            font-size: 2rem;
            line-height: 157%;

            color: ${(props) => props.theme['text-750']};
            margin-bottom: 10px;
        }

        div:nth-of-type(1) {
            max-width: 305px;
        }

        div:nth-of-type(2) {
            max-width: 128px;
        }

        ul {
            list-style: none;
        }

        .networks {
            margin-top: 22px;
        }

        p {
            font-weight: 400;
            font-size: 1.6rem;
            line-height: 157%;        
        }

        p, a {
            color: rgba(60, 14, 14, 0.68);
        }
    }

`