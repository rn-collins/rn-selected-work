import type { Metadata } from 'next';
import { IdeaGallery } from '../../components/ideas/gallery';
import { ideas, exhibition } from '../../lib/ideas';
export const metadata: Metadata = {
 title:'Zero to One — The Concept Collection',
 description:'Concepts, proposals and working systems conceived and developed by Rayven-Nikkita Collins. Explore the questions, the connections and the forms they take.',
 alternates:{canonical:'/ideas'},
 openGraph:{title:'Zero to One / RN Collins',description:'Before it exists, someone has to see it. Explore the concept collection.',url:'/ideas'},
};
export default function IdeasPage(){return <IdeaGallery ideas={ideas} exhibition={exhibition}/>;}
