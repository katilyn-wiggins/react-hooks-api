import React from 'react'; 
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import HeyArnold from './HeyArnold' 
import HeyArnoldDetail from './HeyArnoldDetail'
import CharacterDetail from '../components/characters/CharacterDetail'
import {MemoryRouter} from 'react-router';

describe('Hey Arnold Container Tests', () => {
    it('displays hey arnold character/quotes on load', async() => {
        render(<MemoryRouter>
            <HeyArnold /> 
             </MemoryRouter>)
            
        const ul = await screen.findByRole('list', { name: 'character-list'})
        expect(ul).toMatchSnapshot(); 
    });
});


describe('Hey Arnold Detail Character Tests', () => {
    it('displays a single hey arnold character on the page', async() => {
        render(<MemoryRouter>
            <CharacterDetail name='Nancy' image='https://vignette.wikia.nocookie.net/heyarnold/imag…/latest/scale-to-width-down/310?cb=20110423055923'/>
              </MemoryRouter>)
    const figure = await screen.findByRole('individual')

    expect(figure).not.toBeEmptyDOMElement(); 
    });
});