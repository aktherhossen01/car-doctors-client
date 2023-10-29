import img1 from '../../assets/images/banner/1.jpg'
import img2 from '../../assets/images/banner/2.jpg'
import img3 from '../../assets/images/banner/3.jpg'
import img4 from '../../assets/images/banner/4.jpg'

import { AiOutlineArrowRight ,AiOutlineArrowLeft} from 'react-icons/ai';

const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full rounded-xl" />
    <div className="absolute left-0 h-full rounded-xl  flex items-center  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
     <div className='text-white space-y-8 w-2/3 pl-16 '>
        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div >
        <button className="btn btn-info mr-6">Info</button>
<button className="btn btn-success">Success</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-0">
      <a href="#slide4" className="btn btn-circle mr-5 text-xl bg-orange-400  hover:bg-[#ffffff33]"><AiOutlineArrowLeft></AiOutlineArrowLeft></a> 
      <a href="#slide2" className="btn btn-circle text-xl bg-orange-400"><AiOutlineArrowRight></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full rounded-xl" />
    <div className="absolute left-0 h-full rounded-xl  flex items-center  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
     <div className='text-white space-y-8 w-2/3 pl-16 '>
        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div >
        <button className="btn btn-info mr-6">Info</button>
<button className="btn btn-success">Success</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-0">
      <a href="#slide1" className="btn btn-circle mr-5 text-xl bg-orange-400"><AiOutlineArrowLeft></AiOutlineArrowLeft></a> 
      <a href="#slide3" className="btn btn-circle text-xl bg-orange-400"><AiOutlineArrowRight></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full rounded-xl" />
    <div className="absolute left-0 h-full rounded-xl  flex items-center  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
     <div className='text-white space-y-8 w-2/3 pl-16 '>
        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div >
        <button className="btn btn-info mr-6">Info</button>
<button className="btn btn-success">Success</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-0">
      <a href="#slide2" className="btn btn-circle mr-5 text-xl bg-orange-400"><AiOutlineArrowLeft></AiOutlineArrowLeft></a> 
      <a href="#slide4" className="btn btn-circle text-xl bg-orange-400"><AiOutlineArrowRight></AiOutlineArrowRight></a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full rounded-xl" />
    <div className="absolute left-0 h-full rounded-xl  flex items-center  bottom-0 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)]">
     <div className='text-white space-y-8 w-2/3 pl-16 '>
        <h1 className='text-5xl '>Affordable Price For Car Servicing</h1>
        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
        <div >
        <button className="btn btn-info mr-6">Info</button>
<button className="btn btn-success">Success</button>
        </div>
     </div>
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-7 bottom-0">
      <a href="#slide3" className="btn btn-circle mr-5 text-xl bg-orange-400"><AiOutlineArrowLeft></AiOutlineArrowLeft></a> 
      <a href="#slide1" className="btn btn-circle text-xl bg-orange-400"><AiOutlineArrowRight></AiOutlineArrowRight></a>
    </div>
  </div>
</div>
    );
};

export default Banner;