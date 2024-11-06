import Profile from './components/Profile'

export default function App(){
  return(
    <div>
      <Profile 
        avatar={'../../public/avatar.png'}
        name={'Carlos Daniel'}
        bio={'Jogador de futebol'}
        email={'carlos.uchoa2@aluno.ce.gov.br'}
        phone={'+55 85 99256-3565'}
        githubUrl={'https://github.com/CarloosDaniel'}
        instagramUrl={'https://instagram.com/carlosdaniel.sx'}
        twitterUrl={'https://x.com.br/CarloosDaniel'}
      />
    </div>
  )
}