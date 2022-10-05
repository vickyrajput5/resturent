import React from 'react'

const Cardmenu = ({menuData}) => {
  
  return (
    <>
    <section className="main-card--cointainer">
    {menuData.map((curElem)=>{
      const {id, name, description, image, category} = curElem;
      return(
        <>
          <div className="card-container" key={id}>
           <div className="card">
               <div className="card-body">
                   <span className="card-number card-circle subtle">{id}</span>
                   <span className="card-author subtle">{category}</span>
                   <h2 className="card-title">{name}</h2>
                   <span className="card-discription subtle">
                   {description}
                   </span>
                   <div className="card-read">Read</div>
                   <img src={image} alt="" className='card-media' />
                   <span className='card-tag subtle'>Order Now</span>
               </div>
           </div>
          </div>
        </>
      )
    })}
     </section>
    </>
  )
}

export default Cardmenu;