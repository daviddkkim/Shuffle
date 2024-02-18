import { useState } from "react";
import { Button } from "./components/Button";
import { Panel } from "./components/Panel";
import {
  ArrowLeftToLine,
  ArrowRightToLine,
  ArrowDownToLine,
  ArrowUpToLine,
} from "lucide-react";

function App() {
  const [isLeftNavOpen, setIsLeftNavOpen] = useState(true);
  const [isRightNavOpen, setIsRightNavOpen] = useState(true);
  const [isBottomNavOpen, setIsBottomNavOpen] = useState(true);

  return (
    <div className="max-w-screen flex">
      <Panel side="left" open={isLeftNavOpen}>
        <Button
          size={"icon"}
          className="ml-auto"
          onClick={() => {
            setIsLeftNavOpen(!isLeftNavOpen);
          }}
        >
          <ArrowLeftToLine size={16} />
        </Button>
        <Button className="justify-start">Item1</Button>
      </Panel>
      <div className="relative flex w-full flex-col">
        {!isLeftNavOpen && (
          <Button
            size={"icon"}
            className="absolute left-2 top-2"
            onClick={() => {
              setIsLeftNavOpen(!isLeftNavOpen);
            }}
          >
            <ArrowRightToLine size={16} />
          </Button>
        )}
        {!isBottomNavOpen && (
          <Button
            size={"icon"}
            className="absolute bottom-2 right-2 ml-auto"
            onClick={() => {
              setIsBottomNavOpen(!isBottomNavOpen);
            }}
          >
            <ArrowUpToLine size={16} />
          </Button>
        )}
        {!isRightNavOpen && (
          <Button
            size={"icon"}
            className="absolute right-2 top-2"
            onClick={() => {
              setIsRightNavOpen(!isRightNavOpen);
            }}
          >
            <ArrowLeftToLine size={16} />
          </Button>
        )}
        <div className="flex h-full w-full justify-center">ads</div>
        <Panel side="bottom" open={isBottomNavOpen}>
          <Button
            size={"icon"}
            className="ml-auto"
            onClick={() => {
              setIsBottomNavOpen(!isBottomNavOpen);
            }}
          >
            <ArrowDownToLine size={16} />
          </Button>{" "}
          <Button>Item1</Button>
        </Panel>
      </div>
      <Panel side="right" open={isRightNavOpen}>
        <Button
          size={"icon"}
          onClick={() => {
            setIsRightNavOpen(!isRightNavOpen);
          }}
        >
          <ArrowRightToLine size={16} />
        </Button>{" "}
        <Button>Item1</Button>
      </Panel>
    </div>
  );
}

export default App;
