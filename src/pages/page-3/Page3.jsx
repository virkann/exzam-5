import React from 'react'
import './page3.css'



import olis from "../../assets/02-page/olis.png";
import mask1 from "../../assets/03-page/mask1.png"


const Page3 = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="text-center border-2 w-[40%] m-auto">
            <p>Главная / Комплексные решения</p>
            <h2 className="text-[50px] text-[#000] font-bold leading-[45px] mt-[10px]">
              Комплексные решения
            </h2>
          </div>
          <div className="grid md:grid-cols-3">
            <div className="bg_grid bg-auto bg-no-repeat bg-center">
              {/* <div className="bg-[#FEAD04] text-[#FFF] w-[70%] border-2 leading-5 p-[2px_30px]">
                <h2 className='text-[18px] font-bold'>Зерноочистительные комплексы</h2>
              </div> */}
              df
            </div>
          </div>
        </div>
      </section>

      {/* <section className="bg_section py-[30px]">
        <div className="container">
          <div className="md:flex  justify-between flex-wrap items-center">
            <div>
              <img src={olis} alt="" />
            </div>
            <form className="bg-[#FFFFFF] md:w-[45%] p-[40px_50px] w-full mt-[30px] md:mt-auto">
              <h2 className="text-[32px] font-light	">Форма обратной связи</h2>
              <p>Заполните форму и мы свяжемся с вами</p>
              <div className="py-[25px] flex gap-6">
                <input type="text" placeholder="Иван" />
                <input type="text" placeholder="Телефон" />
              </div>
              <div>
                <input type="text" placeholder="Email" className="w-[100%]" />
              </div>
            </form>
          </div>
        </div>
      </section> */}
    </div>
  );
}

export default Page3