import person from '../../assets/images/about_us/person.jpg'
import person1 from '../../assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200 mb-6">
  <div className="hero-content flex-col lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
    <img src={person1} className="w-1/2 absolute right-20 border-white top-32  border-8 rounded-lg shadow-2xl" />

    </div>
    <div className='lg:w-1/2 space-y-5'>
        <h1 className='text-3xl font-bold text-orange-600'>About Us</h1>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <p className="py-6">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. </p>
      <button className="btn bg-orange-700 text-white">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;