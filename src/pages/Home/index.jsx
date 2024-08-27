import { 
    CoffesContainer, 
    HeaderContainer, 
    NavContainer, 
    SectionCoffesContainer, 
    SectionCroissantsContainer,
    SectionDeliveryContainer,
    SectionAboutUsContainer,
    SectionAddressContainer,
    FooterContainer
} from "./styles";

import backgroundHeader from '../../assets/images/header.png';
import backgroundHeaderMobile from '../../assets/images/header-mobile.png';
import imgCapuccino from '../../assets/images/capuccino.png';
import imgCoffeMilk from '../../assets/images/coffe-with-milk.png';
import imgCoffeBlack from '../../assets/images/coffe-black.png';
import bgDelivery from '../../assets/background/bg-delivery.png';
import bgCoffes from '../../assets/background/bg-coffes.png';
import iconGPS from '../../assets/images/gps.svg';
import iconInstagram from '../../assets/icons/icons8-instagram-24.svg';
import iconFacebook from '../../assets/icons/icons8-facebook-24.svg';
import iconWhatsapp from '../../assets/icons/icons8-whatsapp-25.svg';
import iconMenu from '../../assets/icons/menu.svg';

export function Home() {
    return (
        <>
            <NavContainer>
                <img src="logo.png" alt="" />
                <ul>
                    <li>
                        <a href="#">Meow Café</a>
                    </li>
                    <li>
                        <a href="#" className="active">Início</a>
                    </li>
                    <li>
                        <a href="#products">Produtos</a>
                    </li>
                    <li>
                        <a href="#about">Sobre</a>
                    </li>
                </ul>
                <div>
                    <a href="#">Login</a>
                    <a href="#">Delivery</a>
                </div>
                <img src={iconMenu} className="btn-menu" alt="" />
            </NavContainer>
            <HeaderContainer>
                <div className="headline">
                    <strong>Sabor inesquecível</strong>
                    <h1>Meow café</h1>
                    <p>
                        Um lugar perfeito para pais de pets e amantes de café. Nossa cafeteria tem um espaço confortável para você e seu melhor amigo. 
                    </p>
                </div>
                <img className="bg-header" src={backgroundHeader} alt="" />
                <img className="bg-header-mb" src={backgroundHeaderMobile} alt="" />
            </HeaderContainer>
            <main>
                <SectionCoffesContainer>
                    <h2 className="title" id="#products">Cafés</h2>
                    <p>
                         nossos cafés exclusivos pensados e preparados por nossos baristas renomados. 
                    </p>
                    <a href="#" className="link">Veja Todos ></a>

                    <CoffesContainer>
                        <article className="coffe">
                            <img src={imgCapuccino} alt="" />
                            <strong>R$ 24,00</strong>
                            <h3>Capuccino</h3>
                            <p>Café expresso, leite vaporizado, espuma e um toque de caramelo.</p>
                            <a href="#" className="btn-primary">Delivery</a>
                        </article>

                        <article className="coffe">
                            <img src={imgCoffeMilk} alt="" />
                            <strong>R$ 16,00</strong>
                            <h3>Café ao Leite</h3>
                            <p>O clássico, amado pelos brasileiros, com um toque de sofisticação!</p>
                            <a href="#" className="btn-primary">Delivery</a>
                        </article>

                        <article className="coffe">
                            <img src={imgCoffeBlack} alt="" />
                            <strong>R$ 12,00</strong>
                            <h3>Café Preto</h3>
                            <p>Grãos selecionados feitos no seu método de preparo favorito.</p>
                            <a href="#" className="btn-primary">Delivery</a>
                        </article>
                    </CoffesContainer>
                </SectionCoffesContainer>

                <SectionCroissantsContainer>
                    <strong>R$ 12,00</strong>
                    <h2>Croissants</h2>
                    <h3>Conheça nossa receita</h3>
                    <p>
                        A nossa receita de Croissant vai te surpreender. Croissants clássicos ou recheados!
                    </p>
                    <a href="#" className="link">Todos os croissants ></a>
                </SectionCroissantsContainer>
                <SectionDeliveryContainer>
                    <h2>Levamos até você!</h2>
                    <p>Estamos nos principais aplicativos de Delivery!</p>
                    <a href="#" className="btn-primary">Delivery</a>
                    <img src={bgDelivery} alt="" />
                </SectionDeliveryContainer>
                
                <SectionAboutUsContainer>
                    <div>
                        <strong>Sobre nós</strong>
                        <h2 id="#about">
                            Nós oferecemos uma experiência inesquecível para amantes de café e pais de pet!
                        </h2>
                    </div>
                    <div>
                        <h3>O melhor lugar para apreciar o seu café</h3>
                        <div>
                            <p>
                                No Meow Cafe, priorizamos a criação de um espaço onde tanto os seres humanos quanto seus animais de estimação possam relaxar e desfrutar.
                            </p>
                            <p>
                                Nosso design interior é inspirado na harmonia e conforto, com sofás aconchegantes, iluminação suave e uma decoração que remete à natureza e à alegria que os animais trazem para nossas vidas.
                            </p>
                        </div>
                    </div>
                    <img src={bgCoffes} alt="" className="bg-coffes"/>
                </SectionAboutUsContainer>
                <SectionAddressContainer>
                   <div>
                        <h2>Meow Enjoy</h2>
                        <p>Todos os sábados e domingos</p>
                        <p>Venha tomar o seu brunch com a gente!</p>
                        <a href="#" className="link">Faça uma reserva ></a>
                    </div>
                    <section>
                        <h3>Onde estamos</h3>
                        <p>Você pode nos encontrar no endereço:</p>
                        <div>
                            <img src={iconGPS} alt="" />
                            <strong>Rua do Miado 234, Gatolândia</strong>
                        </div>
                    </section>
                </SectionAddressContainer>
            </main>
            <FooterContainer>
                <div className="content">
                    <div>
                        <h4>Informações</h4>
                        <p>
                            Todos os direitos reservados Meow Cafe Ltda. <br/><br/>
                            Um lugar perfeito para pais de pets e amantes de café!
                        </p>
                        <div className="networks">
                            <a href="#">
                                <img src={iconInstagram} alt="" />
                            </a>
                            <a href="#">
                                <img src={iconFacebook} alt="" />
                            </a>
                            <a href="#">
                                <img src={iconWhatsapp} alt="" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4>Links Úteis</h4>
                        <ul>
                            <li>
                                <a href="#">Início</a>
                            </li>
                            <li>
                                <a href="#">Sobre</a>
                            </li>
                            <li>
                                <a href="#">Produtos</a>
                            </li>
                            <li>
                                <a href="#">Delivery</a>
                            </li>
                            <li>
                                <a href="#">Login</a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4>Institucional</h4>
                        <ul>
                            <li>
                                <a href="#">CNPJ: XX. XXX. XXX/0001-XX</a>
                            </li>
                            <li>
                                <a href="#">Endereço: Lorem ipsum, 64</a>
                            </li>
                            <li>
                                <a href="#">Política de Privacidade</a>
                            </li>
                            <li>
                                <a href="#">Dúvidas Frequentes</a>
                            </li>
                            <li>
                                <a href="#">Ajuda</a>
                            </li>
                            <li>
                                <a href="#">Acessibilidade</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </FooterContainer>
        </>
    )
}