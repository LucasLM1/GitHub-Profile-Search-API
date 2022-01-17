import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';
import UserDetails from '../components/userDetails'
import UserNumbers from '../components/userNumbers'


export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
            <UserPicture url="https://avatars.githubusercontent.com/u/86297161?v=4" alternativeText="Image" />
            <UserDetails name="Lucas Souza" login="LucasLM1" bio="vc que trabalha com programação, vem fazer um projetin"/>
            <UserNumbers />
            </UserContainer>
        </Container>
    );
}