import { RendererProvider, createComponent } from "react-fela";
import { createRenderer } from "fela";
import Main from "./Main";

const AppWrapper = createComponent(
  () => ({
    textAlign: "center",
  }),
  "div"
);

const renderer = createRenderer();
const App = (props) => {

  return (
    <RendererProvider renderer={renderer}>
      <AppWrapper>
        <Main {...props} />
      </AppWrapper>
    </RendererProvider>
  );
};

export default App;
