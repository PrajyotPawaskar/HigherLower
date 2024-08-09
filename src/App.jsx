import './App.css'
import Card from './components/Card'
import Button from './components/Button'
import Score from './components/Score'
import { useState, useEffect } from 'react'
import Question from './components/Question'
function App() {

  const [data, setData] = useState([{ optionName: "", src: "", number: 0 }, { optionName: "", src: "", number: 0 }])
  const [score, setScore] = useState(0)
  let [play, setPlay] = useState(true)
  const game = [
    {
      optionName: "Jupiter",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcCNvVm7_CSu5dTF_uCRfaCezSynil_bsdZg&s",
      number: 1000000
    },
    {
      optionName: "BMW",
      src: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/BMW.svg/800px-BMW.svg.png",
      number: 6120000
    },
    {
      optionName: "ESPN",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSBORYrvanF3KM4y7k2wck-uV3yxH7YK0Tkw&s",
      number: 24900000
    },
    {
      optionName: "Cruise",
      src: "https://www.carnival.com/-/media/images/ships/carnival-luminosa-open-for-sale-hero-mobile.jpg",
      number: 36000
    },
    {
      optionName: "Golden Retriever",
      src: "https://dogtime.com/wp-content/uploads/sites/12/2024/03/GettyImages-1285465107-e1710251441662.jpg?w=1024",
      number: 1830000
    },
    {
      optionName: "Exam Results",
      src: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-05/02/full/1714639825-3748.jpg",
      number: 60500
    },
    {
      optionName: "Toy Story",
      src: "https://m.media-amazon.com/images/M/MV5BMTgxOTY4Mjc0MF5BMl5BanBnXkFtZTcwNTA4MDQyMw@@._V1_FMjpg_UX1000_.jpg",
      number: 246000
    },
    {
      optionName: "Audi",
      src: "https://uploads.audi-mediacenter.com/system/production/media/1282/images/bde751ee18fe149036c6b47d7595f6784f8901f8/AL090142_web_2880.jpg?1698171883",
      number: 4090000
    },
    {
      optionName: "The Dark Knight",
      src: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      number: 673000
    },
    {
      optionName: "Germany",
      src: "https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png",
      number: 1220000
    },
    {
      optionName: "Amsterdam",
      src: "https://cms.finnair.com/resource/blob/695338/51db80b31ed1cdf10a5520699a8e673c/amsterdam-main-data.jpg?impolicy=crop&width=2550&height=2550&x=725&y=0",
      number: 2240000
    },
    {
      optionName: "Snowboard",
      src: "https://images.napali.app/global/roxy-products/all/default/large/23sn069_roxy,l_mul_frt1.jpg",
      number: 550000
    },
    {
      optionName: "Qatar Airways",
      src: "https://d21buns5ku92am.cloudfront.net/69647/images/490377-WRAP%20UP-a3afe8-original-1687769659.jpg",
      number: 2740000
    },
    {
      optionName: "William Shakespear",
      src: "https://static.toiimg.com/thumb/msid-108527236,width-960,height-1280,resizemode-6.cms",
      number: 550000
    },
    {
      optionName: "Subway",
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4mn74PTlVHE-UElXmyr5dVzzs8X4MDG8pzQ&s",
      number: 6120000
    }
  ]

  useEffect(() => {
    alert('Select option which has higher google searches per month!!')
    generateOptions()
  }, [])

  const generateOptions = () => {
    const firstIndex = Math.floor(Math.random() * game.length)
    let secondIndex
    do {
      secondIndex = Math.floor(Math.random() * game.length)
    } while (secondIndex === firstIndex)

    setData([
      { optionName: game[firstIndex].optionName, src: game[firstIndex].src, number: game[firstIndex].number },
      { optionName: game[secondIndex].optionName, src: game[secondIndex].src, number: game[secondIndex].number }
    ])
  }

  const compare = (ans) => {
    if (play) {
      const [current, next] = data
      const isCorrect =
        (ans === 'Higher' && current.number >= next.number) ||
        (ans === 'Lower' && current.number <= next.number)

      if (isCorrect) {
        setScore(prev => prev + 1)
        const newSecondIndex = Math.floor(Math.random() * game.length)
        setData([{ number: next.number, src: next.src, optionName: next.optionName }, { optionName: game[newSecondIndex].optionName, number: game[newSecondIndex].number, src: game[newSecondIndex].src }])
      } else {
        setPlay(false)
      }
    }
  }

  const updateGame = () => {
    setPlay(true)
    generateOptions()
    setScore(0)
  }

  return (
    <>
      <div className="flex flex-col md:flex-row justify-center">
        {data?.map((option, index) => (
          <Card optionNumber={option.number} src={option.src} optionName={option.optionName} key={index} />
        ))}
      </div>
      <Question data={data} />
      <Button compare={compare} value="Higher" />
      <Button compare={compare} value="Lower" />
      <Score score={score} />
      {!play && <div>Game Over</div>}
      {!play && <button onClick={updateGame}>Play Again</button>}
    </>
  )
}

export default App