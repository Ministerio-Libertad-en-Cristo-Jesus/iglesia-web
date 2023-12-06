import Orlando from '../components/componentSVG/orlando'
import Paricua from '../components/componentSVG/paricua'
import { type MapSlideInfoType, type MapSelectInfoType } from '../lib/definitions'

export const mapsToSelect: MapSelectInfoType[] = [
  {
    name: 'orlando',
    name2: 'paricua',
    title: 'Sede Principal',
    direction: '8810 Commodity Cir #26, Orlando, FL 32819'
  },
  {
    name: 'paricua',
    name2: 'orlando',
    title: 'Sede Venezuela',
    direction: 'Paricua, Carretera Turén - Santa Cruz, Casa S/N'
  }
]

export const mapSlides: MapSlideInfoType[] = [
  {
    name: 'orlando',
    position: [28.443849, -81.4331344],
    popup: 'Sede Principal Orlando, Florida',
    stateSvg: <Orlando />,
    link: 'https://www.google.com/maps/dir//8810+Commodity+Cir+%2326,+Orlando,+FL+32819/@28.443849,-81.4331344,17z/data=!3m1!5s0x88e77e78ee927099:0xaea3b5cb456c51a4!4m8!4m7!1m0!1m5!1m1!1s0x88e77e7f2aeaaaab:0x4823e0ba11bd7447!2m2!1d-81.4305595!2d28.4438443?entry=ttu'
  },
  {
    name: 'paricua',
    position: [9.293266, -68.953711],
    popup: 'Sede Venezuela Paricua Portuguesa',
    stateSvg: <Paricua />,
    link: 'https://www.google.com/maps/dir//9.2932726,-68.9536908/@9.2932932,-68.9540702,18z?entry=ttu'
  }
]
