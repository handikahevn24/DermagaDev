import React, { Component } from "react";
import Expo from "expo";
import { Container,Accordion, Card,CardItem, Content, Header, Left, Right, Title, Text, Footer, FooterTab, Body, Button, Icon, Subtitle } from "native-base";

export default class HomePage extends Component {
  render() {
    return (
      <Container>
      <Header style={{marginTop:20}}>
          <Left>
            <Button transparent>
              <Icon name='home' />
            </Button>
          </Left>
          <Body>
            <Title>SI Kensi</Title>
            <Subtitle style={{fontSize:8}}>Sistem Informasi Monitoring Siswa</Subtitle>
          </Body>
          <Right />
        </Header>
      <Content>
        <Card>
          <CardItem header bordered>
          <Text>Kelas X TKJ 1</Text>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Fulan | Alpa
                </Text>
              </Body>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Si Fulan | Ijin
                </Text>
              </Body>
          </CardItem>
           <CardItem footer>
            <Text>Guru : Bapak Guru</Text>
           </CardItem>
           <CardItem header bordered>
          <Text>Kelas X TKJ 2</Text>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Dilan | Sakit
                </Text>
              </Body>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Si Dulan | Ijin
                </Text>
              </Body>
          </CardItem>
           <CardItem footer>
            <Text>Guru : Ibu Guru</Text>
           </CardItem>
           <CardItem header bordered>
          <Text>Kelas X TKJ 3</Text>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Fulan | Alpa
                </Text>
              </Body>
          </CardItem>
          <CardItem bordered>
              <Body>
                <Text>
                    Si Fulan | Ijin
                </Text>
              </Body>
          </CardItem>
           <CardItem footer>
            <Text>Guru : Ibu guru</Text>
           </CardItem>
         </Card>
      </Content>
      <Footer>
          <FooterTab>
            <Button>
              {/* <Icon name="home" /> */}
              <Text>Sistem Informasi SMK Negeri 1 Sindang</Text>
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}