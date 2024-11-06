import Profile from './components/Profile'

export default function App(){
  return(
    <div>
      <Profile 
        avatar={'../../public/avatar.png'}
        name={'júlia Moreira'}
        bio={'Maquiadora'}
        email={'juli.costa@aluno.ce.gov.br'}
        phone={'+55 85 99256-3565'}
        githubUrl={'https://github.com/a-juliamoreira'}
        instagramUrl={'https://instagram.com/_juliacoss'}
        twitterUrl={'https://x.com.br/juliacoss'}
      />
    </div>
  )
}
