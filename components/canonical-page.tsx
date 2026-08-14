import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";
import { SiteNav } from "./site-nav";
export function CanonicalPage({children}:{children:ReactNode}){return <><SiteNav/><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></>}
