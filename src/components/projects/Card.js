import './Card.css'

const Card = ({ name, image, description, link }) => {
  return (
    <div class='project' data-aos='fade-up'>
      <div class='image-wrapper'>
        <img src={image} alt='Project Name' />
      </div>
      <div class='content-wrapper'>
        <h3>{name}</h3>
        <p>{description}</p>
        {link !== undefined && <a href={link} target='_blank'>Github</a>}
      </div>
    </div>

  )
}
export default Card