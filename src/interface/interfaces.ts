//NavLink.tsx
export interface NavLinkProps {
    href: string;
    title: string;
  }
  

  //TabButton.tsx
  export interface TabButtonProps {
    active: boolean;
    selectTab: () => void;
    children: React.ReactNode;
  }
  
  //ProjectTag.tsx
  export interface ProjectTagProps {
    name: string;
    onClick: (name: string) => void;
    isSelected: boolean;
  }

  //MenuOverlay.tsx
  export interface MenuOverlayProps {
    links: { path: string; title: string }[];
  }
  