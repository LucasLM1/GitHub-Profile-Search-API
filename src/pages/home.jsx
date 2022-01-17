import Container from '../components/container';
import Header from '../components/header';
import UserContainer from '../components/userContainer';
import UserPicture from '../components/userPicture';

export default function Home() {
    return (
        <Container>
            <Header />
            <UserContainer>
            <UserPicture url="https://avatars.githubusercontent.com/u/86297161?v=4" alternativeText="Image" />
            </UserContainer>
        </Container>
    );
}