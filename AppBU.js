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
            <Title>Dermaga</Title>
            <Subtitle style={{fontSize:5}}>Indramayu Kota Mangga</Subtitle>
          </Body>
          <Right />
        </Header>
      <Content>
        <Card>
          <CardItem header>
          <Text>About Indramayu</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is Google Plus")}>
            <Icon active name="logo-googleplus" />
            <Text>Sejarah Indramayu</Text>
           </CardItem>
           <CardItem button onPress={() => alert("This is Google Plus")}>
            <Icon active name="bookmarks" />
            <Text>Visi Misi Indramayu</Text>
           </CardItem>
           <CardItem button onPress={() => alert("This is Prestasi")}>
            <Icon active name="trophy" />
            <Text>Prestasi Indramayu</Text>
           </CardItem>
         </Card>
         <Card>
          <CardItem header>
          <Text>Pendidikan</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is SMK")}>
            <Icon active name="school" />
            <Text>SD</Text>
           </CardItem><CardItem button onPress={() => alert("This is SMK")}>
            <Icon active name="school" />
            <Text>SMP</Text>
           </CardItem><CardItem button onPress={() => alert("This is SMK")}>
            <Icon active name="school" />
            <Text>SMK</Text>
           </CardItem>
         </Card><Card>
          <CardItem header>
          <Text>Pariwisata</Text>
          </CardItem>
          <CardItem button onPress={() => alert("This is SMK")}>
            <Icon active name="pin" />
            <Text>Wisata</Text>
           </CardItem>
         </Card>
      </Content>
      <Footer>
          <FooterTab>
            <Button>
              <Icon name="home" />
            </Button>
            <Button>
              <Icon name="person" />
            </Button>
          </FooterTab>
        </Footer>
    </Container>
    );
  }
}