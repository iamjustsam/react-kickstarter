import React from "react";
import { animated, useTransition } from "react-spring";

interface SidenavContainerProps {
  children: React.ReactNode;
}

export const SidenavContainer: React.FC<SidenavContainerProps> = React.memo(({ children }) => (
  <div
    data-testid="sidenav-container"
    className="flex flex-row flex-1 overflow-hidden"
  >
    {children}
  </div>
));

interface SidenavProps {
  isSidenavOpen: boolean;
  children: React.ReactNode;
}

export const Sidenav: React.FC<SidenavProps> = React.memo(
  ({ children, isSidenavOpen }) => {
    const width = "14rem";
    const transitions = useTransition(isSidenavOpen, {
      from: { marginLeft: `-${width}` },
      enter: { marginLeft: "0" },
      leave: { marginLeft: `-${width}` },
    });
    return (
      <>
        {
          transitions((styles, item) => item && <animated.div style={styles}>
            <div
              data-testid="sidenav"
              style={{ width }}
              className={`p-6 border-r border-black flex-grow-0 flex-shrink-0 h-full`}
            >
              {children}
            </div>
          </animated.div>)
        }
      </>
    );
  }
);

interface SideNavContentProps {
  children: React.ReactNode;
}

export const SidenavContent: React.FC<SideNavContentProps> = React.memo(({ children }) => (
  <div className="flex-1 p-2" data-testid="sidenav-content">
    {children}
  </div>
));
