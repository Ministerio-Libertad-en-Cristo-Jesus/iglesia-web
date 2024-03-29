import BankIcon from "@/app/components/componentSVG/BankIcon";

const PagomovilMethod = () => {
  return (
    <article className="flex flex-col w-full gap-8">
      <header>
        <h3 className='font-noto font-bold text-xl sm:text-2xl text-blueI'>Zelle Pay</h3>
        <p className='font-noto text-sm sm:text-base text-blueI'>Datos de Pago</p>
      </header>
      <div className="flex flex-col sm:flex-row w-full justify-center items-center sm:justify-between bg-[#d6d6d6] rounded-xl p-6 gap-8">
        <figure>
          <BankIcon />
        </figure>

        <div className="flex w-full flex-col gap-4">
          <h3 className="font-black text-xl sm:text-2xl text-center sm:text-start text-blueI">Datos del receptor</h3>
          <div className="">
            <p className="font-medium text-sm sm:text-base text-blueI">Email:<br className="sm:hidden" /> <b>ministerioilcj@gmail.com</b></p>
          </div>
          <p className="font-medium break-words text-xs sm:text-sm text-blueI">Recuerda que al realizar tu diezmo u ofrenda mediante Zelle Pay puedes reportarlo através de nuestro correo electronico: <b>ministerioilcj@gmail.com</b>, si no lo tomaremos como Donación anónima</p>
        </div>
      </div>
    </article>
  );
}
 
export default PagomovilMethod;