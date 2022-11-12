import { atom, useRecoilState, useRecoilValue } from 'recoil'

const darkModeAtom = atom({
  key: 'darkMode',
  default: false,
})

function DarkModeSwitch() {
  const [darkMode, setDarkMode] = useRecoilState(darkModeAtom)
  return (
    <input
      type="checkbox"
      checked={darkMode}
      onChange={(e) => setDarkMode(e.currentTarget.checked)}
    />
  )
}


function Button() {
  const darkMode = useRecoilValue(darkModeAtom)
  return (
    <button
      style={{ background: darkMode ? "black" : "white", color: darkMode ? "white" : "black" }}
    >My ui button!</button>
  )
}


export function Atoms() {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  )
}