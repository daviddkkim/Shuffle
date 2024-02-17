import { useState } from "react";
import { Button } from "./components/Button";
import { SideNav } from "./components/Sidenav";
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
      <SideNav side="left" open={isLeftNavOpen}>
        <Button
          size={"icon"}
          className="ml-auto"
          onClick={() => {
            setIsLeftNavOpen(!isLeftNavOpen);
          }}
        >
          <ArrowLeftToLine size={16} />
        </Button>
        <Button>Item1</Button>
      </SideNav>
      <div className="relative flex w-full flex-col">
        {!isLeftNavOpen && (
          <Button
            size={"icon"}
            className="absolute left-0 top-0"
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
            className="absolute bottom-0 right-0 ml-auto"
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
            className="absolute right-0 top-0"
            onClick={() => {
              setIsRightNavOpen(!isRightNavOpen);
            }}
          >
            <ArrowLeftToLine size={16} />
          </Button>
        )}
        <div className="flex h-full w-full justify-center">ads</div>
        <SideNav side="bottom" open={isBottomNavOpen}>
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
        </SideNav>
      </div>
      <SideNav side="right" open={isRightNavOpen}>
        <Button
          size={"icon"}
          onClick={() => {
            setIsRightNavOpen(!isRightNavOpen);
          }}
        >
          <ArrowRightToLine size={16} />
        </Button>{" "}
        <Button>Item1</Button>
      </SideNav>
    </div>
  );
}

export default App;
