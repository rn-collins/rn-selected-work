import type { Metadata } from 'next';
import { IdeaGallery } from '../../components/ideas/gallery';
import { ideas, exhibition } from '../../lib/ideas';
export const metadata: Metadata = {
 title:'Zero to One — The Concept Collection',
 description:'Proposals, research, prototypes, and paused concepts for a reader following an idea before it is a product. Not shipped builds, and not named client work. Rayven-Nikkita (RN) Collins, neuroscientist, knowledge content creator, and builder.',
 alternates:{canonical:'/ideas'},
 openGraph:{title:'Zero to One / RN Collins',description:'Proposals, research, prototypes, and paused concepts. Not shipped builds, and not named client work.',url:'/ideas'},
};
export default function IdeasPage(){return <IdeaGallery ideas={ideas} exhibition={exhibition}/>;}
