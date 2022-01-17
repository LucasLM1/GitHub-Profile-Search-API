import {
    Container,
    Name,
    Username,
    Description
} from './style';

const UserDetails = props => {
    return (
        <Container>
            <Name>{props.name}</Name>
            <Username>{props.login}</Username>

            {/* interrogração adicionada ao código pois caso o usuário não tenha uma bio */}
            {/* o elemento que a mesma representa não será criado  */}
            <Description>{props?.bio}</Description> 
        </Container>
    );
}

export default UserDetails