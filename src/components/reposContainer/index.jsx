import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './style';

const ReposContainer = props => {
    return (
        <Section>
            <Title>Repositórios de {(props.name)?.split(' ')[0]}</Title>
            <ListOfReposContainer>
                {(props?.repos).map(repo => (
                    <Repo onClick={() => window.location.href(repo?.html_url)} key={repo?.id}>
                        <h2>{'Nome do Repositório: ' + repo?.name}</h2>
                        <h2>{'Linguagem usada: ' + repo?.language}</h2>
                        <p>{'Descrição: ' + repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
        </Section>
    );
}

export default ReposContainer;