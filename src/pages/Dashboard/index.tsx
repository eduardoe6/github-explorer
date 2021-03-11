import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Form, Repositories, Title } from './styles';

const Dashboard: React.FC = () => {
   return (
      <>
         <img src={logoImg} alt="Github Explorer"></img>
         <Title>Explore repositórios no Github </Title>
         <Form action="">
            <input placeholder="Digite o nome do repositório" />
            <button type="submit">Pesquisar</button>
         </Form>
         <Repositories>
            <a href="teste">
               <img src="https://avatars.githubusercontent.com/u/36178378?s=460&u=6a13081b0ec1137bf6f0e93828c49ade47c34168&v=4" alt="Avatar github" />
               <div>
                  <strong>eduardoe6/nlw4-nodejs</strong>
                  <p>Projeto desenvolvido na Next Week Level 4 (NLW4) da Rocketseat.</p>
               </div>
               <FiChevronRight size={20} />
            </a>
         </Repositories>
      </>
   );
}

export default Dashboard