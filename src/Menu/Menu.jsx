import React, { useState, useEffect } from 'react'
import { Container, Collapsed, Header, Logo, Localizator, Section } from './styles'
import k4Logo from '../images/k4-logo.jpg'
import { DownOutlined, UpOutlined} from '@ant-design/icons'

const Menu = () => {
  const [isExpanded, setExpand] = useState(false)
  const [isPromoCollapsed, setPromoCollapse] = useState(false)
  const [isComboCollapsed, setComboCollapse] = useState(false)
  const [isBurguersCollapsed, setBurguersCollapse] = useState(false)

  useEffect(() => {
    window.onscroll = function() {onShrinkScreen()}
  }, [])

  const onShrinkScreen = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      setExpand(true)
    } else {
      setExpand(false)
    }
  }

  const expandPromoSection = () => {
    setPromoCollapse(!isPromoCollapsed)
  }

  const expandComboSection = () => {
    setComboCollapse(!isComboCollapsed)
  }

  const expandBurguersSection = () => {
    setBurguersCollapse(!isBurguersCollapsed)
  }

  return(
    <Container>
      <Header isExpanded={isExpanded}>
        <Logo isExpanded={isExpanded} src={k4Logo} alt={"K4 Lounge Logo"} />
        <Collapsed isExpanded={isExpanded}>
          <h3 style={{ margin: "0 auto 0 auto", fontWeight: "500" }}>K4 LOUNGE</h3>
          <p style={{ margin: "2px auto auto auto", fontStyle: "italic" }}>
            Nem bar, nem pub, o (K)ralho⁴
            <span role="img" aria-label="two cups of beer">🍻</span>
          </p>
        </Collapsed>
        <Localizator isExpanded={isExpanded} >
          <span role="img" aria-label="pin localizator">📌</span>
          <span style={{ fontSize: "12px", marginLeft: "4px"}} >R. Visc. de Pôrto Seguro, 128 - Flores</span>
        </Localizator>
      </Header>
      <div>
        <h2 style={{
          textAlign: "left",
          margin: "16px",
          borderBottom: "solid 1.5px",
          color: "#3A3A3A"
        }} onClick={expandPromoSection}>
          Promoção
          {
            isPromoCollapsed ?
            <span style={{ float: "right"}}><DownOutlined /></span>
            :
            <span style={{ float: "right"}}><UpOutlined /></span>
          }
        </h2>
        <Section className="promo" isPromoCollapsed={isPromoCollapsed}>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              3 por 10 de X-Salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Pra acabar com a Larica
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$15,00
            </div>
          </div>
          <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              3 por 10 de Kikão
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Pra quem falar "cachorro quente" é R$12,00!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$10,00
            </div>
          </div>
        </Section>
      </div>
      <div>
        <h2 style={{
          textAlign: "left",
          margin: "16px",
          borderBottom: "solid 1.5px",
          color: "#3A3A3A"
        }} onClick={expandComboSection}>
          Combos
          {
            isComboCollapsed ?
            <span style={{ float: "right"}}><DownOutlined /></span>
            :
            <span style={{ float: "right"}}><UpOutlined /></span>
          }
        </h2>
        <Section className="combos" isComboCollapsed={isComboCollapsed}>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Batata Frita
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Feitas com amor de forma caseira e bastante sabor!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$10,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Batata Frita + Bacon + Cheddar = s2
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              No capricho!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$18,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Isca de Carne + Batata Frita
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              100% saborosa
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$25,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Isca de Carne + Nuggets
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              bom demaixxxx
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$20,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Calabresa + Nuggets OU Batata Frita
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Escolha com sabedoria tá bom? haha
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$20,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              TUDÃO
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              ISSO MESMO! Tudo que você leu aqui nessa seção! (Calabresa, nuggets, isca de carne e batata frita)
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$50,00
            </div>
            {/* <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div> */}
          </div>
        </Section>
      </div>
      <div>
        <h2 style={{
          textAlign: "left",
          margin: "16px",
          borderBottom: "solid 1.5px",
          color: "#3A3A3A"
        }} onClick={expandBurguersSection}>
          Sanduíche Artesanal
          {
            isBurguersCollapsed ?
            <span style={{ float: "right"}}><DownOutlined /></span>
            :
            <span style={{ float: "right"}}><UpOutlined /></span>
          }
        </h2>
        <Section className="burgers" isBurguersCollapsed={isBurguersCollapsed}>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne & Queijo sem salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Feitas com amor de forma caseira e bastante sabor!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$10,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne & Queijo com salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Feitas com amor de forma caseira e bastante sabor!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$12,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo & Bacon sem salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$13,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo & Bacon com salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$15,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo, Bacon & Cebola caramelizada sem salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo coberto com cebola caramelizada pra te deixar louco!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$15,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo, Bacon & Cebola caramelizada com salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo coberto com cebola caramelizada pra te deixar louco!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$17,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo, Bacon,  Cebola caramelizada & Calabresa sem salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo coberto com cebola caramelizada pra te deixar louco!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$20,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Carne, Queijo, Bacon,  Cebola caramelizada & Calabresa com salada
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Um carne artesanal com queijo suculento e bacon bem fritinhooo coberto com cebola caramelizada pra te deixar louco!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$22,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              Empanado de Frango
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Acompanhados na cebola e requeijão pra te enlouquecer!!!
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$12,00
            </div>
            <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div>
          </div>
          <div>
            <h3 style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#949494"
            }}>
              K-Vegan
            </h3>
            <p style={{
              textAlign: "left",
              margin: "4px 16px",
              color: "#BEBEBE"
            }}>
              Carne de Soja, Brocolis e Tomate hmmmmmmm...
            </p>
            <div style={{
              textAlign: "left",
              margin: "0 16px",
              fontWeight: 600,
              fontSize: "large"
            }}>
              R$15,00
            </div>
            {/* <div style={{ display: "flex", margin: "16px", borderBottom: "solid 0.5px #BEBEBE"}}></div> */}
          </div>
        </Section>
      </div>
    </Container>
  )
}

export default Menu