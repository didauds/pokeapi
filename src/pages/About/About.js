import Container from '../../components/Container'

const About = () => {
  return (
    <Container className="container-fluid mx-auto">
      <div>
        <h1>About</h1>
        <hr />
        <div>
          <br />
          <h2>What this is?</h2>
          <p>This website provides a RESTful API interface to highly detailed objects built from thousands of lines of data related to Pokémon. 
            We specifically cover the video game franchise. Using this website, you can consume information on Pokémon, their moves, abilities, 
            types, egg groups and much, much more.</p>
          <br />
          <h2>What is an API?</h2>
          <p>An API (Application Programming Interface) is a contract that allow developers to interact with an application through a set of interfaces. 
            In this case, the application is a database of thousands of Pokémon-related objects, and the interfaces are URL links.
          </p>
          <br />
          <p>A RESTful API is an API that conforms to a set of loose conventions based on HTTP verbs, errors, and hyperlinks.</p>
        </div>
      </div>     
    </Container>
    
  )
}

export default About;