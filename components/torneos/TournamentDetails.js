import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import TournamentRegistration from './TournamentRegistration';
import NavbarCustom from '../NavbarCustom';
import FooterCustom from '../FooterCustom';
import { Divider, Image, Spacer } from "@nextui-org/react";
import { stateToHTML } from 'draft-js-export-html';  
import { convertFromRaw, EditorState, ContentState } from 'draft-js';

const Editor = dynamic(
  () => import('react-draft-wysiwyg').then((mod) => mod.Editor),
  { ssr: false }
);

const TournamentDetails = ({ tournament }) => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    if (tournament && tournament.reglas) {
      try {
        const reglasData = JSON.parse(tournament.reglas);
        const contentState = convertFromRaw(reglasData);
        setEditorState(EditorState.createWithContent(contentState));
        
        const contentHtml = stateToHTML(contentState);
        setHtmlContent(contentHtml);
      } catch (error) {
        console.error('Error parsing tournament rules JSON:', error);
      }
    }
  }, [tournament]);

  if (!tournament) {
    return <p>Loading...</p>;
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <NavbarCustom />
      <div className='container mx-auto py-10 px-4 md:px-0'>
        <div className="flex justify-center items-center mb-4">
          <Image className="w-full md:w-auto" src={tournament.image.url} alt={tournament.league_name} width={500} height={300} />
        </div>
        <h1 className='text-center text-3xl font-bold mb-4'>{tournament.league_name}</h1>
        
        <div className="ml-4 w-full">
          <Spacer y={0.5} />
          <h3>Información:</h3>
          {tournament.infoTorneo.map((info, index) => (
            <div key={index} className="mb-4">
              <p className="mb-1"><strong>Formato:</strong> {info.format}</p>
              <p className="mb-1"><strong>Banlist:</strong> {info.banlist}</p>
              <p className="mb-1"><strong>Información de Deck:</strong> {info.deck_info}</p>
              <p className="mb-1"><strong>Eliminación:</strong> {info.eliminacion}</p>
              <Spacer y={3} />
              <TournamentRegistration tournamentId={tournament._id} />
              <Spacer y={3} />
              <Divider orientation="horizontal" />
            </div>
          ))}
          <Spacer y={3} />
         
          <Editor
            readOnly
            editorState={editorState}
            toolbarClassName="hidden-toolbar"
          />
        
          <div className="prose prose-sm sm:prose lg:prose-lg" dangerouslySetInnerHTML={{ __html: htmlContent }} />
        </div>
      </div>
      <FooterCustom />
    </div>
  );
}

export default TournamentDetails;
