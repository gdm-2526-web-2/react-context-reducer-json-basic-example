import Button from "../components/Button/Button";
import Heading from "../components/Heading/Heading";
import { ROUTES } from "../constants";

const Intro = () => {
  return (
    <article>
      <header>
        <Heading level={1}>
          Basic example of React App with Data, Context, Reducer.
        </Heading>
      </header>

      <p>Are you ready to see if you understand React concepts?</p>

      <Button link={ROUTES.SHOP}>Start</Button>
    </article>
  );
};

export default Intro;
