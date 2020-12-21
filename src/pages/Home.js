import { Link } from 'react-router-dom';
import Thumbnail from '../components/Thumbnail';

const Home = (props) => {
  const project = props.work.map((project) => {
    return (
      <Link to={`/work/${project.id}`} key={project.id}>
        <Thumbnail title={project.title} img={project.heroImg} />
      </Link>
    );
  });

  return <div className="div-thumbnail-grid">{project}</div>;
};

export default Home;
