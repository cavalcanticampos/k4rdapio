import styled from 'styled-components'

const Header = styled.div`
  height: ${props => props.isExpanded ? '110px' : '325px'};
  background-color: #1a1a1a;
  color: white;
  display: flex;
  flex-direction: ${props => props.isExpanded? 'row' : 'column'};
  transition: 0.5s;
  position: fixed;
  top: 0;
  width: 100%;
`

const Logo = styled.img`
  display: flex;
  margin: ${props => props.isExpanded? '0' : '32px auto 0 auto'};
  width: ${props => props.isExpanded? '110px' : 'initial'};
  `
  
const Container = styled.div`
  &:nth-child(n+1) {
    margin-top: ${props => props.isExpanded ? '118px' : '350px'};
  }
`
  
const Collapsed = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${props => props.isExpanded? 'auto' : '0 auto 0 auto'};
  `
  
const Localizator = styled.div`
  margin: auto auto 12px 16px;
  display: ${props => props.isExpanded ? 'none' : 'initial'};
`

const Section = styled.div`
  &.promo {
    display: ${props => props.isPromoCollapsed ? 'none' : 'initial'};
  }

  &.combos {
    display: ${props => props.isComboCollapsed ? 'none' : 'initial'};
  }

  &.burgers {
    display: ${props => props.isBurguersCollapsed ? 'none' : 'initial'};
  }

`

export { Collapsed, Container, Header, Logo, Localizator, Section }