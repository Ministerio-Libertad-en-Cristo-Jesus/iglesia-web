interface Props {
  admin: boolean
  small: boolean
}

const VerifiedIcon = ({ admin, small }: Props) => {
  return (
    <svg className={`${small ? 'w-4' : 'w-4 md:w-7'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27.18 27.19">
      <defs>
        <style>
          {`.cls-23{fill:#29abe2;}.cls-23,.cls-25{fill:#fbb03b;}.cls-25,.cls-24{fill-rule:evenodd;}.cls-24{fill:#fff;}`}
        </style>
      </defs>
      <g id="Capa_2" data-name="Capa 2">
        <g id="Capa_1-2" data-name="Capa 1">
          <path className={`${admin ? 'fill-[#fbb03b]': 'fill-[#29abe2]'}`} d="M25.94,10.22a5.25,5.25,0,0,1-1.23-3,5.21,5.21,0,0,0-4.78-4.77,5.22,5.22,0,0,1-3-1.23,5.19,5.19,0,0,0-6.76,0,5.22,5.22,0,0,1-3,1.23A5.21,5.21,0,0,0,2.47,7.25a5.25,5.25,0,0,1-1.23,3,5.21,5.21,0,0,0,0,6.75,5.28,5.28,0,0,1,1.23,3,5.21,5.21,0,0,0,4.78,4.78,5.09,5.09,0,0,1,3,1.23A5.23,5.23,0,0,0,17,26a5.09,5.09,0,0,1,3-1.23,5.21,5.21,0,0,0,4.78-4.78,5.28,5.28,0,0,1,1.23-3,5.21,5.21,0,0,0,0-6.75ZM19.89,11.4l-6.8,6.8a1.71,1.71,0,0,1-2.4,0l-3.4-3.4a1.69,1.69,0,0,1,0-2.38,1.69,1.69,0,0,1,2.38,0l2.2,2.19L17.49,9a1.71,1.71,0,0,1,1.19-.48,1.67,1.67,0,0,1,1.19.5,1.69,1.69,0,0,1,0,2.38Z"/>
          <path className="cls-24" d="M20.37,10.2a1.72,1.72,0,0,1-.48,1.2l-6.8,6.8a1.71,1.71,0,0,1-2.4,0l-3.4-3.4a1.69,1.69,0,0,1,0-2.38,1.69,1.69,0,0,1,2.38,0l2.2,2.19L17.49,9a1.71,1.71,0,0,1,1.19-.48,1.67,1.67,0,0,1,1.19.5A1.74,1.74,0,0,1,20.37,10.2Z"/>
        </g>
      </g>
    </svg>
  )
}
 
export default VerifiedIcon