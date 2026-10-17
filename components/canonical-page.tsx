import type { ReactNode } from "react";
import { SiteFooter } from "./site-footer";

export function CanonicalPage({children}:{children:ReactNode}){return <><main id="main-content" tabIndex={-1}>{children}</main><SiteFooter/></>}
