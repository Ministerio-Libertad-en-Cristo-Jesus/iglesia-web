import { type SelectorMapType } from '../../../lib/definitions'
import CheckMap from './CheckMap'
import { mapsToSelect } from '../../../lib/mapsInfo'

const SelectorMap = ({ whatSelected, changeMap }: SelectorMapType) => {
  return (
    <footer className="flex justify-center gap-6 lg:gap-10 mt-16 w-full">
      {
        mapsToSelect.map((map, index) => (
          <CheckMap
          key={index}
          name={map.name}
          name2={map.name2}
          whatSelected={whatSelected}
          changeMap={changeMap}
          title={map.title}
          direction={map.direction}
          isSelected={whatSelected[map.name]}
          />
        ))
      }
    </footer>
  )
}

export default SelectorMap
