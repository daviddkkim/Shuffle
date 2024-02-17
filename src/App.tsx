import { Button } from "./components/Button";
import { SideNav } from "./components/Sidenav";

function App() {
  return (
    <div className="flex">
      <SideNav side="left">
        <Button> Hello </Button>
      </SideNav>
      <div className="flex w-full flex-col">
        <div className="flex h-full w-full justify-center">ads</div>
        <SideNav side="bottom">
          <Button> Hello </Button>
        </SideNav>
      </div>
      <SideNav side="right">
        <Button> Hello </Button>
      </SideNav>
    </div>
  );
}

export default App;
