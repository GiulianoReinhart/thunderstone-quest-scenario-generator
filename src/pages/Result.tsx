import {motion} from 'framer-motion'
import {Navigate} from 'react-router-dom'
import {GeneratedData} from '../App'
import {ReactComponent as LevelOneIcon} from '../img/levels/level_1.svg'
import {ReactComponent as LevelTwoIcon} from '../img/levels/level_2.svg'
import {ReactComponent as LevelThreeIcon} from '../img/levels/level_3.svg'
import {ReactComponent as LevelFourIcon} from '../img/levels/level_4.svg'
import {ReactComponent as LevelFiveIcon} from '../img/levels/level_5.svg'
import {ReactComponent as LevelSixIcon} from '../img/levels/level_6.svg'
import {StyledResult} from './Result.styled'

type Props = {
  generatedData: GeneratedData | null
}

export const Result = ({generatedData}: Props) => {
  const MotionStyledResult = motion(StyledResult)

  return !generatedData ? (
    <Navigate to="/" replace={true} />
  ) : (
    <MotionStyledResult transition={{duration: 0.4}} initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0}}>
      <section id="market">
        <div id="weapons">
          <h2>Weapons</h2>
          <div className="card-container">
            {generatedData.weapons?.map(weapon => (
              <div className="card-box">
                <span>{weapon}</span>
              </div>
            ))}
          </div>
        </div>
        <div id="spells">
          <h2>Spells</h2>
          <div className="card-container">
            {generatedData.spells?.map(spell => (
              <div className="card-box">
                <span>{spell}</span>
              </div>
            ))}
          </div>
        </div>
        <div id="items">
          <h2>Items</h2>
          <div className="card-container">
            {generatedData.items?.map(item => (
              <div className="card-box">
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section id="heroes">
        <h2>Heroes</h2>
        <div className="card-container">
          {generatedData.heroes &&
            Object.keys(generatedData.heroes).map(heroClass => (
              <div className="card-box">
                <span>{generatedData.heroes && generatedData.heroes[heroClass]}</span>
                <small>{heroClass}</small>
              </div>
            ))}
        </div>
      </section>
      <section id="enemies">
        <div id="monster-groups">
          <h2>Monster Groups</h2>
          <div className="card-container">
            {generatedData.monsterGroups?.map((monsterGroup, index) => {
              return (
                <div className="card-box">
                  {index === 0 && <LevelOneIcon />}
                  {index === 1 && <LevelTwoIcon />}
                  {index === 2 && <LevelThreeIcon />}
                  <span>{monsterGroup}</span>
                </div>
              )
            })}
          </div>
        </div>
        <div id="guardian">
          <h2>Guardian</h2>
          <div className="card-container">
            <div className="card-box">
              {generatedData.guardian?.level === 4 && <LevelFourIcon />}
              {generatedData.guardian?.level === 5 && <LevelFiveIcon />}
              {generatedData.guardian?.level === 6 && <LevelSixIcon />}
              <span>{generatedData.guardian?.name}</span>
            </div>
          </div>
        </div>
      </section>
      <section id="dungeon-rooms">
        <h2>Dungeon Rooms</h2>
        <div className="card-container">
          {generatedData.rooms &&
            Object.keys(generatedData.rooms).map(
              level =>
                generatedData.rooms &&
                generatedData.rooms[Number(level)].map(room => (
                  <div className="card-box">
                    {Number(level) === 1 && <LevelOneIcon />}
                    {Number(level) === 2 && <LevelTwoIcon />}
                    {Number(level) === 3 && <LevelThreeIcon />}
                    <span>{room}</span>
                  </div>
                ))
            )}
        </div>
      </section>
    </MotionStyledResult>
  )
}
