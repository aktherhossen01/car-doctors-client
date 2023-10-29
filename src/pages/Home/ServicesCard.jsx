/* eslint-disable react/prop-types */
import { AiOutlineArrowRight } from 'react-icons/ai';


const ServicesCard = ({ser}) => {
    const {img,price,title}= ser
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><img className="h-64" src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="text-3xl font-bold ">{title}</h2>
    <div className="card-actions justify-end items-center">
    <p className="text-orange-500 text-lg font-bold">Price: ${price}</p>
      <button className="btn-circle  text-2xl text-orange-400"><AiOutlineArrowRight></AiOutlineArrowRight></button>
    </div>
  </div>
</div>
    );
};

export default ServicesCard;