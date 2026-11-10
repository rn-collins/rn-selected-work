import type { Metadata } from 'next';
import { IdeaGallery } from '../../components/ideas/gallery';
import { ideas, exhibition } from '../../lib/ideas';
export const metadata: Metadata = {
 title:'Zero to One — The Concept Collection',
 description:'Proposals, research, prototypes, and paused concepts by Rayven-Nikkita (RN) Collins, neuroscientist, knowledge content creator, and builder.',
 alternates:{canonical:'/ideas'},
 openGraph:{title:'Zero to One / RN Collins',description:'Proposals, research, prototypes, and paused concepts.',url:'/ideas'},
};
export default function IdeasPage(){return <IdeaGallery ideas={ideas} exhibition={exhibition}/>;}
