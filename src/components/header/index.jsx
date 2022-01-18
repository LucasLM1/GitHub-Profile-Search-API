import { FiSearch } from 'react-icons/fi';
import { useState, useContext} from 'react';
import client from '../../service/client';
import { context } from '../../context';

import {
    HeaderSection,
    HeaderTitle,
    HeaderInputContainer,
    HeaderInput,
    HeaderSearchButton
} from './styles';

const Header = () => {
    const ctx = useContext(context);
    const [searchValue, setSearchValue] = useState('');

    // useEffect(() => {
    //     (async function getUserData() {
    //         try {
    //             const response = await client.get(`/${props.username}`);
    //             const repos = await client.get(`/${props.username}/repos`);
 
    //             ctx.setUserData(response.data);
    //             ctx.setUserRepos(repos.data);
    //         } catch(err) {
    //             console.log(err);
    //         }
    //     })()
    // }, [props.username]);

    async function getUserData(){
        try{
            const response = await client.get(`/${searchValue}`);
            const repos = await client.get(`/${searchValue}/repos`);

            ctx.setUserData(response.data)
            ctx.setUserRepos(repos.data);
        }
        catch(err) {
            console.log(err);
        }
    }

    return(
        <HeaderSection>
        <HeaderTitle>Github Profile</HeaderTitle>
        <HeaderInputContainer>
            <HeaderInput type="text" value={searchValue} onChange={e => setSearchValue(e.target.value)} />
            
            <HeaderSearchButton onClick={getUserData}>
                <FiSearch size={15} />
            </HeaderSearchButton>
        </HeaderInputContainer>
    </HeaderSection>
    );
};

export default Header;